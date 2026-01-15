import { Building2, PartyPopper, Sparkles, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import BulkOrderForm from "./BulkOrderForm";

const orderTypes = [
  {
    icon: Building2,
    title: "Corporate Orders",
    description: "Perfect for office meetings, team events & corporate gatherings",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Sparkles,
    title: "Festival Specials",
    description: "Celebrate Diwali, Eid, Holi & more with our festive chai packages",
    gradient: "from-rose-500 to-pink-500",
  },
  {
    icon: PartyPopper,
    title: "Party Orders",
    description: "Birthday parties, anniversaries & special celebrations",
    gradient: "from-violet-500 to-purple-500",
  },
];

const BulkOrders = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Bulk Orders Available
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Planning an event? We've got you covered! From corporate meetings to 
            festive celebrations, we cater to all your bulk chai needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {orderTypes.map((type, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${type.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${type.gradient} mb-4`}>
                <type.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {type.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {type.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <BulkOrderForm
            trigger={
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 gap-2"
              >
                <Phone className="w-5 h-5" />
                Enquire Now
              </Button>
            }
          />
          <p className="text-sm text-muted-foreground mt-4">
            Get special rates for bulk orders • Free delivery on large orders
          </p>
        </div>
      </div>
    </section>
  );
};

export default BulkOrders;
