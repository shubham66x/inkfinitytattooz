import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import artistPortrait from "@/assets/artist-portrait.jpg";

const ArtistSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="artist" className="py-20 md:py-28 bg-card" ref={ref}>
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="aspect-[3/4] rounded-sm overflow-hidden">
              <motion.img
                src={artistPortrait}
                alt="The artist behind Inkfinity Tattoos"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                whileHover={{ filter: "brightness(1.1)" }}
              />
            </div>
            <motion.div
              className="absolute -bottom-3 -right-3 w-full h-full border border-primary/20 rounded-sm -z-10"
              animate={inView ? { opacity: [0, 1], x: [10, 0], y: [10, 0] } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            />
            {/* Glow behind image */}
            <div className="absolute -inset-4 bg-primary/5 rounded-lg blur-2xl -z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p
              initial={{ opacity: 0, width: 0 }}
              animate={inView ? { opacity: 1, width: "auto" } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4 overflow-hidden whitespace-nowrap"
            >
              The Artist
            </motion.p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-8">
              The Hand Behind
              <br />
              <span className="text-gradient-gold">Every Piece</span>
            </h2>

            <div className="space-y-5 font-body text-lg text-muted-foreground leading-relaxed">
              {[
                `"I don't do random ink. Every tattoo I create starts with your story."`,
                `"When you sit in my chair, you're not just a client — you're someone I want to give something real, something that speaks your truth."`,
              ].map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.2 }}
                >
                  {text}
                </motion.p>
              ))}
            </div>

            <motion.div
              className="mt-8 h-0.5 bg-primary rounded-full"
              initial={{ width: 0 }}
              animate={inView ? { width: 96 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ArtistSection;
