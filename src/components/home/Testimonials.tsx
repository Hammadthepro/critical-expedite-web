import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

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

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 relative h-full">
    {/* Quote Icon */}
    <Quote className="w-10 h-10 text-accent/40 absolute top-4 right-4" />
    
    {/* Avatar */}
    <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-xl mb-4">
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
);

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: "start",
    slidesToScroll: 1,
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="section-padding bg-primary">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4">
            What Our Clients <span className="text-accent">Say</span>
          </h2>
          <p className="text-lg text-primary-foreground/80">
            Real stories from real businesses.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        {/* Mobile/Tablet Carousel */}
        <div className="lg:hidden relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-[0_0_85%] sm:flex-[0_0_48%] min-w-0">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
          
          {/* Carousel Navigation */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="p-3 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-all disabled:opacity-50"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 text-primary-foreground" />
            </button>
            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="p-3 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-all disabled:opacity-50"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 text-primary-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
