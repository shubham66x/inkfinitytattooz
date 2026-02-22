import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Inkfinity Tattoos studio" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      {/* Rainbow bar top */}
      <div className="absolute top-0 left-0 right-0 h-1 rainbow-bar" />

      <div className="relative z-10 section-container text-center pt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-body text-sm md:text-base tracking-[0.3em] uppercase text-primary mb-6"
        >
          Custom Tattoo Art · LGBTQ+ Friendly
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.1] mb-8 gold-glow"
        >
          More Than Ink.
          <br />
          <span className="text-gradient-gold">It's Your Story on Skin.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          At Inkfinity Tattoos, we don't just create tattoos — we create confidence,
          identity, and art that stays with you for life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="#cta"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground font-body font-semibold text-base tracking-wide rounded-sm hover:bg-gold-glow transition-all duration-300 gold-border-glow"
          >
            Book Your Consultation
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-px h-16 bg-gradient-to-b from-primary/60 to-transparent animate-glow-pulse" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
