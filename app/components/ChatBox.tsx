"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import ReactMarkdown from "react-markdown";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  sender: "user" | "bot";
  text: string;
};

export default function ChatBox() {
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: "Salut ! Pose-moi une question sur mes projets 😊" }
  ]);
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [expanded, setExpanded] = useState<boolean>(false); // Pour l'animation
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll automatique
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  async function sendMessage() {
    if (!input.trim()) return;

    const userMsg: Message = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input })
      });

      if (!res.ok) throw new Error("Erreur API");

      const data: { reply: string } = await res.json();
      const botMsg: Message = { sender: "bot", text: data.reply };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Une erreur est survenue 😅" }
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKey(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <section className="w-full max-w-3xl">
      <div className="rounded-3xl shadow-xl border border-gray-100 bg-white p-6 flex flex-col">
         {/* Chat complet animé */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "24rem" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-auto p-4 mt-4 rounded-2xl bg-gray-50 flex-1 space-y-4"
              ref={scrollRef}
            >
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`max-w-[75%] p-3 rounded-xl text-sm break-words whitespace-pre-line ${
                    m.sender === "user"
                      ? "bg-black text-white ml-auto"
                      : "bg-white border border-gray-200"
                  }`}
                >
                  {m.sender === "bot" ? (
                    <ReactMarkdown>{m.text}</ReactMarkdown>
                  ) : (
                    m.text
                  )}
                </div>
              ))}
              {loading && (
                <div className="text-gray-500 text-sm">L’assistant écrit...</div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
        {/* Input toujours visible */}
        <div className="flex gap-3">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (!expanded) setExpanded(true);
              handleKey(e);
            }}
            placeholder="Demande-lui de te montrer un projet..."
            className="flex-grow border border-gray-200 rounded-xl px-4 py-3 text-sm bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black transition resize-none"
            rows={1}
          />
          <button
            onClick={() => {
              if (!expanded) setExpanded(true);
              sendMessage();
            }}
            className="px-6 py-3 bg-black text-white rounded-xl text-sm font-medium hover:opacity-90 transition"
          >
            Envoyer
          </button>
        </div>

      </div>
    </section>
  );
}
