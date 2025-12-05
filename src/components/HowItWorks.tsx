import { UserPlus, Search, FileText, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Create Your Profile",
    description: "Sign up as an assessee or CA. Quick onboarding with document verification for CAs.",
  },
  {
    number: "02",
    icon: Search,
    title: "Find or Get Matched",
    description: "Browse CAs manually or let our AI match you with the perfect expert for your needs.",
  },
  {
    number: "03",
    icon: FileText,
    title: "Upload & Collaborate",
    description: "Securely share documents. Track progress in real-time through your dashboard.",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Review & File",
    description: "Maker-checker verification ensures accuracy. Your CA files with government portals.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 relative">
      {/* Background Element */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Tax Filing in{" "}
            <span className="gradient-text-accent">4 Simple Steps</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            No more running around. Complete your tax compliance 
            digitally with expert guidance at every step.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}
              
              <div className="glass-card p-8 text-center relative z-10 h-full">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary rounded-full text-primary-foreground font-bold text-sm">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-secondary/50 flex items-center justify-center mx-auto mb-6 mt-4">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
