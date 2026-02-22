import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Shield, Droplets, DollarSign, User, Ban } from "lucide-react";

const values = [
  { icon: Heart, title: "Inclusive & LGBTQ+ Friendly", emoji: "🌈" },
  { icon: Shield, title: "Clean and Sterile Studio" },
  { icon: Droplets, title: "Only Premium Inks" },
  { icon: DollarSign, title: "Honest Pricing" },
  { icon: User, title: "One-on-One Sessions" },
  { icon: Ban, title: "Zero Judgment Zone" },
];

const ValuesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground">
            Why people choose <span className="text-gradient-gold">Inkfinity Tattoos</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                className="flex items-center gap-4 p-5 bg-card border border-border rounded-sm hover:border-primary/30 transition-colors duration-300"
              >
                <Icon className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="font-body text-foreground font-medium">
                  {v.title} {v.emoji && v.emoji}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
