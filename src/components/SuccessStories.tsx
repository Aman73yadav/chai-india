import { Star, Trophy, TrendingUp, Users } from "lucide-react";
import fayazImage from "@/assets/fayaz-h.jpg";

const successStories = [
  {
    name: "Fayaz H",
    role: "Founder & Owner",
    image: fayazImage,
    story: "Started Chai India with a simple dream - to bring authentic Indian chai to every corner of Bangalore. From a small stall to two thriving branches, the journey has been incredible. Every cup we serve carries the love and passion we have for chai.",
    achievement: "Built from ground up to 500+ daily customers",
    quote: "Chai is not just a drink, it's an emotion that brings people together.",
    stats: {
      yearsInBusiness: 2,
      dailyCustomers: 500,
      teamMembers: 10,
    }
  }
];

const SuccessStories = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-body text-sm tracking-[0.2em] uppercase">Our Journey</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-2">Success Stories</h2>
          <div className="w-24 h-1 bg-gradient-chai mx-auto mt-4 rounded-full" />
        </div>

        {successStories.map((story, index) => (
          <div key={index} className="max-w-5xl mx-auto">
            <div className="bg-card rounded-2xl overflow-hidden shadow-elegant border border-border">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative h-80 md:h-auto">
                  <img 
                    src={story.image} 
                    alt={story.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent md:bg-gradient-to-r" />
                  <div className="absolute bottom-4 left-4 md:hidden">
                    <h3 className="font-heading text-2xl font-bold text-white">{story.name}</h3>
                    <p className="text-primary font-medium">{story.role}</p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col justify-center">
                  <div className="hidden md:block mb-4">
                    <h3 className="font-heading text-3xl font-bold text-foreground">{story.name}</h3>
                    <p className="text-primary font-medium">{story.role}</p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {story.story}
                  </p>

                  <div className="bg-primary/10 rounded-lg p-4 mb-6 border-l-4 border-primary">
                    <p className="text-foreground italic font-medium">"{story.quote}"</p>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-primary font-medium mb-6">
                    <Trophy className="w-5 h-5" />
                    <span>{story.achievement}</span>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-primary mb-1">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <div className="font-heading text-2xl font-bold text-foreground">{story.stats.yearsInBusiness}+</div>
                      <p className="text-xs text-muted-foreground">Years</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-primary mb-1">
                        <Users className="w-4 h-4" />
                      </div>
                      <div className="font-heading text-2xl font-bold text-foreground">{story.stats.dailyCustomers}+</div>
                      <p className="text-xs text-muted-foreground">Daily Customers</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-primary mb-1">
                        <Star className="w-4 h-4" />
                      </div>
                      <div className="font-heading text-2xl font-bold text-foreground">{story.stats.teamMembers}+</div>
                      <p className="text-xs text-muted-foreground">Team Members</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessStories;
