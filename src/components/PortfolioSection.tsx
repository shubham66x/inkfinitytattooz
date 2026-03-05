import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

import tattoo1 from "@/assets/tattoo-1.png";
import tattoo2 from "@/assets/tattoo-2.png";
import tattoo3 from "@/assets/tattoo-3.png";
import tattoo4 from "@/assets/tattoo-4.png";
import tattoo5 from "@/assets/tattoo-5.png";
import tattoo6 from "@/assets/tattoo-6.png";
import tattoo7 from "@/assets/tattoo-7.png";
import tattoo8 from "@/assets/tattoo-8.png";

const portfolio = [
  { src: tattoo1, label: "Realism", alt: "Realistic lion tattoo" },
  { src: tattoo2, label: "Portrait", alt: "Portrait style tattoo" },
  { src: tattoo3, label: "Color", alt: "Colorful peacock feather tattoo" },
  { src: tattoo4, label: "Mythology", alt: "Mythological tattoo" },
  { src: tattoo5, label: "Anime", alt: "Dragon Ball Z anime tattoo" },
  { src: tattoo6, label: "Anime", alt: "Anime style dragon tattoo" },
  { src: tattoo7, label: "Black & Grey", alt: "Black and grey lion tattoo" },
  { src: tattoo8, label: "Japanese", alt: "Japanese samurai mask tattoo" },
];

const PortfolioSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-background relative overflow-hidden" ref={ref}>
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px]" />
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-3">
            The <span className="text-gradient-gold">Work</span>
          </h2>
          <p className="font-body text-muted-foreground text-sm">Every piece custom-made. No templates.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-6xl mx-auto">
          {portfolio.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, rotateX: 10 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08, type: "spring", stiffness: 100 }}
              className="relative aspect-[3/4] rounded-sm overflow-hidden cursor-pointer group"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent flex items-end p-4 transition-all duration-500 ${
                  hoveredIndex === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}
              >
                <span className="font-display text-lg font-semibold text-primary">{item.label}</span>
              </div>
              {/* Gold border on hover */}
              <div className={`absolute inset-0 border-2 transition-all duration-500 rounded-sm ${
                hoveredIndex === i ? "border-primary/40" : "border-transparent"
              }`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
