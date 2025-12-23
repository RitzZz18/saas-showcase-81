import { useState } from "react";
import { motion } from "framer-motion";
import { User, Phone, MessageSquare, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const UserRegistrationForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto"
    >
      <div className="glass-card p-8 relative overflow-hidden">
        {/* Decorative gradient */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
        
        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center"
            >
              <MessageSquare className="w-8 h-8 text-primary-foreground" />
            </motion.div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Welcome to <span className="gradient-text">TaxPlan AI</span>
            </h2>
            <p className="text-muted-foreground text-sm">
              Share your details to get personalized assistance
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground flex items-center gap-2">
                <User className="w-4 h-4 text-primary" />
                Your Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-secondary/50 border-border/50 focus:border-primary/50 h-12 text-foreground placeholder:text-muted-foreground"
              />
              {errors.name && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-destructive text-sm"
                >
                  {errors.name}
                </motion.p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-foreground flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter 10-digit phone number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-secondary/50 border-border/50 focus:border-primary/50 h-12 text-foreground placeholder:text-muted-foreground"
              />
              {errors.phone && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-destructive text-sm"
                >
                  {errors.phone}
                </motion.p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 font-medium glow-effect group"
            >
              Start Chat
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>

          <p className="text-center text-muted-foreground text-xs mt-6">
            Your information is secure and will only be used to personalize your experience
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default UserRegistrationForm;
