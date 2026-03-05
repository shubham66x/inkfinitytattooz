import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/919877653557?text=Hey%20Inkfinity!%20I%20want%20to%20book%20a%20consultation";
const INSTAGRAM_LINK = "https://www.instagram.com/inkfinity_tattooz?igshid=YzAwZjE1ZTI0Zg%3D%3D&utm_source=qr&fullpage=1";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cta" className="py-20 md:py-28 bg-card relative overflow-hidden" ref={ref}>
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-container relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl md:text-6xl font-semibold text-foreground mb-5"
        >
          Ready to get
          <br />
          <span className="text-gradient-gold">inked?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-body text-lg text-muted-foreground mb-8"
        >
          Your skin deserves art, not regret.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-primary text-primary-foreground font-body font-semibold text-base rounded-sm hover:bg-gold-glow transition-all duration-300 gold-border-glow shimmer-btn"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px hsl(38 85% 58% / 0.3)" }}
            whileTap={{ scale: 0.97 }}
          >
            Book on WhatsApp
          </motion.a>
          <motion.a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-border text-foreground font-body font-semibold text-base rounded-sm hover:border-primary/50 transition-all duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <Instagram className="w-5 h-5" />
            @inkfinity_tattooz
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
