import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import artistPortrait from "@/assets/artist-portrait.png";

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
            className="relative"
          >
            <div className="aspect-[3/4] rounded-sm overflow-hidden">
              <img
                src={artistPortrait}
                alt="The artist behind Inkfinity Tattoos"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 w-full h-full border border-primary/20 rounded-sm -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">The Artist</p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-8">
              The Hand Behind
              <br />
              <span className="text-gradient-gold">Every Piece</span>
            </h2>

            <div className="space-y-5 font-body text-lg text-muted-foreground leading-relaxed">
              <p>
                "I don't do random ink. Every tattoo I create starts with your story."
              </p>
              <p>
                "When you sit in my chair, you're not just a client — you're someone I want to give something real, something that speaks your truth."
              </p>
            </div>

            <div className="mt-8 h-0.5 w-24 bg-primary rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ArtistSection;
