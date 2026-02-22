import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  { text: "Best tattoo experience of my life. The design was everything I dreamed of and more.", name: "Alex R." },
  { text: "Felt safe and understood from the moment I walked in. A truly inclusive space.", name: "Jordan M." },
  { text: "The design was exactly what I imagined. It's like they read my mind.", name: "Casey L." },
  { text: "Lines are clean and healed perfectly. Professional from start to finish.", name: "Sam K." },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-card" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground">
            Loved by <span className="text-gradient-gold">real clients</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="p-8 bg-background border border-border rounded-sm"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-body text-foreground leading-relaxed mb-4">"{t.text}"</p>
              <p className="font-body text-sm text-muted-foreground">— {t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
