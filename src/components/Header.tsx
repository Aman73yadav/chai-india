import { Coffee, MapPin, Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
            <Coffee className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-heading text-xl font-bold text-foreground">Chai India</h1>
            <p className="text-xs text-muted-foreground">ಚಾಯ್ ಇಂಡಿಯಾ</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#menu" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Menu</a>
          <a href="#branches" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Our Branches</a>
          <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">About</a>
          <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground hidden sm:inline">JP Nagar, Bangalore</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
