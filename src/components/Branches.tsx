import { MapPin, User, Phone, Clock } from "lucide-react";

const branches = [
  {
    name: "Branch 1 - JP Nagar 3rd Phase",
    manager: "Sushil Kumar",
    address: "JP Nagar 3rd Phase, Bangalore, Karnataka",
    timing: "7:00 AM - 9:30 PM (Mon-Sat)",
  },
  {
    name: "Branch 2 - JP Nagar 3rd Phase",
    manager: "Mukesh Kumar",
    address: "JP Nagar 3rd Phase, Bangalore, Karnataka",
    timing: "7:00 AM - 9:30 PM (Mon-Sat)",
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

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
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

        {/* Google Maps Embed */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-xl p-4 shadow-card border border-border overflow-hidden">
            <h3 className="font-heading text-xl font-bold text-foreground mb-4 text-center">Find Us on Map</h3>
            <div className="rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9076744755814!2d77.58276731482162!3d12.906573890893035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae150b1e3f8375%3A0x8e95bf8f6f2b2b2b!2sJP%20Nagar%203rd%20Phase%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1698123456789!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Chai India Location - JP Nagar 3rd Phase"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Branches;
