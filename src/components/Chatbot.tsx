"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";

type Message = {
  id: string;
  role: "user" | "bot";
  content: string;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "bot",
      content: "Hi! I'm the PLV Assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const history = messages
        .filter((m) => m.id !== "1") // filter out initial greeting if necessary, though it's fine
        .map((m) => ({ role: m.role, content: m.content }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          history,
          message: userMsg.content,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessages((prev) => [
          ...prev,
          { id: (Date.now() + 1).toString(), role: "bot", content: data.text },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          { id: (Date.now() + 1).toString(), role: "bot", content: "Sorry, I encountered an error. Please try again later." },
        ]);
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { id: (Date.now() + 1).toString(), role: "bot", content: "Network error. Please make sure you are online." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-80 sm:w-96 h-[500px] z-[100] bg-surface border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col backdrop-blur-xl"
          >
            {/* Header */}
            <div className="bg-accent/10 border-b border-white/5 px-4 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                  <Bot size={18} className="text-slate-950" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm">PLV Assistant</h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-xs text-slate-400">Online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={cn(
                    "flex gap-3 max-w-[85%]",
                    msg.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
                  )}
                >
                  <div
                    className={cn(
                      "w-8 h-8 shrink-0 rounded-full flex items-center justify-center",
                      msg.role === "user" ? "bg-blue-600" : "bg-surface border border-white/10"
                    )}
                  >
                    {msg.role === "user" ? <User size={14} className="text-white" /> : <Bot size={14} className="text-accent" />}
                  </div>
                  <div
                    className={cn(
                      "px-4 py-2.5 rounded-2xl text-sm leading-relaxed",
                      msg.role === "user"
                        ? "bg-blue-600 text-white rounded-tr-sm"
                        : "bg-background border border-white/5 text-slate-200 rounded-tl-sm"
                    )}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3 max-w-[85%] mr-auto">
                  <div className="w-8 h-8 shrink-0 rounded-full bg-surface border border-white/10 flex items-center justify-center">
                    <Bot size={14} className="text-accent" />
                  </div>
                  <div className="px-5 py-3.5 bg-background border border-white/5 rounded-2xl rounded-tl-sm flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></span>
                    <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-background border-t border-white/5">
              <form onSubmit={sendMessage} className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about our projects..."
                  disabled={isLoading}
                  className="w-full bg-surface border border-white/10 rounded-full pl-4 pr-12 py-3 text-sm text-foreground focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 w-8 h-8 rounded-full bg-accent text-slate-950 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent-hover transition-colors"
                >
                  <Send size={14} className="ml-0.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="fixed bottom-24 right-6 bg-surface border border-white/10 px-4 py-3 rounded-2xl rounded-br-sm shadow-xl z-50 text-sm font-medium text-slate-200 max-w-[200px]"
          >
            Need any help with our projects and our company?
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="fixed bottom-6 right-6 w-14 h-14 bg-accent text-slate-950 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center justify-center z-50 hover:bg-accent-hover hover:scale-105 transition-all"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>
    </>
  );
}
