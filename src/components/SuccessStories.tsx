import { Star, Trophy, TrendingUp, Users, Coffee, Heart, Award, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import fayazImage from "@/assets/fayaz-h.jpg";

const milestones = [
  { icon: TrendingUp, text: "From a small street stall to 2 thriving branches" },
  { icon: Heart, text: "Waking up at 4 AM daily to brew the perfect chai" },
  { icon: Users, text: "Created 10+ local jobs, supporting neighborhood families" },
  { icon: Award, text: "Developed 15+ signature chai blends loved by customers" },
];

const successStories = [
  {
    name: "Fayaz H",
    role: "Founder & Owner, Chai India",
    image: fayazImage,
    story: "What started as a humble chai stall in JP Nagar has grown into a beloved community landmark. Every morning at 4 AM, I begin my day preparing fresh spice blends, just like my father taught me. The journey wasn't easy – there were days of doubt, but seeing familiar faces return for their daily cup kept me going. Today, Chai India is more than a business; it's a gathering place where strangers become friends over a warm cup of chai.",
    achievement: "Recognized as JP Nagar's favorite chai destination",
    quote: "Every cup we serve carries generations of tradition and a dream to bring happiness to our community.",
    stats: {
      cupsDaily: 1000,
      dailyCustomers: 500,
      menuItems: 25,
      teamMembers: 10,
    }
  }
];

const useIntersectionObserver = (threshold = 0.2) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
};

const AnimatedCounter = ({ value, isVisible }: { value: number; isVisible: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 1500;
    const steps = 30;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, isVisible]);

  return <>{count}</>;
};

const SuccessStories = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useIntersectionObserver();
  const { ref: cardRef, isVisible: cardVisible } = useIntersectionObserver(0.3);

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div 
          ref={sectionRef}
          className={`text-center mb-16 transition-all duration-700 ${
            sectionVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-primary font-body text-sm tracking-[0.2em] uppercase">Our Journey</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-2">Success Stories</h2>
          <div className={`w-24 h-1 bg-gradient-chai mx-auto mt-4 rounded-full transition-all duration-700 delay-300 ${
            sectionVisible ? "scale-x-100" : "scale-x-0"
          }`} />
        </div>

        {successStories.map((story, index) => (
          <div 
            key={index} 
            ref={cardRef}
            className={`max-w-5xl mx-auto transition-all duration-1000 ${
              cardVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-16"
            }`}
          >
            <div className="bg-card rounded-2xl overflow-hidden shadow-elegant border border-border hover:shadow-2xl transition-shadow duration-500">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className={`relative h-80 md:h-auto overflow-hidden transition-all duration-1000 delay-200 ${
                  cardVisible ? "opacity-100 scale-100" : "opacity-0 scale-105"
                }`}>
                  <img 
                    src={story.image} 
                    alt={story.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent md:bg-gradient-to-r" />
                  <div className="absolute bottom-4 left-4 md:hidden">
                    <h3 className="font-heading text-2xl font-bold text-white">{story.name}</h3>
                    <p className="text-primary font-medium">{story.role}</p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col justify-center">
                  <div className={`hidden md:block mb-4 transition-all duration-700 delay-300 ${
                    cardVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                  }`}>
                    <h3 className="font-heading text-3xl font-bold text-foreground">{story.name}</h3>
                    <p className="text-primary font-medium">{story.role}</p>
                  </div>

                  <p className={`text-muted-foreground leading-relaxed mb-6 transition-all duration-700 delay-400 ${
                    cardVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                  }`}>
                    {story.story}
                  </p>

                  <div className={`bg-primary/10 rounded-lg p-4 mb-6 border-l-4 border-primary transition-all duration-700 delay-500 ${
                    cardVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                  }`}>
                    <p className="text-foreground italic font-medium">"{story.quote}"</p>
                  </div>

                  <div className={`flex items-center gap-2 text-sm text-primary font-medium mb-6 transition-all duration-700 delay-600 ${
                    cardVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                  }`}>
                    <Trophy className="w-5 h-5 animate-pulse" />
                    <span>{story.achievement}</span>
                  </div>

                  {/* Stats */}
                  <div className={`grid grid-cols-4 gap-3 pt-6 border-t border-border transition-all duration-700 delay-700 ${
                    cardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}>
                    <div className="text-center group">
                      <div className="flex items-center justify-center gap-1 text-primary mb-1">
                        <Coffee className="w-4 h-4 group-hover:scale-125 transition-transform duration-300" />
                      </div>
                      <div className="font-heading text-xl md:text-2xl font-bold text-foreground">
                        <AnimatedCounter value={story.stats.cupsDaily} isVisible={cardVisible} />+
                      </div>
                      <p className="text-xs text-muted-foreground">Cups Daily</p>
                    </div>
                    <div className="text-center group">
                      <div className="flex items-center justify-center gap-1 text-primary mb-1">
                        <Users className="w-4 h-4 group-hover:scale-125 transition-transform duration-300" />
                      </div>
                      <div className="font-heading text-xl md:text-2xl font-bold text-foreground">
                        <AnimatedCounter value={story.stats.dailyCustomers} isVisible={cardVisible} />+
                      </div>
                      <p className="text-xs text-muted-foreground">Customers</p>
                    </div>
                    <div className="text-center group">
                      <div className="flex items-center justify-center gap-1 text-primary mb-1">
                        <Star className="w-4 h-4 group-hover:scale-125 transition-transform duration-300" />
                      </div>
                      <div className="font-heading text-xl md:text-2xl font-bold text-foreground">
                        <AnimatedCounter value={story.stats.menuItems} isVisible={cardVisible} />+
                      </div>
                      <p className="text-xs text-muted-foreground">Menu Items</p>
                    </div>
                    <div className="text-center group">
                      <div className="flex items-center justify-center gap-1 text-primary mb-1">
                        <Heart className="w-4 h-4 group-hover:scale-125 transition-transform duration-300" />
                      </div>
                      <div className="font-heading text-xl md:text-2xl font-bold text-foreground">
                        <AnimatedCounter value={story.stats.teamMembers} isVisible={cardVisible} />+
                      </div>
                      <p className="text-xs text-muted-foreground">Team</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Milestones Section */}
        <div className={`max-w-4xl mx-auto mt-16 transition-all duration-1000 delay-500 ${
          cardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h3 className="font-heading text-2xl font-bold text-foreground text-center mb-8">Key Milestones</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {milestones.map((milestone, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-4 bg-card/50 rounded-xl p-4 border border-border hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <milestone.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground/90 text-sm">{milestone.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
