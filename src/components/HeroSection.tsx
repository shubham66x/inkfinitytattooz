import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const WHATSAPP_LINK = "https://wa.me/919877653557?text=Hey%20Inkfinity!%20I%20want%20to%20book%20a%20consultation";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <motion.img
          src={heroBg}
          alt="Inkfinity Tattooz studio"
          className="w-full h-full object-cover"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-background/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/20" />
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-primary/8 blur-[150px]"
          animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.05, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 section-container text-center pt-20">
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8 }}
          className="font-body text-sm md:text-base tracking-[0.3em] uppercase text-primary mb-6"
        >
          Inkfinity Tattooz · Ludhiana
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.1] mb-8 gold-glow"
        >
          Your Skin.
          <br />
          <motion.span
            className="text-gradient-gold inline-block"
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 5, repeat: Infinity }}
            style={{ backgroundSize: "200% 200%" }}
          >
            Our Art.
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-body text-lg md:text-xl text-muted-foreground max-w-md mx-auto mb-12 leading-relaxed"
        >
          Custom ink that hits different. Designed for you, crafted with precision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7, type: "spring", stiffness: 200 }}
        >
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground font-body font-semibold text-base tracking-wide rounded-sm hover:bg-gold-glow transition-all duration-300 gold-border-glow shimmer-btn hover:scale-105 hover:shadow-[0_0_40px_hsl(38_85%_58%/0.3)]"
          >
            Book Your Session
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            className="w-px h-16 bg-gradient-to-b from-primary/60 to-transparent"
            animate={{ scaleY: [0.5, 1, 0.5], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
