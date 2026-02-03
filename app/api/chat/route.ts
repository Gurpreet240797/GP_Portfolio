import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { OpenRouter } from "@openrouter/sdk";

interface EmbeddingResponse {
  data: { embedding: number[] }[];
}

export async function POST(req: Request) {
  try {
    // ✅ Create clients inside handler (prevents startup crashes)
    const supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_KEY!
    );

    const openrouter = new OpenRouter({
      apiKey: process.env.OPENAI_API_KEY!,
    });

    // ✅ Read request body
    const body = await req.json();
    const messages = body.messages;

    if (!messages || messages.length === 0) {
      return NextResponse.json(
        { error: "No messages provided" },
        { status: 400 }
      );
    }

    // ✅ Extract last user message text (AI SDK format)
    const lastMessage = messages[messages.length - 1];

    const message =
      lastMessage.parts?.find((p: any) => p.type === "text")?.text;

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Invalid message" },
        { status: 400 }
      );
    }

    // ================================
    // 1️⃣ Generate Embedding
    // ================================
    const embeddingRes = (await openrouter.embeddings.generate({
      model: "text-embedding-3-large",
      input: message,
    })) as EmbeddingResponse;

    const queryEmbedding = embeddingRes.data[0].embedding;

    // ================================
    // 2️⃣ Search Supabase (Vector Match)
    // ================================
    const { data: matches, error } = await supabase.rpc(
      "match_documents",
      {
        query_embedding: queryEmbedding,
        match_count: 5,
        filter: {},
      }
    );

    if (error) {
      console.error("Supabase match_documents error:", error);
      return NextResponse.json(
        { error: "Vector search failed" },
        { status: 500 }
      );
    }

    // ================================
    // 3️⃣ Handle Low Similarity
    // ================================
    const THRESHOLD = 0.5;
    const topMatch = matches?.[0];

    if (!matches || matches.length === 0 || topMatch.similarity < THRESHOLD) {
      return NextResponse.json({
        text: `I can help you with questions about Gurpreet's portfolio, such as work experience, projects, skills, and education. Please ask something related to that.`,
      });
    }

    // ================================
    // 4️⃣ Build Context
    // ================================
    const contextText = matches
      .map((m: any) => m.content)
      .join("\n\n---\n\n");

    const systemPrompt = `
You are Gurpreet Singh's AI assistant. 
You have access to his resume and LinkedIn information. 
Answer professionally and accurately based only on the provided context.
If something is not in the context, say you don't know.
`.trim();

    const userPrompt = `
Context:
${contextText}

User Question:
${message}

Answer clearly and professionally.
`.trim();

    // ================================
    // 5️⃣ Generate Final Response
    // ================================
    const completion = await openrouter.chat.send({
      model: "openai/gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      temperature: 0.4,
    });

    const answer =
      completion.choices[0]?.message?.content ??
      "Sorry, I couldn't generate a response.";

    // ✅ IMPORTANT: Must return `text` for ai-sdk
    return NextResponse.json({
      text: answer,
    });
  } catch (err) {
    console.error("API ERROR:", err);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
