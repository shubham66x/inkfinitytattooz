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
    q: "How do I book a consultation?",
    a: "You can book directly through our website or reach out via Instagram or WhatsApp. We'll schedule a free consultation to discuss your ideas.",
  },
  {
    q: "Is a deposit required?",
    a: "Yes, a small deposit is required to secure your appointment. This goes toward the final cost of your tattoo.",
  },
  {
    q: "How much does a tattoo cost?",
    a: "Pricing depends on size, complexity, and placement. We provide transparent quotes after your consultation — no hidden fees.",
  },
  {
    q: "Is the studio LGBTQ+ friendly?",
    a: "Absolutely. Inkfinity Tattoos is a safe, inclusive space for everyone. We celebrate diversity and ensure all clients feel respected and comfortable.",
  },
  {
    q: "How should I prepare for my appointment?",
    a: "Stay hydrated, eat a meal beforehand, wear comfortable clothing, and avoid alcohol 24 hours before your session.",
  },
  {
    q: "Do you do cover-ups?",
    a: "Yes, we specialize in creative cover-ups. Bring your existing tattoo to the consultation and we'll design something beautiful over it.",
  },
];

const FAQSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="section-container max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground">
            Frequently Asked <span className="text-gradient-gold">Questions</span>
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
