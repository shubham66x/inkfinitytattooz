import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#artist" },
  { label: "Process", href: "#process" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Reviews", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 100], [0.6, 0.95]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition-all duration-500 ${
        scrolled ? "border-border shadow-lg shadow-background/50" : "border-transparent"
      }`}
      style={{ backgroundColor: `hsl(220 15% 11% / ${bgOpacity})` }}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="section-container flex items-center justify-between h-16 md:h-20">
        <motion.a
          href="#"
          className="font-display text-2xl md:text-3xl font-semibold tracking-wide text-foreground"
          whileHover={{ scale: 1.02 }}
        >
          Ink<span className="text-gradient-gold">finity</span> Tattooz
        </motion.a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="text-sm font-body font-medium text-muted-foreground hover:text-primary transition-colors duration-300 relative"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.08 }}
              whileHover={{ y: -2 }}
            >
              {link.label}
              <motion.span
                className="absolute -bottom-1 left-0 h-px bg-primary"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.2 }}
              />
            </motion.a>
          ))}
          <motion.a
            href="https://wa.me/919877653557?text=Hey%20Inkfinity!%20I%20want%20to%20book%20a%20consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-primary text-primary-foreground font-body text-sm font-semibold rounded-sm hover:bg-gold-glow transition-colors duration-300 shimmer-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Book Now
          </motion.a>
        </div>

        {/* Mobile toggle */}
        <motion.button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          whileTap={{ scale: 0.9 }}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="section-container py-6 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-body text-muted-foreground hover:text-primary transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="https://wa.me/919877653557?text=Hey%20Inkfinity!%20I%20want%20to%20book%20a%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="px-5 py-3 bg-primary text-primary-foreground font-body text-sm font-semibold rounded-sm text-center"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
