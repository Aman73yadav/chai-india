import { Coffee, MapPin, Phone, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Coffee className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-foreground">Chai India</h3>
                <p className="text-xs text-muted-foreground">ಚಾಯ್ ಇಂಡಿಯಾ</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground italic">
              "Happiness in Every Cup"
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-bold text-foreground mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <span className="text-sm">JP Nagar 3rd Phase, Bangalore, Karnataka</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+918310698938" className="text-sm hover:text-primary transition-colors">
                  <strong>Fayaz H:</strong> 8310698938
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+917892538527" className="text-sm hover:text-primary transition-colors">
                  <strong>Jaffer Sharif:</strong> 7892538527
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-heading text-lg font-bold text-foreground mb-4">Opening Hours</h4>
            <p className="text-sm text-muted-foreground mb-2">Monday - Saturday</p>
            <p className="text-lg font-semibold text-primary">7:00 AM - 9:30 PM</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> by Chai India
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            © {new Date().getFullYear()} Chai India. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
