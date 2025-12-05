const stats = [
  { value: "10,000+", label: "Verified CAs" },
  { value: "50,000+", label: "Returns Filed" },
  { value: "₹100Cr+", label: "Tax Savings" },
  { value: "4.8/5", label: "User Rating" },
];

const Stats = () => {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="glass-card p-8 lg:p-12 rounded-3xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center relative"
              >
                {index < stats.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-border/50" />
                )}
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
