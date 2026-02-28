import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle } from "lucide-react";

const problems = [
  "Bad linework ruins skin forever",
  "Cheap ink fades fast",
  "Generic designs lack meaning",
  "No vibe, no connection",
];

const ProblemSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden" ref={ref}>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] rounded-full bg-destructive/5 blur-[120px]" />
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl md:text-5xl font-semibold mb-10 text-foreground">
            Wrong artist?
            <br />
            <span className="text-primary">Wrong forever.</span>
          </h2>

          <div className="space-y-4">
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
