import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

import tattooBlackGrey from "@/assets/tattoo-blackgrey.jpg";
import tattooMinimal from "@/assets/tattoo-minimal.jpg";
import tattooColor from "@/assets/tattoo-color.jpg";
import tattooScript from "@/assets/tattoo-script.jpg";
import tattooSymbolic from "@/assets/tattoo-symbolic.jpg";
import tattooPride from "@/assets/tattoo-pride.jpg";

const portfolio = [
  { src: tattooBlackGrey, label: "Black & Grey", alt: "Black and grey realistic tattoo" },
  { src: tattooMinimal, label: "Minimal", alt: "Minimal fine line tattoo" },
  { src: tattooColor, label: "Color", alt: "Vibrant color tattoo" },
  { src: tattooScript, label: "Script", alt: "Script calligraphy tattoo" },
  { src: tattooSymbolic, label: "Symbolic", alt: "Symbolic mandala tattoo" },
  { src: tattooPride, label: "Pride", alt: "LGBTQ+ pride tattoo" },
];

const PortfolioSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-4">
            Real Skin. <span className="text-gradient-gold">Real Art.</span>
          </h2>
          <p className="font-body text-muted-foreground">All designs shown are custom-created for real clients.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {portfolio.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="relative aspect-[3/4] rounded-sm overflow-hidden cursor-pointer group"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div
                className={`absolute inset-0 bg-background/60 flex items-end p-5 transition-opacity duration-300 ${
                  hoveredIndex === i ? "opacity-100" : "opacity-0"
                }`}
              >
                <span className="font-display text-xl font-semibold text-primary">{item.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
