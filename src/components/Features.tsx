import { 
  Bot, 
  FileCheck, 
  Users, 
  Shield, 
  Calculator, 
  Video, 
  Bell, 
  BarChart3,
  Receipt,
  Brain,
  Smartphone,
  HeartPulse
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "CA Marketplace",
    description: "Connect with ICAI-verified Chartered Accountants. Browse profiles, ratings, and specializations.",
    color: "from-primary to-primary/60"
  },
  {
    icon: Bot,
    title: "AI-Powered Matching",
    description: "Smart algorithm matches you with the perfect CA based on complexity, deadlines, and expertise.",
    color: "from-accent to-accent/60"
  },
  {
    icon: FileCheck,
    title: "End-to-End Compliance",
    description: "ITR, GST, TDS, PT filing - complete tax compliance workflows in one unified platform.",
    color: "from-primary to-primary/60"
  },
  {
    icon: Shield,
    title: "Maker-Checker QA",
    description: "Every filing goes through dual CA verification for accuracy and accountability.",
    color: "from-accent to-accent/60"
  },
  {
    icon: Receipt,
    title: "Free Invoicing",
    description: "GST-compliant invoice generator with daybook, ledger, and real-time P&L overview.",
    color: "from-primary to-primary/60"
  },
  {
    icon: Calculator,
    title: "Tax Calculators",
    description: "Old vs new regime comparison, deduction optimizer, and year-end planning tools.",
    color: "from-accent to-accent/60"
  },
  {
    icon: Brain,
    title: "AI Tax Planning",
    description: "Personalized savings suggestions based on your profile and investment patterns.",
    color: "from-primary to-primary/60"
  },
  {
    icon: Video,
    title: "Live Consultancy",
    description: "Schedule video sessions with CAs. AI-powered video explainers for quick queries.",
    color: "from-accent to-accent/60"
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Auto-alerts for deadlines, government updates, and tax law changes.",
    color: "from-primary to-primary/60"
  },
  {
    icon: BarChart3,
    title: "Real-Time Dashboards",
    description: "Track filing status, document uploads, and compliance progress live.",
    color: "from-accent to-accent/60"
  },
  {
    icon: HeartPulse,
    title: "Financial Health Check",
    description: "Diagnostic tool highlighting risk areas and generating health reports.",
    color: "from-primary to-primary/60"
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    description: "Full platform access on mobile. Upload docs, chat with CA, track status anywhere.",
    color: "from-accent to-accent/60"
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Everything You Need for{" "}
            <span className="gradient-text">Tax Compliance</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A complete ecosystem for assessees and Chartered Accountants. 
            From filing to planning, we've got you covered.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass-card p-6 hover:border-primary/50 transition-all duration-300 group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
