import { ArrowRight, Shield, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Glow Effects */}
      <div className="hero-glow top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2" />
      <div className="hero-glow bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 opacity-50" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary font-medium">
              India's #1 Tax-Tech Platform
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-tight mb-6 animate-slide-up">
            Smart Tax Filing.{" "}
            <span className="gradient-text">Verified CAs.</span>{" "}
            <span className="gradient-text-accent">Zero Hassle.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up delay-100 opacity-0">
            Connect with ICAI-verified Chartered Accountants, file taxes with AI-powered 
            assistance, and manage all compliance from one intelligent platform.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up delay-200 opacity-0">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded-xl font-medium group glow-effect"
            >
              Start Filing for Free
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-border/50 text-foreground hover:bg-secondary/50 text-lg px-8 py-6 rounded-xl"
            >
              Book a Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 animate-fade-in delay-300 opacity-0">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm">Bank-Grade Security</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-sm">10,000+ CAs Registered</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Zap className="w-5 h-5 text-primary" />
              <span className="text-sm">AI-Powered Matching</span>
            </div>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-20 relative animate-scale-in delay-400 opacity-0">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
          <div className="glass-card p-2 rounded-2xl max-w-5xl mx-auto">
            <div className="bg-secondary/30 rounded-xl aspect-video flex items-center justify-center relative overflow-hidden">
              {/* Simulated Dashboard UI */}
              <div className="absolute inset-4 grid grid-cols-4 gap-4 opacity-80">
                <div className="col-span-1 space-y-3">
                  <div className="h-8 bg-primary/20 rounded-lg" />
                  <div className="h-6 bg-muted/50 rounded w-3/4" />
                  <div className="h-6 bg-muted/50 rounded w-1/2" />
                  <div className="h-6 bg-muted/50 rounded w-2/3" />
                  <div className="h-6 bg-muted/50 rounded w-3/4" />
                </div>
                <div className="col-span-3 space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-1 h-28 bg-gradient-to-br from-primary/30 to-primary/10 rounded-xl" />
                    <div className="flex-1 h-28 bg-gradient-to-br from-accent/30 to-accent/10 rounded-xl" />
                    <div className="flex-1 h-28 bg-muted/30 rounded-xl" />
                  </div>
                  <div className="h-40 bg-muted/20 rounded-xl" />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-24 bg-muted/30 rounded-xl" />
                    <div className="h-24 bg-muted/30 rounded-xl" />
                  </div>
                </div>
              </div>
              <div className="text-muted-foreground/50 text-lg font-medium z-20">
                Platform Dashboard Preview
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
