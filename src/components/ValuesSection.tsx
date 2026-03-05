import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Droplets, DollarSign, User, Sparkles, Clock } from "lucide-react";

const values = [
  { icon: Sparkles, title: "Custom Art Only" },
  { icon: Shield, title: "Clean & Sterile Studio" },
  { icon: Droplets, title: "Premium Inks" },
  { icon: DollarSign, title: "Honest Pricing" },
  { icon: User, title: "One-on-One Sessions" },
  { icon: Clock, title: "No Rush, No Compromise" },
];

const ValuesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-background" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground">
             Why <span className="text-gradient-gold">Inkfinity Tattooz</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1, type: "spring", stiffness: 120 }}
                whileHover={{
                  y: -4,
                  borderColor: "hsl(38 85% 58% / 0.4)",
                  boxShadow: "0 8px 30px hsl(38 85% 58% / 0.08)",
                  transition: { duration: 0.25 },
                }}
                className="flex items-center gap-4 p-5 bg-card border border-border rounded-sm transition-colors duration-300 group"
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon className="w-6 h-6 text-primary flex-shrink-0 group-hover:drop-shadow-[0_0_8px_hsl(38_85%_58%/0.5)] transition-all duration-300" />
                </motion.div>
                <span className="font-body text-foreground font-medium">{v.title}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
