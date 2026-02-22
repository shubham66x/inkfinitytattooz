import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Pencil, ThumbsUp, Zap, Smile } from "lucide-react";

const steps = [
  { icon: MessageSquare, title: "Share Your Story", desc: "You share your story or idea with us" },
  { icon: Pencil, title: "Custom Design", desc: "We sketch a custom design just for you" },
  { icon: ThumbsUp, title: "Approve", desc: "You approve the artwork before we begin" },
  { icon: Zap, title: "Precision Inking", desc: "We ink with precision and care" },
  { icon: Smile, title: "Walk Out Confident", desc: "You walk out with confidence" },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground">
            From idea to <span className="text-gradient-gold">masterpiece</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-5xl mx-auto">
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
                <div className="w-16 h-16 rounded-full border border-primary/30 bg-primary/5 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <div className="font-display text-sm text-primary mb-1 font-semibold">Step {i + 1}</div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{step.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden md:block w-full h-px bg-border mt-8" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
