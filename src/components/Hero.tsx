import heroImage from "@/assets/hero-chai.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
        <div className="mb-6">
          <span className="text-primary font-body text-sm tracking-[0.3em] uppercase">
            Happiness in Every Cup
          </span>
        </div>
        
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
          <span className="text-gradient">Chai India</span>
        </h1>
        
        <p className="font-heading text-2xl md:text-3xl text-foreground/80 mb-2">
          ಚಾಯ್ ಇಂಡಿಯಾ
        </p>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 font-light">
          Experience the authentic taste of Indian chai, crafted with love and the finest spices at JP Nagar, Bangalore
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#menu" 
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-chai text-primary-foreground font-medium rounded-lg shadow-warm hover:opacity-90 transition-all"
          >
            Explore Our Menu
          </a>
          <a 
            href="#branches" 
            className="inline-flex items-center justify-center px-8 py-4 border border-primary text-primary font-medium rounded-lg hover:bg-primary/10 transition-all"
          >
            Find Our Branches
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
