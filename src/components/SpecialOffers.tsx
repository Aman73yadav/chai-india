import { Sparkles, Percent, Gift } from "lucide-react";

const offers = [
  {
    title: "Morning Special",
    description: "Any 2 teas + 1 coffee at a special price",
    price: "₹35",
    originalPrice: "₹44",
    icon: Sparkles,
    badge: "Best Value",
  },
  {
    title: "Family Pack",
    description: "4 Large teas for the whole family",
    price: "₹90",
    originalPrice: "₹100",
    icon: Gift,
    badge: "Popular",
  },
  {
    title: "Ginger Lovers",
    description: "2 Ginger Tea + 2 Lemon Ginger Tea",
    price: "₹65",
    originalPrice: "₹74",
    icon: Percent,
    badge: "Save ₹9",
  },
];

const SpecialOffers = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-body text-sm tracking-[0.2em] uppercase">Save More</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-2">Special Offers</h2>
          <div className="w-24 h-1 bg-gradient-chai mx-auto mt-4 rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            Enjoy our combo deals and save on your favorite beverages
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {offers.map((offer, index) => {
            const IconComponent = offer.icon;
            return (
              <div 
                key={index}
                className="bg-card rounded-xl p-8 shadow-card border border-border hover:border-primary/50 transition-all group relative overflow-hidden"
              >
                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-chai text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                    {offer.badge}
                  </span>
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {offer.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {offer.description}
                </p>

                {/* Price */}
                <div className="flex items-end gap-3">
                  <span className="font-heading text-3xl font-bold text-primary">
                    {offer.price}
                  </span>
                  <span className="text-muted-foreground line-through text-lg mb-1">
                    {offer.originalPrice}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
