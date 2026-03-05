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
    <section id="process" className="py-20 md:py-28 bg-background relative overflow-hidden" ref={ref}>
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px]" />
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto relative">
          {/* Connecting line */}
          <motion.div
            className="hidden md:block absolute top-7 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          />
          
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15, type: "spring", stiffness: 150 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="text-center"
              >
                <motion.div
                  className="w-14 h-14 rounded-full border border-primary/30 bg-primary/5 flex items-center justify-center mx-auto mb-3 relative"
                  whileHover={{
                    borderColor: "hsl(38 85% 58%)",
                    boxShadow: "0 0 25px hsl(38 85% 58% / 0.25)",
                    transition: { duration: 0.3 },
                  }}
                >
                  <Icon className="w-6 h-6 text-primary" />
                </motion.div>
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
