import { Instagram, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 bg-card border-t border-border">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
              Ink<span className="text-gradient-gold">finity</span>
            </h3>
            <p className="font-body text-muted-foreground text-sm leading-relaxed">
              Custom tattoo art. Your story, our craft.
            </p>
          </div>

          <div>
            <h4 className="font-body text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["About", "Process", "Portfolio", "Reviews", "FAQ"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-body text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="font-body">123 Art District, Creative City</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="font-body">+1 (555) 123-4567</span>
              </div>
              <a href="#" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="font-body">@inkfinitytattoos</span>
              </a>
            </div>
          </div>
        </div>

        <div className="h-px bg-border mb-8" />

        <p className="font-body text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} Inkfinity Tattoos. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
