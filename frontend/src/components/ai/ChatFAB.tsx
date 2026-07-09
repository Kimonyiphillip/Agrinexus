import { useState } from "react";
import { MessageSquare, X } from "lucide-react";
import { cn } from "@/utils/cn";
import { GREEN } from "@/utils/constants";
import { ChatPanel } from "./ChatPanel";
import type { AIContext } from "@/services/aiService";

interface ChatFABProps {
  context?: AIContext;
}

export function ChatFAB({ context = "general" }: ChatFABProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Chat Panel */}
      <div className={cn(
        "fixed bottom-20 right-5 z-50 w-[380px] transition-all duration-300 ease-out",
        open
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-4 scale-95 pointer-events-none"
      )}>
        <ChatPanel
          defaultContext={context}
          compact
          onClose={() => setOpen(false)}
          className="shadow-2xl shadow-black/15"
        />
      </div>

      {/* FAB Button */}
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full flex items-center justify-center",
          "shadow-lg shadow-black/20 transition-all duration-200 hover:scale-105 active:scale-95",
          open ? "rotate-0" : "animate-bounce-slow"
        )}
        style={{ background: GREEN }}
      >
        {open ? (
          <X className="w-5 h-5 text-white transition-transform" />
        ) : (
          <div className="relative">
            <MessageSquare className="w-5.5 h-5.5 text-white" />
            <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-amber-400 border-2 border-white animate-pulse" />
          </div>
        )}
      </button>

      {/* Custom animation */}
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
