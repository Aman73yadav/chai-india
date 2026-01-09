import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Ramesh Kumar",
    rating: 5,
    review: "Best chai in JP Nagar! The ginger tea here is absolutely amazing. I come here every morning before work.",
    location: "JP Nagar Resident",
  },
  {
    name: "Priya Sharma",
    rating: 5,
    review: "Finally found a place that makes chai just like my grandmother used to make. The spices are perfectly balanced!",
    location: "Bangalore",
  },
  {
    name: "Mohammed Irfan",
    rating: 5,
    review: "Excellent service and the chai is consistently good. The badam milk is also a must-try!",
    location: "Regular Customer",
  },
  {
    name: "Lakshmi Devi",
    rating: 4,
    review: "Love the cozy atmosphere and the variety of teas. The lemon honey tea is perfect for rainy evenings.",
    location: "JP Nagar 4th Phase",
  },
  {
    name: "Suresh Nair",
    rating: 5,
    review: "Been coming here for months now. The staff is friendly and the chai is always fresh and hot!",
    location: "IT Professional",
  },
  {
    name: "Anjali Rao",
    rating: 5,
    review: "The best cutting chai in the area! Great prices and even better taste. Highly recommended!",
    location: "Foodie",
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-primary fill-primary" : "text-muted-foreground"
        }`}
      />
    ))}
  </div>
);

const Reviews = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-body text-sm tracking-[0.2em] uppercase">What People Say</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-2">Customer Reviews</h2>
          <div className="w-24 h-1 bg-gradient-chai mx-auto mt-4 rounded-full" />
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-8 md:gap-16 mb-12">
          <div className="text-center">
            <div className="font-heading text-4xl font-bold text-primary">4.9</div>
            <div className="flex justify-center mt-1">
              <StarRating rating={5} />
            </div>
            <p className="text-sm text-muted-foreground mt-1">Average Rating</p>
          </div>
          <div className="text-center">
            <div className="font-heading text-4xl font-bold text-primary">500+</div>
            <p className="text-sm text-muted-foreground mt-1">Happy Customers</p>
          </div>
          <div className="text-center">
            <div className="font-heading text-4xl font-bold text-primary">2</div>
            <p className="text-sm text-muted-foreground mt-1">Years Serving</p>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 shadow-card border border-border hover:border-primary/30 transition-all group"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              
              <p className="text-foreground/90 text-sm leading-relaxed mb-4 italic">
                "{review.review}"
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div>
                  <p className="font-medium text-foreground">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.location}</p>
                </div>
                <StarRating rating={review.rating} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
