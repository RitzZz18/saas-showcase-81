import { motion } from "framer-motion";
import { Bot, User } from "lucide-react";

const ChatMessage = ({ message, isBot, userName }) => {
  const formatTime = (date) => {
    return new Date(date).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={`flex gap-3 ${isBot ? "justify-start" : "justify-end"}`}
    >
      {isBot && (
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center flex-shrink-0">
          <Bot className="w-4 h-4 text-primary-foreground" />
        </div>
      )}

      <div className={`max-w-[75%] ${isBot ? "" : "order-first"}`}>
        <div
          className={`px-4 py-3 rounded-2xl ${
            isBot
              ? "glass-card bg-card/80 text-foreground rounded-tl-sm"
              : "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-tr-sm"
          }`}
        >
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
        </div>
        <p
          className={`text-xs text-muted-foreground mt-1 ${
            isBot ? "text-left" : "text-right"
          }`}
        >
          {formatTime(message.timestamp)}
        </p>
      </div>

      {!isBot && (
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center flex-shrink-0">
          <span className="text-xs font-semibold text-accent-foreground">
            {userName?.charAt(0)?.toUpperCase() || <User className="w-4 h-4" />}
          </span>
        </div>
      )}
    </motion.div>
  );
};

export default ChatMessage;
