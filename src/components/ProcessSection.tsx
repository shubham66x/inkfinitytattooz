import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Pencil, ThumbsUp, Zap } from "lucide-react";

const steps = [
  { icon: MessageSquare, title: "Tell Us Your Idea" },
  { icon: Pencil, title: "We Design It" },
  { icon: ThumbsUp, title: "You Approve" },
  { icon: Zap, title: "We Ink It" },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-20 md:py-28 bg-background" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground">
            How It <span className="text-gradient-gold">Works</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-full border border-primary/30 bg-primary/5 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="font-display text-xs text-primary mb-1 font-semibold">0{i + 1}</div>
                <h3 className="font-display text-lg font-semibold text-foreground">{step.title}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
