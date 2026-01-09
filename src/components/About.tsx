import { Heart, Star, Users } from "lucide-react";
import chaiCup from "@/assets/chai-cup.png";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative">
            <div className="relative w-64 h-64 mx-auto">
              <img 
                src={chaiCup} 
                alt="Chai India Cup" 
                className="w-full h-full object-contain animate-float"
              />
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl -z-10" />
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-primary font-body text-sm tracking-[0.2em] uppercase">Our Story</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
              About Chai India
            </h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Founded by <strong className="text-foreground">Fayaz H</strong> and <strong className="text-foreground">Jaffer Sharif</strong>, Chai India brings the authentic taste of 
              traditional Indian chai to the heart of JP Nagar, Bangalore. Our passion lies in crafting 
              the perfect cup of chai using time-honored recipes and the finest ingredients.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              With two thriving branches managed by our dedicated team leaders Sushil Kumar and 
              Mukesh Kumar, we take pride in serving happiness in every cup to our beloved customers.
            </p>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">Made with Love</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                  <Star className="w-5 h-5 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">Premium Quality</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">2 Branches</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
