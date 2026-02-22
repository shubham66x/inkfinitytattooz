import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How do I book?",
    a: "DM us on Instagram or WhatsApp. We'll set up a free consultation.",
  },
  {
    q: "Is a deposit required?",
    a: "Yes, a small deposit secures your slot. It goes toward the final cost.",
  },
  {
    q: "How much does it cost?",
    a: "Depends on size, detail, and placement. We give transparent quotes — no surprises.",
  },
  {
    q: "How should I prepare?",
    a: "Stay hydrated, eat well, wear comfy clothes, skip alcohol 24 hours before.",
  },
  {
    q: "Do you do cover-ups?",
    a: "Yes. Bring your old tattoo to the consult and we'll design something fresh.",
  },
];

const FAQSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="py-20 md:py-28 bg-background" ref={ref}>
      <div className="section-container max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground">
            Got <span className="text-gradient-gold">Questions?</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-border rounded-sm bg-card px-6"
              >
                <AccordionTrigger className="font-body font-medium text-foreground text-left hover:text-primary transition-colors py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
