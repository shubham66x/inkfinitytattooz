import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { text: "Absolute fire. Best tattoo I've ever got.", name: "Arjun S." },
  { text: "Felt comfortable from the jump. Super chill vibe.", name: "Priya M." },
  { text: "Design was exactly what I imagined. No cap.", name: "Rohit K." },
  { text: "Clean lines, healed perfect. 10/10.", name: "Simran P." },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-card" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground">
            Real <span className="text-gradient-gold">Reviews</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.12, type: "spring", stiffness: 120 }}
              whileHover={{
                y: -4,
                borderColor: "hsl(38 85% 58% / 0.3)",
                transition: { duration: 0.25 },
              }}
              className="p-7 bg-background border border-border rounded-sm relative overflow-hidden group"
            >
              {/* Subtle quote icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10 group-hover:text-primary/20 transition-colors duration-500" />
              
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + i * 0.12 + j * 0.05, type: "spring" }}
                  >
                    <Star className="w-4 h-4 fill-primary text-primary" />
                  </motion.div>
                ))}
              </div>
              <p className="font-body text-foreground leading-relaxed mb-3">"{t.text}"</p>
              <p className="font-body text-sm text-muted-foreground">— {t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
