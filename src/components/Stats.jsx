import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 10000, suffix: "+", label: "Verified CAs", color: "primary" },
  { value: 500000, suffix: "+", label: "Filings Completed", color: "accent" },
  { value: 99.9, suffix: "%", label: "Accuracy Rate", color: "primary" },
  { value: 4.9, suffix: "/5", label: "User Rating", color: "accent" },
];

const AnimatedCounter = ({ value, suffix }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const startTime = Date.now();
          const isDecimal = value % 1 !== 0;
          
          const updateValue = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = value * easeOutQuart;
            
            setDisplayValue(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));
            
            if (progress < 1) {
              requestAnimationFrame(updateValue);
            }
          };
          
          updateValue();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(0) + "K";
    return num.toString();
  };

  return (
    <span ref={ref}>
      {value >= 1000 ? formatNumber(displayValue) : displayValue}
      {suffix}
    </span>
  );
};

const Stats = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated background lines */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="statsGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(174 72% 56%)" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(174 72% 56%)" stopOpacity="0.2" />
              <stop offset="100%" stopColor="hsl(174 72% 56%)" stopOpacity="0" />
            </linearGradient>
          </defs>
          {Array.from({ length: 5 }, (_, i) => (
            <motion.line
              key={i}
              x1="0%"
              y1={`${20 + i * 15}%`}
              x2="100%"
              y2={`${20 + i * 15}%`}
              stroke="url(#statsGradient)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            />
          ))}
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 sm:p-12 rounded-3xl"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="text-center relative group"
              >
                <motion.div 
                  className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${stat.color === 'primary' ? 'gradient-text' : 'gradient-text-accent'} mb-2`}
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </motion.div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
                
                <motion.div
                  className={`h-1 w-12 mx-auto mt-4 rounded-full bg-gradient-to-r ${stat.color === 'primary' ? 'from-primary to-primary/40' : 'from-accent to-accent/40'}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
