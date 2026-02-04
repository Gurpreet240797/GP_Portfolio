import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { OpenRouter } from "@openrouter/sdk";

export async function POST(req: Request) {
  try {
    const supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_KEY!
    );

    const openrouter = new OpenRouter({
      apiKey: process.env.OPENAI_API_KEY!,
    });

    const body = await req.json();
    const message =
      typeof body.message === "string"
        ? body.message
        : body.messages?.length > 0
        ? body.messages[body.messages.length - 1]?.parts?.find(
            (p: { type: string }) => p.type === "text"
          )?.text
        : undefined;

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "No message provided" },
        { status: 400 }
      );
    }

    // ================================
    // 1️⃣ Generate Embedding
    // ================================
    const embeddingRes = await openrouter.embeddings.generate({
      model: "text-embedding-3-large",
      input: message,
    });

    if (
      typeof embeddingRes === "string" ||
      !embeddingRes.data ||
      !embeddingRes.data.length
    ) {
      throw new Error("Invalid embedding response from OpenRouter");
    }

    const queryEmbedding = embeddingRes.data[0].embedding;

    if (!Array.isArray(queryEmbedding)) {
      throw new Error("Embedding is not a valid vector");
    }

    if (!Array.isArray(queryEmbedding) || queryEmbedding.length === 0) {
      return NextResponse.json(
        { error: "Embedding generation failed" },
        { status: 500 }
      );
    }

    // ================================
    // 2️⃣ Vector Search
    // ================================
    const { data: matches, error } = await supabase.rpc("match_documents", {
      query_embedding: queryEmbedding,
      match_count: 5,
      filter: {},
    });

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Vector search failed" },
        { status: 500 }
      );
    }

    // ================================
    // 3️⃣ Similarity Check
    // ================================
    const THRESHOLD = 0.5;
    const topMatch = matches?.[0];

    if (!matches?.length || !topMatch || topMatch.similarity < THRESHOLD) {
      return NextResponse.json({
        text: "I can help you with questions about Gurpreet's portfolio, such as work experience, projects, skills, and education. Please ask something related to that.",
      });
    }

    // ================================
    // 4️⃣ Build Context
    // ================================
    const contextText = matches.map((m: any) => m.content).join("\n\n---\n\n");

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
    // 5️⃣ Generate Final Answer
    // ================================
    const completion = await openrouter.chat.send({
      model: "openai/gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      temperature: 0.4,
    });

    const rawContent = completion.choices[0]?.message?.content;

    let answer = "Sorry, I couldn't generate a response.";

    if (typeof rawContent === "string") {
      answer = rawContent;
    } else if (Array.isArray(rawContent)) {
      // Extract only text parts
      answer = rawContent
        .filter((item: any) => item.type === "text")
        .map((item: any) => item.text)
        .join("");
    }

    return NextResponse.json({ text: answer });
  } catch (err) {
    console.error("API ERROR:", err);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
