import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import freightBrokerage from "@/assets/freight-brokerage.jpg";
import carrierServices from "@/assets/carrier-services.jpg";
import dispatchServices from "@/assets/dispatch-services.jpg";
import factoringServices from "@/assets/factoring-services.jpg";
import warehousing from "@/assets/warehousing.jpg";

const services = [
  {
    title: "Freight Brokerage",
    description: "Connect your shipments with our extensive carrier network. As an asset-based brokerage, we provide reliable transportation solutions with advanced tracking systems (Macro Point & Trucker Tools) and competitive rates for all your freight needs.",
    image: freightBrokerage,
    id: "freight-brokerage",
  },
  {
    title: "Carrier Services",
    description: "Access our verified network of professional carriers ready to move your freight. We match you with the right carriers for full truckload, LTL, and specialized transportation requirements.",
    image: carrierServices,
    id: "carrier-services",
  },
  {
    title: "Dispatch Services",
    description: "Expert dispatch support to keep your fleet moving efficiently. Our experienced team handles load coordination, route optimization, and 24/7 communication to maximize your operation's productivity.",
    image: dispatchServices,
    id: "dispatch-services",
  },
  {
    title: "Factoring Services",
    description: "Improve your cash flow with our freight factoring solutions. Get paid quickly on your invoices so you can focus on growing your business without waiting 30-90 days for payment.",
    image: factoringServices,
    id: "factoring-services",
  },
  {
    title: "Warehousing",
    description: "Secure storage facilities with inventory management, packaging, and distribution support. Our strategically located warehouses help reduce transit times and streamline your supply chain.",
    image: warehousing,
    id: "warehousing",
  },
];

const ServiceCard = ({ service }: { service: typeof services[0] }) => (
  <Link
    to={`/services#${service.id}`}
    className="group bg-card rounded-2xl overflow-hidden shadow-md card-hover h-full flex flex-col"
  >
    <div className="relative h-48 sm:h-56 overflow-hidden">
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
    </div>
    <div className="p-5 sm:p-6 flex flex-col flex-1">
      <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
        {service.title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
        {service.description}
      </p>
      <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm">
        Learn More
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </span>
    </div>
  </Link>
);

const Services = () => {
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
    <section className="section-padding bg-muted">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Our Logistics <span className="text-accent">Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive services tailored for your shipping needs.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {services.slice(0, 3).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        <div className="hidden lg:grid grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
          {services.slice(3).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Mobile/Tablet Carousel */}
        <div className="lg:hidden relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {services.map((service) => (
                <div key={service.id} className="flex-[0_0_85%] sm:flex-[0_0_45%] min-w-0">
                  <ServiceCard service={service} />
                </div>
              ))}
            </div>
          </div>
          
          {/* Carousel Navigation */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="p-3 rounded-full bg-card shadow-md hover:bg-accent hover:text-accent-foreground transition-all disabled:opacity-50"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="p-3 rounded-full bg-card shadow-md hover:bg-accent hover:text-accent-foreground transition-all disabled:opacity-50"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
