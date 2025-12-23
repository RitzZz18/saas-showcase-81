import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const ChatInput = ({ onSend, disabled }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSend(message.trim());
      setMessage("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 items-end">
      <div className="flex-1 relative">
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          disabled={disabled}
          className="min-h-[52px] max-h-32 resize-none bg-secondary/50 border-border/50 focus:border-primary/50 text-foreground placeholder:text-muted-foreground rounded-xl pr-4"
          rows={1}
        />
      </div>
      <Button
        type="submit"
        disabled={!message.trim() || disabled}
        className="h-[52px] w-[52px] rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 glow-effect"
      >
        <Send className="w-5 h-5" />
      </Button>
    </form>
  );
};

export default ChatInput;
