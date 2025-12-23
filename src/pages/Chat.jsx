import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Phone, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FloatingShapes from "@/components/FloatingShapes";
import ParticleField from "@/components/ParticleField";
import UserRegistrationForm from "@/components/chat/UserRegistrationForm";
import ChatContainer from "@/components/chat/ChatContainer";
import ChatInput from "@/components/chat/ChatInput";

const botResponses = [
  "Great question! I can help you with tax planning, ITR filing, and connecting you with expert CAs. What specifically would you like to know?",
  "I understand. For tax-saving options, you might want to consider Section 80C investments, 80D health insurance, or home loan deductions. Would you like details on any of these?",
  "Sure! Our platform offers automated tax calculations, AI-powered suggestions for savings, and direct access to certified chartered accountants. Which feature interests you most?",
  "That's a common concern. The deadline for ITR filing is usually July 31st for individuals. I can help you prepare all necessary documents. Shall I guide you through the process?",
  "Absolutely! I can explain the differences between old and new tax regimes to help you choose the best option for your situation. Which aspects concern you the most?",
  "I'm here to assist! Feel free to ask about deductions, exemptions, tax-saving investments, or any other tax-related queries you have.",
];

const Chat = () => {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const handleUserRegistration = (userData) => {
    setUser(userData);
    // Add welcome message
    const welcomeMessage = {
      id: Date.now(),
      role: "bot",
      content: `Hello ${userData.name}! 👋 Welcome to TaxPlan AI. I'm your personal tax assistant. How can I help you today?\n\nYou can ask me about:\n• Tax filing & ITR preparation\n• Tax-saving investments\n• Deductions & exemptions\n• Connecting with a CA`,
      timestamp: new Date(),
    };
    setMessages([welcomeMessage]);
  };

  const handleSendMessage = useCallback((content) => {
    // Add user message
    const userMessage = {
      id: Date.now(),
      role: "user",
      content,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);

    // Simulate bot typing
    setIsTyping(true);
    setTimeout(() => {
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      const botMessage = {
        id: Date.now() + 1,
        role: "bot",
        content: randomResponse,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <ParticleField />
        <FloatingShapes />
        <div className="hero-glow top-1/4 left-1/4 opacity-30" />
        <div className="hero-glow bottom-1/4 right-1/4 opacity-20" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="w-5 h-5" />
                <span className="text-sm font-medium">Back</span>
              </Link>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="font-semibold text-foreground">
                  TaxPlan <span className="gradient-text">AI</span>
                </span>
              </div>

              {user && (
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground hidden sm:inline">{user.phone}</span>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 pt-16 pb-4 flex flex-col">
          <AnimatePresence mode="wait">
            {!user ? (
              <motion.div
                key="registration"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex-1 flex items-center justify-center px-4 py-8"
              >
                <UserRegistrationForm onSubmit={handleUserRegistration} />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex-1 flex flex-col container mx-auto px-4 max-w-3xl"
              >
                {/* Chat Messages */}
                <div className="flex-1 glass-card rounded-t-2xl rounded-b-none mt-4 flex flex-col overflow-hidden">
                  <ChatContainer
                    messages={messages}
                    isTyping={isTyping}
                    userName={user.name}
                  />
                </div>

                {/* Chat Input */}
                <div className="glass-card rounded-t-none rounded-b-2xl p-4 border-t-0">
                  <ChatInput onSend={handleSendMessage} disabled={isTyping} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default Chat;
