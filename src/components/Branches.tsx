import { MapPin, User, Phone, Clock } from "lucide-react";

const branches = [
  {
    name: "Branch 1 - JP Nagar 3rd Phase",
    manager: "Sushil Kumar",
    address: "JP Nagar 3rd Phase, Bangalore, Karnataka",
    timing: "6:00 AM - 10:00 PM",
  },
  {
    name: "Branch 2 - JP Nagar 3rd Phase",
    manager: "Mukesh Kumar",
    address: "JP Nagar 3rd Phase, Bangalore, Karnataka",
    timing: "6:00 AM - 10:00 PM",
  },
];

const Branches = () => {
  return (
    <section id="branches" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-body text-sm tracking-[0.2em] uppercase">Visit Us</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-2">Our Branches</h2>
          <div className="w-24 h-1 bg-gradient-chai mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {branches.map((branch, index) => (
            <div 
              key={index} 
              className="bg-card rounded-xl p-8 shadow-card border border-border hover:border-primary/50 transition-all group"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-chai flex items-center justify-center mb-6 shadow-warm">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              
              <h3 className="font-heading text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                {branch.name}
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <User className="w-4 h-4 text-primary" />
                  <span className="text-sm">Branch Manager: <strong className="text-foreground">{branch.manager}</strong></span>
                </div>
                
                <div className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary mt-0.5" />
                  <span className="text-sm">{branch.address}</span>
                </div>
                
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-sm">{branch.timing}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Branches;
