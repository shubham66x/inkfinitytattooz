import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle } from "lucide-react";

const problems = [
  "Bad linework ruins skin",
  "Cheap ink fades",
  "Designs copied from Google lack meaning",
  "Judgmental studios make people uncomfortable",
  "No emotional connection to the art",
];

const ProblemSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl md:text-5xl font-semibold mb-12 text-foreground">
            Choosing the wrong tattoo artist
            <br />
            <span className="text-primary">can cost you forever.</span>
          </h2>

          <div className="space-y-5">
            {problems.map((problem, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-sm bg-card border border-border text-left"
              >
                <AlertTriangle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-body text-secondary-foreground">{problem}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
