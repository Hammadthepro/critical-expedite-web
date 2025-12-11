import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
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

const Services = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Our Logistics <span className="text-accent">Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive services tailored for your shipping needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 3).map((service, index) => (
            <Link
              key={service.id}
              to={`/services#${service.id}`}
              className={`group bg-card rounded-2xl overflow-hidden shadow-md card-hover animate-fade-in-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
          {services.slice(3).map((service, index) => (
            <Link
              key={service.id}
              to={`/services#${service.id}`}
              className={`group bg-card rounded-2xl overflow-hidden shadow-md card-hover animate-fade-in-up`}
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
