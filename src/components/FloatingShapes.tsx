import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const FloatingShapes = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 100 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      mouseX.set((clientX - innerWidth / 2) / 50);
      mouseY.set((clientY - innerHeight / 2) / 50);
      
      setMousePosition({
        x: (clientX / innerWidth) * 100,
        y: (clientY / innerHeight) * 100
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const shapes = [
    {
      type: "cube",
      size: 80,
      position: { x: "15%", y: "20%" },
      delay: 0,
      duration: 8,
      rotateIntensity: 20,
    },
    {
      type: "sphere",
      size: 60,
      position: { x: "85%", y: "30%" },
      delay: 1,
      duration: 10,
      rotateIntensity: 15,
    },
    {
      type: "pyramid",
      size: 70,
      position: { x: "75%", y: "70%" },
      delay: 2,
      duration: 12,
      rotateIntensity: 25,
    },
    {
      type: "ring",
      size: 90,
      position: { x: "10%", y: "75%" },
      delay: 0.5,
      duration: 14,
      rotateIntensity: 30,
    },
    {
      type: "diamond",
      size: 50,
      position: { x: "50%", y: "15%" },
      delay: 1.5,
      duration: 9,
      rotateIntensity: 18,
    },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: shape.position.x,
            top: shape.position.y,
            x: useTransform(smoothX, (v) => v * shape.rotateIntensity),
            y: useTransform(smoothY, (v) => v * shape.rotateIntensity),
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: shape.delay, duration: 1 }}
        >
          <motion.div
            animate={{
              rotateX: [0, 360],
              rotateY: [0, 360],
              y: [0, -20, 0],
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              ease: "linear",
              y: {
                duration: shape.duration / 2,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            style={{
              width: shape.size,
              height: shape.size,
              transformStyle: "preserve-3d",
            }}
          >
            {shape.type === "cube" && <Cube size={shape.size} />}
            {shape.type === "sphere" && <Sphere size={shape.size} />}
            {shape.type === "pyramid" && <Pyramid size={shape.size} />}
            {shape.type === "ring" && <Ring size={shape.size} />}
            {shape.type === "diamond" && <Diamond size={shape.size} />}
          </motion.div>
        </motion.div>
      ))}
      
      {/* Gradient orbs that follow mouse */}
      <motion.div
        className="absolute w-96 h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(174 72% 56% / 0.1) 0%, transparent 70%)",
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          x: "-50%",
          y: "-50%",
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

const Cube = ({ size }: { size: number }) => {
  const half = size / 2;
  const faces = [
    { transform: `translateZ(${half}px)`, bg: "from-primary/30 to-primary/10" },
    { transform: `rotateY(180deg) translateZ(${half}px)`, bg: "from-primary/20 to-primary/5" },
    { transform: `rotateY(90deg) translateZ(${half}px)`, bg: "from-accent/30 to-accent/10" },
    { transform: `rotateY(-90deg) translateZ(${half}px)`, bg: "from-accent/20 to-accent/5" },
    { transform: `rotateX(90deg) translateZ(${half}px)`, bg: "from-primary/25 to-primary/5" },
    { transform: `rotateX(-90deg) translateZ(${half}px)`, bg: "from-primary/15 to-transparent" },
  ];

  return (
    <div className="relative w-full h-full" style={{ transformStyle: "preserve-3d" }}>
      {faces.map((face, i) => (
        <div
          key={i}
          className={`absolute w-full h-full bg-gradient-to-br ${face.bg} backdrop-blur-sm border border-primary/20 rounded-lg`}
          style={{ transform: face.transform }}
        />
      ))}
    </div>
  );
};

const Sphere = ({ size }: { size: number }) => (
  <div
    className="rounded-full bg-gradient-to-br from-accent/40 via-accent/20 to-transparent backdrop-blur-sm border border-accent/30"
    style={{
      width: size,
      height: size,
      boxShadow: `
        inset -10px -10px 30px hsl(38 92% 50% / 0.1),
        inset 10px 10px 30px hsl(38 92% 50% / 0.3),
        0 0 40px hsl(38 92% 50% / 0.2)
      `,
    }}
  />
);

const Pyramid = ({ size }: { size: number }) => (
  <div className="relative" style={{ width: size, height: size }}>
    <div
      className="absolute inset-0"
      style={{
        clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
        background: "linear-gradient(180deg, hsl(174 72% 56% / 0.4) 0%, hsl(174 72% 56% / 0.1) 100%)",
        border: "1px solid hsl(174 72% 56% / 0.3)",
      }}
    />
    <div
      className="absolute inset-0"
      style={{
        clipPath: "polygon(50% 0%, 0% 100%, 50% 70%)",
        background: "linear-gradient(180deg, hsl(174 72% 56% / 0.2) 0%, transparent 100%)",
      }}
    />
  </div>
);

const Ring = ({ size }: { size: number }) => (
  <div
    className="rounded-full border-4 border-primary/40"
    style={{
      width: size,
      height: size,
      boxShadow: `
        0 0 20px hsl(174 72% 56% / 0.3),
        inset 0 0 20px hsl(174 72% 56% / 0.2)
      `,
    }}
  />
);

const Diamond = ({ size }: { size: number }) => (
  <div
    className="bg-gradient-to-br from-accent/50 via-accent/20 to-transparent backdrop-blur-sm border border-accent/40"
    style={{
      width: size * 0.7,
      height: size * 0.7,
      transform: "rotate(45deg)",
      boxShadow: "0 0 30px hsl(38 92% 50% / 0.3)",
    }}
  />
);

export default FloatingShapes;
