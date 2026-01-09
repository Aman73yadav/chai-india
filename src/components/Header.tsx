import { useState } from "react";
import { Coffee, MapPin, Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#branches", label: "Our Branches" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
            <Coffee className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-heading text-xl font-bold text-foreground">Chai India</h1>
            <p className="text-xs text-muted-foreground">ಚಾಯ್ ಇಂಡಿಯಾ</p>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Location */}
        <div className="hidden md:flex items-center gap-2">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">JP Nagar, Bangalore</span>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <button className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
              <Menu className="w-5 h-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-card border-l border-border p-0">
            <div className="flex flex-col h-full">
              {/* Mobile Header */}
              <div className="p-6 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <Coffee className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="font-heading text-lg font-bold text-foreground">Chai India</h2>
                    <p className="text-xs text-muted-foreground">ಚಾಯ್ ಇಂಡಿಯಾ</p>
                  </div>
                </div>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="flex-1 p-6">
                <div className="space-y-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={handleLinkClick}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg text-foreground hover:bg-primary/10 hover:text-primary transition-colors font-medium"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </nav>

              {/* Mobile Footer */}
              <div className="p-6 border-t border-border bg-secondary/30">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm">JP Nagar 3rd Phase</span>
                </div>
                <p className="text-sm text-muted-foreground">Bangalore, Karnataka</p>
                <p className="text-xs text-primary mt-2 italic">"Happiness in Every Cup"</p>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
