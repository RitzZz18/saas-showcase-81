import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const AnimatedCard = ({ children, className = "", delay = 0 }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.02 }}
      className={`glass-card p-6 hover:border-primary/50 transition-colors duration-300 cursor-pointer ${className}`}
    >
      <div style={{ transform: "translateZ(50px)" }}>
        {children}
      </div>
      
      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background: useTransform(
            [mouseXSpring, mouseYSpring],
            ([x, y]) =>
              `radial-gradient(circle at ${50 + x * 100}% ${50 + y * 100}%, hsl(174 72% 56% / 0.15) 0%, transparent 50%)`
          ),
        }}
      />
    </motion.div>
  );
};

export default AnimatedCard;
