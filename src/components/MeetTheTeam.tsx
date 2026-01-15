import { useEffect, useRef, useState } from "react";
import { MapPin, Instagram, Phone } from "lucide-react";
import mukeshImage from "@/assets/mukesh-kumar.jpg";
import sushilImage from "@/assets/sushil-kumar.jpg";

const teamMembers = [
  {
    name: "Sushil Kumar",
    role: "Branch 1 Manager",
    image: sushilImage,
    branch: "JP Nagar 3rd Phase - Branch 1",
    description: "Dedicated to ensuring every customer leaves with a smile and the perfect cup of chai.",
    social: {
      instagram: "https://instagram.com/",
      phone: "+91 9876543210",
    },
  },
  {
    name: "Mukesh Kumar",
    role: "Branch 2 Manager",
    image: mukeshImage,
    branch: "JP Nagar 3rd Phase - Branch 2",
    description: "Passionate about quality and service, leading our team to deliver exceptional chai experiences.",
    social: {
      instagram: "https://instagram.com/",
      phone: "+91 9876543211",
    },
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
              className={`bg-card rounded-2xl overflow-hidden shadow-elegant border border-border hover:shadow-2xl hover:border-primary/30 transition-all duration-500 group ${
                sectionVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Image Section */}
              <div className="relative h-72 overflow-hidden bg-muted">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                {/* Social icons overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <a
                    href={member.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-primary hover:scale-110 transition-all duration-300 shadow-lg"
                    aria-label={`${member.name}'s Instagram`}
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href={`tel:${member.social.phone}`}
                    className="w-12 h-12 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-primary hover:scale-110 transition-all duration-300 shadow-lg"
                    aria-label={`Call ${member.name}`}
                  >
                    <Phone className="w-5 h-5" />
                  </a>
                </div>

                {/* Role badge */}
                <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-medium px-3 py-1.5 rounded-full shadow-lg">
                  {member.role}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 relative">
                {/* Decorative accent line */}
                <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent transform -translate-y-0.5" />
                
                <h3 className="font-heading text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {member.name}
                </h3>

                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                  {member.description}
                </p>

                <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground group-hover:text-primary/80 transition-colors duration-300">
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
