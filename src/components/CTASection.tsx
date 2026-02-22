import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cta" className="py-24 md:py-32 bg-card relative overflow-hidden" ref={ref}>
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="section-container relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl md:text-6xl font-semibold text-foreground mb-6"
        >
          Ready to turn your idea
          <br />
          <span className="text-gradient-gold">into art?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-body text-lg text-muted-foreground mb-10"
        >
          Your story deserves better than random ink.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#"
            className="px-8 py-4 bg-primary text-primary-foreground font-body font-semibold text-base rounded-sm hover:bg-gold-glow transition-all duration-300 gold-border-glow"
          >
            Book Appointment
          </a>
          <a
            href="#"
            className="px-8 py-4 border border-border text-foreground font-body font-semibold text-base rounded-sm hover:border-primary/50 transition-all duration-300 flex items-center gap-2"
          >
            <Instagram className="w-5 h-5" />
            Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
