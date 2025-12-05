import { 
  TrendingUp, 
  Users, 
  Video, 
  Star, 
  Clock, 
  Wallet 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: Users,
    title: "Expand Client Base",
    description: "Access thousands of assessees looking for verified CA services.",
  },
  {
    icon: Star,
    title: "Build Reputation",
    description: "Earn ratings, reviews, and showcase your expertise through webinars.",
  },
  {
    icon: TrendingUp,
    title: "Performance Rewards",
    description: "High-rated CAs automatically receive more incoming job matches.",
  },
  {
    icon: Clock,
    title: "Save Time",
    description: "Auto-filing tools and pre-filled forms reduce manual work by 60%.",
  },
  {
    icon: Video,
    title: "Host Webinars",
    description: "Conduct educational sessions and attract leads through content.",
  },
  {
    icon: Wallet,
    title: "Transparent Earnings",
    description: "Track payments, manage invoices, and grow your practice digitally.",
  },
];

const ForCAs = () => {
  return (
    <section id="for-cas" className="py-24 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              For Chartered Accountants
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              Grow Your Practice{" "}
              <span className="gradient-text-accent">Digitally</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join India's largest network of verified CAs. Get matched with clients, 
              streamline your workflow, and build your brand on our platform.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium px-8"
            >
              Register as CA
            </Button>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="glass-card p-8 rounded-3xl">
              {/* CA Profile Card Preview */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent/60" />
                  <div>
                    <div className="h-5 bg-muted/50 rounded w-32 mb-2" />
                    <div className="h-4 bg-muted/30 rounded w-24" />
                  </div>
                  <div className="ml-auto flex items-center gap-1">
                    <Star className="w-4 h-4 text-accent fill-accent" />
                    <span className="text-foreground font-semibold">4.9</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="glass-card p-4 text-center">
                    <div className="text-2xl font-bold gradient-text">250+</div>
                    <div className="text-xs text-muted-foreground">Returns Filed</div>
                  </div>
                  <div className="glass-card p-4 text-center">
                    <div className="text-2xl font-bold gradient-text-accent">98%</div>
                    <div className="text-xs text-muted-foreground">Success Rate</div>
                  </div>
                  <div className="glass-card p-4 text-center">
                    <div className="text-2xl font-bold gradient-text">12</div>
                    <div className="text-xs text-muted-foreground">Years Exp</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="h-4 bg-muted/30 rounded w-full" />
                  <div className="h-4 bg-muted/30 rounded w-4/5" />
                  <div className="h-4 bg-muted/30 rounded w-3/5" />
                </div>

                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full">ITR</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full">GST</span>
                  <span className="px-3 py-1 bg-accent/20 text-accent text-xs rounded-full">Audit</span>
                  <span className="px-3 py-1 bg-muted/50 text-muted-foreground text-xs rounded-full">+3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForCAs;
