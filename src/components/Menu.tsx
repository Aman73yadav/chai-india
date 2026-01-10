import { Coffee, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const menuItems = {
  tea: [
    { name: "Regular Tea", price: 12 },
    { name: "Medium Tea", price: 17 },
    { name: "Large Tea", price: 25 },
    { name: "Ginger Tea", price: 17 },
    { name: "Lemon Tea", price: 15 },
    { name: "Lemon Honey Tea", price: 20 },
    { name: "Lemon Ginger Tea", price: 20 },
    { name: "Black Tea", price: 15 },
  ],
  beverages: [
    { name: "Coffee", price: 15 },
    { name: "Black Coffee", price: 15 },
    { name: "Plain Milk", price: 15 },
    { name: "Horlicks", price: 17 },
    { name: "Boost", price: 17 },
    { name: "Badam Milk", price: 17 },
  ],
  snacks: [
    { name: "Samosa", price: 15 },
    { name: "Banana Cake", price: 15 },
  ],
};

interface MenuItemProps {
  name: string;
  price: number;
  category: string;
  onAddToCart: (name: string, price: number, category: string) => void;
}

const MenuItem = ({ name, price, category, onAddToCart }: MenuItemProps) => (
  <div className="flex items-center justify-between py-4 border-b border-border/50 group hover:border-primary/50 transition-colors">
    <div className="flex items-center gap-3 flex-1">
      <Coffee className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="font-body text-foreground group-hover:text-primary transition-colors">{name}</span>
    </div>
    <div className="flex items-center gap-3">
      <span className="font-heading text-xl text-primary font-semibold">₹{price}</span>
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8 border-primary/50 hover:bg-primary hover:text-primary-foreground"
        onClick={() => onAddToCart(name, price, category)}
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  </div>
);

interface MenuProps {
  onAddToCart: (name: string, price: number, category: string) => void;
}

const Menu = ({ onAddToCart }: MenuProps) => {
  return (
    <section id="menu" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-body text-sm tracking-[0.2em] uppercase">Our Offerings</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-2">Menu</h2>
          <div className="w-24 h-1 bg-gradient-chai mx-auto mt-4 rounded-full" />
          <p className="text-muted-foreground mt-4 text-sm">Click + to add items to your order</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Tea Section */}
          <div className="bg-card rounded-xl p-8 shadow-card">
            <h3 className="font-heading text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Coffee className="w-5 h-5 text-primary" />
              </span>
              Tea
            </h3>
            <div className="space-y-1">
              {menuItems.tea.map((item) => (
                <MenuItem key={item.name} {...item} category="Tea" onAddToCart={onAddToCart} />
              ))}
            </div>
          </div>

          {/* Beverages Section */}
          <div className="bg-card rounded-xl p-8 shadow-card">
            <h3 className="font-heading text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Coffee className="w-5 h-5 text-primary" />
              </span>
              Beverages
            </h3>
            <div className="space-y-1">
              {menuItems.beverages.map((item) => (
                <MenuItem key={item.name} {...item} category="Beverages" onAddToCart={onAddToCart} />
              ))}
            </div>
          </div>

          {/* Snacks Section */}
          <div className="bg-card rounded-xl p-8 shadow-card">
            <h3 className="font-heading text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Coffee className="w-5 h-5 text-primary" />
              </span>
              Snacks
            </h3>
            <div className="space-y-1">
              {menuItems.snacks.map((item) => (
                <MenuItem key={item.name} {...item} category="Snacks" onAddToCart={onAddToCart} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
