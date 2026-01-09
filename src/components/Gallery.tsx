import { useState } from "react";
import { X } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const galleryItems = [
  { src: gallery1, alt: "Chai India Shop Interior", caption: "Our Cozy Ambiance" },
  { src: gallery2, alt: "Chai Being Poured", caption: "Freshly Brewed Chai" },
  { src: gallery3, alt: "Chai Spices", caption: "Premium Spices" },
  { src: gallery4, alt: "Tea Cups Lined Up", caption: "Ready to Serve" },
  { src: gallery5, alt: "Enjoying Chai", caption: "Warm Moments" },
  { src: gallery6, alt: "Chai with Snacks", caption: "Perfect Pairings" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-body text-sm tracking-[0.2em] uppercase">Visual Journey</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-2">Our Gallery</h2>
          <div className="w-24 h-1 bg-gradient-chai mx-auto mt-4 rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            Experience the warmth and charm of Chai India through our lens
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {galleryItems.map((item, index) => (
            <div 
              key={index}
              className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group"
              onClick={() => setSelectedImage(index)}
            >
              <img 
                src={item.src} 
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-foreground font-medium text-sm">{item.caption}</p>
              </div>
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-xl transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="max-w-4xl max-h-[80vh] relative">
            <img 
              src={galleryItems[selectedImage].src}
              alt={galleryItems[selectedImage].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6 rounded-b-xl">
              <p className="text-foreground font-heading text-xl">{galleryItems[selectedImage].caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
