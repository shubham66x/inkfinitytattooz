import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import artistPortrait from "@/assets/artist-portrait.jpg";

const ArtistSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="artist" className="py-24 md:py-32 bg-card" ref={ref}>
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
              Meet the Artist Behind
              <br />
              <span className="text-gradient-gold">Inkfinity Tattoos</span>
            </h2>

            <div className="space-y-6 font-body text-lg text-muted-foreground leading-relaxed">
              <p>
                "I started tattooing because I wanted people to wear their truth proudly."
              </p>
              <p>
                "As a gay artist, I know how powerful self-expression is. Every tattoo I create
                is personal — it's not just art, it's identity, healing, and confidence."
              </p>
              <p>
                "When you sit in my chair, you're not just a client. You're someone I want
                to understand, to connect with, and to give something beautiful that speaks
                your truth."
              </p>
            </div>

            <div className="mt-8 h-0.5 w-24 rainbow-bar rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ArtistSection;
