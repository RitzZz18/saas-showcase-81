import { UserPlus, Search, FileText, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Sign Up",
    description: "Create your account in seconds. Individuals, businesses, or CAs - everyone's welcome.",
    color: "primary"
  },
  {
    icon: Search,
    step: "02",
    title: "Get Matched",
    description: "Our AI analyzes your profile and matches you with the ideal CA for your specific needs.",
    color: "accent"
  },
  {
    icon: FileText,
    step: "03",
    title: "Upload & File",
    description: "Securely upload documents. Your CA prepares and files with maker-checker verification.",
    color: "primary"
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "Track & Relax",
    description: "Real-time status updates. Get notified at every step until successful filing.",
    color: "accent"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Filing Taxes Made{" "}
            <span className="gradient-text-accent">Effortless</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Four simple steps to complete peace of mind. 
            From signup to successful filing in minutes.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="relative group"
            >
              {/* Connection line for desktop */}
              {index < steps.length - 1 && (
                <motion.div 
                  className="hidden lg:block absolute top-16 left-[60%] w-full h-px"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
                >
                  <div className={`h-full bg-gradient-to-r ${step.color === 'primary' ? 'from-primary/50 to-accent/50' : 'from-accent/50 to-primary/50'}`} />
                  <motion.div
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  />
                </motion.div>
              )}
              
              <motion.div 
                className="glass-card p-6 h-full hover:border-primary/50 transition-all duration-500"
                whileHover={{ 
                  y: -10,
                  rotateY: 5,
                  rotateX: 5,
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Step Number */}
                <motion.div 
                  className={`text-6xl font-bold ${step.color === 'primary' ? 'gradient-text' : 'gradient-text-accent'} opacity-20 absolute top-4 right-4`}
                  animate={{ 
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                >
                  {step.step}
                </motion.div>
                
                {/* Icon */}
                <motion.div 
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color === 'primary' ? 'from-primary to-primary/60' : 'from-accent to-accent/60'} flex items-center justify-center mb-6 relative`}
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                  
                  {/* Pulse ring */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl ${step.color === 'primary' ? 'bg-primary/30' : 'bg-accent/30'}`}
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.25 }}
                  />
                </motion.div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
