import { motion } from "framer-motion";
import { useMemo } from "react";

const FloatingParticles = ({ count = 15 }: { count?: number }) => {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 8 + Math.random() * 12,
        size: 2 + Math.random() * 3,
        opacity: 0.15 + Math.random() * 0.25,
      })),
    [count]
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            bottom: "-10px",
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -window.innerHeight - 100],
            x: [0, Math.sin(p.id) * 30],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
