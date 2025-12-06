import { ArrowRight, Shield, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import FloatingShapes from "./FloatingShapes";
import ParticleField from "./ParticleField";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <ParticleField />
      <FloatingShapes />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary font-medium">
              India's #1 Tax-Tech Platform
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-tight mb-6"
          >
            Smart Tax Filing.{" "}
            <motion.span 
              className="gradient-text inline-block"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Verified CAs.
            </motion.span>{" "}
            <span className="gradient-text-accent">Zero Hassle.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Connect with ICAI-verified Chartered Accountants, file taxes with AI-powered 
            assistance, and manage all compliance from one intelligent platform.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded-xl font-medium group glow-effect"
              >
                Start Filing for Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-border/50 text-foreground hover:bg-secondary/50 text-lg px-8 py-6 rounded-xl"
              >
                Book a Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-8"
          >
            {[
              { icon: Shield, text: "Bank-Grade Security" },
              { icon: Users, text: "10,000+ CAs Registered" },
              { icon: Zap, text: "AI-Powered Matching" },
            ].map((item, index) => (
              <motion.div 
                key={item.text}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 text-muted-foreground"
              >
                <item.icon className="w-5 h-5 text-primary" />
                <span className="text-sm">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Dashboard Preview */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
          <motion.div 
            className="glass-card p-2 rounded-2xl max-w-5xl mx-auto"
            whileHover={{ 
              rotateX: 2,
              rotateY: 2,
              scale: 1.01,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="bg-secondary/30 rounded-xl aspect-video flex items-center justify-center relative overflow-hidden">
              {/* Animated Dashboard UI */}
              <div className="absolute inset-4 grid grid-cols-4 gap-4 opacity-80">
                <motion.div 
                  className="col-span-1 space-y-3"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                >
                  <div className="h-8 bg-primary/20 rounded-lg" />
                  <div className="h-6 bg-muted/50 rounded w-3/4" />
                  <div className="h-6 bg-muted/50 rounded w-1/2" />
                  <div className="h-6 bg-muted/50 rounded w-2/3" />
                  <div className="h-6 bg-muted/50 rounded w-3/4" />
                </motion.div>
                <motion.div 
                  className="col-span-3 space-y-4"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.4, duration: 0.8 }}
                >
                  <div className="flex gap-4">
                    <motion.div 
                      className="flex-1 h-28 bg-gradient-to-br from-primary/30 to-primary/10 rounded-xl"
                      whileHover={{ scale: 1.05 }}
                      animate={{ boxShadow: ["0 0 0px hsl(174 72% 56% / 0)", "0 0 20px hsl(174 72% 56% / 0.3)", "0 0 0px hsl(174 72% 56% / 0)"] }}
                      transition={{ boxShadow: { duration: 2, repeat: Infinity } }}
                    />
                    <motion.div 
                      className="flex-1 h-28 bg-gradient-to-br from-accent/30 to-accent/10 rounded-xl"
                      whileHover={{ scale: 1.05 }}
                      animate={{ boxShadow: ["0 0 0px hsl(38 92% 50% / 0)", "0 0 20px hsl(38 92% 50% / 0.3)", "0 0 0px hsl(38 92% 50% / 0)"] }}
                      transition={{ boxShadow: { duration: 2, repeat: Infinity, delay: 0.5 } }}
                    />
                    <div className="flex-1 h-28 bg-muted/30 rounded-xl" />
                  </div>
                  <motion.div 
                    className="h-40 bg-muted/20 rounded-xl relative overflow-hidden"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.6, duration: 0.8 }}
                  >
                    {/* Animated chart bars */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-end gap-2 h-24">
                      {[60, 80, 45, 90, 70, 85, 55, 95, 75].map((height, i) => (
                        <motion.div
                          key={i}
                          className="flex-1 bg-primary/40 rounded-t"
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ delay: 1.8 + i * 0.1, duration: 0.5 }}
                        />
                      ))}
                    </div>
                  </motion.div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-24 bg-muted/30 rounded-xl" />
                    <div className="h-24 bg-muted/30 rounded-xl" />
                  </div>
                </motion.div>
              </div>
              <motion.div 
                className="text-muted-foreground/50 text-lg font-medium z-20"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Platform Dashboard Preview
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
