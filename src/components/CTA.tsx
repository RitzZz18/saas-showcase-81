import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section id="pricing" className="py-24 relative">
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="glass-card p-12 lg:p-16 rounded-3xl text-center max-w-4xl mx-auto border-primary/30">
          <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
            Start Free Today
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Simplify Your{" "}
            <span className="gradient-text">Tax Journey?</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Join thousands of Indians who trust TaxPlan Pro for hassle-free 
            tax compliance. Get started for free—no credit card required.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-6 rounded-xl font-medium group glow-effect"
            >
              Create Free Account
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-border/50 text-foreground hover:bg-secondary/50 text-lg px-10 py-6 rounded-xl"
            >
              Talk to Sales
            </Button>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Free for individuals • CA plans start at ₹999/month • Enterprise pricing available
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
