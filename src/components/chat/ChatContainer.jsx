import { useRef, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import ChatMessage from "./ChatMessage";
import TypingIndicator from "./TypingIndicator";

const ChatContainer = ({ messages, isTyping, userName }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  return (
    <div
      ref={scrollRef}
      className="flex-1 overflow-y-auto px-4 py-6 space-y-4 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent"
    >
      <AnimatePresence mode="popLayout">
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message}
            isBot={message.role === "bot"}
            userName={userName}
          />
        ))}
        {isTyping && <TypingIndicator />}
      </AnimatePresence>
    </div>
  );
};

export default ChatContainer;
