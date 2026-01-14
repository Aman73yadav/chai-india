import { useEffect, useRef, useState } from "react";
import { MapPin, User } from "lucide-react";
import mukeshImage from "@/assets/mukesh-kumar.jpg";

const teamMembers = [
  {
    name: "Sushil Kumar",
    role: "Branch 1 Manager",
    image: null, // Placeholder - photo to be added
    branch: "JP Nagar 3rd Phase - Branch 1",
    description: "Dedicated to ensuring every customer leaves with a smile and the perfect cup of chai.",
  },
  {
    name: "Mukesh Kumar",
    role: "Branch 2 Manager",
    image: mukeshImage,
    branch: "JP Nagar 3rd Phase - Branch 2",
    description: "Passionate about quality and service, leading our team to deliver exceptional chai experiences.",
  },
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

const MeetTheTeam = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useIntersectionObserver();

  return (
    <section id="team" className="py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div
          ref={sectionRef}
          className={`text-center mb-16 transition-all duration-700 ${
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-primary font-body text-sm tracking-[0.2em] uppercase">
            Our Family
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-2">
            Meet the Team
          </h2>
          <div
            className={`w-24 h-1 bg-gradient-chai mx-auto mt-4 rounded-full transition-all duration-700 delay-300 ${
              sectionVisible ? "scale-x-100" : "scale-x-0"
            }`}
          />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            The dedicated people behind every perfect cup of chai at Chai India
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className={`bg-card rounded-2xl overflow-hidden shadow-elegant border border-border hover:shadow-2xl transition-all duration-500 group ${
                sectionVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden bg-muted">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                    <User className="w-24 h-24 text-primary/30" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="font-heading text-2xl font-bold text-foreground">
                  {member.name}
                </h3>
                <p className="text-primary font-medium text-sm mt-1">
                  {member.role}
                </p>

                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                  {member.description}
                </p>

                <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>{member.branch}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;