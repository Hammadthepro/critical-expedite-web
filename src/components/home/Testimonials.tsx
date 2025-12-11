import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Liam Chen",
    role: "Supply Chain Manager",
    content: "Critical Expedite transformed our fulfillment process. The deliveries are always on time.",
    rating: 5,
  },
  {
    name: "Sophia James",
    role: "Logistics Director",
    content: "Their brokerage services are top-notch. Great communication and reliable carriers every time.",
    rating: 5,
  },
  {
    name: "Ava Mitchell",
    role: "Fleet Owner",
    content: "The dispatch team keeps our trucks moving efficiently. Excellent support and coordination.",
    rating: 5,
  },
  {
    name: "Rahul Desai",
    role: "Business Owner",
    content: "Factoring services helped our cash flow tremendously. Professional and hassle-free process.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-primary">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4">
            What Our Clients <span className="text-accent">Say</span>
          </h2>
          <p className="text-lg text-primary-foreground/80">
            Real stories from real businesses.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 relative animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-accent/40 absolute top-4 right-4" />
              
              {/* Avatar */}
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-xl mb-4">
                {testimonial.name.charAt(0)}
              </div>

              {/* Content */}
              <p className="text-primary-foreground/90 text-sm leading-relaxed mb-4">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Author */}
              <div>
                <p className="font-semibold text-primary-foreground">{testimonial.name}</p>
                <p className="text-sm text-primary-foreground/60">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
