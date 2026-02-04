"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type ChatMessage = { role: "user" | "assistant"; text: string };

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userText }]);
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userText }),
      });
      const data = await res.json();

      if (!res.ok) {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            text: data.error ?? "Something went wrong.",
          },
        ]);
        return;
      }

      const reply = typeof data.text === "string" ? data.text : "No response.";
      setMessages((prev) => [...prev, { role: "assistant", text: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: "Failed to get a response." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <Card className="w-[28rem] h-[50rem] shadow-xl border-2 border-primary/30 flex flex-col bg-card mb-3">
          {/* Header */}
          <div className="flex items-start justify-between border-b border-primary/20 bg-card/80 px-4 pt-2 pb-2">
            <div>
              <h3 className="font-bold text-foreground text-sm">
                Ask me anything! <span className="italic">(BETA)</span>
              </h3>
              <p className="text-xs text-muted-foreground">
                Powered by Gurpreet's Resume and LinkedIn
              </p>
            </div>

            <Button
              onClick={() => setIsOpen(false)}
              className="rounded-full w-10 h-10 bg-primary cursor-pointer flex items-center justify-center -mt-2"
              size="icon"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 && (
              <div className="text-center text-sm text-muted-foreground mt-8">
                <p>
                  Hi, Welcome to personalized <b>GP-AI</b> 👋
                </p>
                <p className="mt-2">
                  Ask me about Gurpreet's experience, skills, or projects!
                </p>
                <p className="mt-2 italic underline">
                  This feature is experimental and still improving
                </p>
              </div>
            )}
            {messages.map((message, idx) => (
              <div
                key={idx}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSendMessage}
            className="border-t border-primary/20 p-3 bg-card/80"
          >
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question..."
                className="flex-1 px-3 py-2 text-sm border border-border rounded bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                disabled={isLoading}
              />
              <Button
                type="submit"
                size="sm"
                className="bg-primary hover:bg-primary/80 text-primary-foreground"
                disabled={isLoading || !input.trim()}
              >
                Send
              </Button>
            </div>
          </form>
        </Card>
      )}

      {/* Toggle Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full w-14 h-14 shadow-lg bg-primary cursor-pointer hover:bg-primary/80 text-primary-foreground flex items-center justify-center"
          size="icon"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </Button>
      )}
    </div>
  );
}
