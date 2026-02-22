import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const promises = [
  "100% custom designs — no templates",
  "Safe, sterile, professional process",
  "Artist who actually listens",
  "Tattoos that age beautifully",
];

const PromiseSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-card" ref={ref}>
      <div className="section-container max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="font-display text-3xl md:text-5xl font-semibold mb-4 text-foreground"
        >
          Our <span className="text-gradient-gold">Promise</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="w-16 h-0.5 bg-primary mx-auto mb-10"
        />

        <div className="space-y-4">
          {promises.map((promise, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="flex items-center gap-4 text-left"
            >
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-primary" />
              </div>
              <span className="font-body text-lg text-foreground">{promise}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;
