import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Truck, Users, HeadphonesIcon, DollarSign, Warehouse, CheckCircle2, ArrowRight } from "lucide-react";
import freightBrokerage from "@/assets/freight-brokerage.jpg";
import carrierServices from "@/assets/carrier-services.jpg";
import dispatchServices from "@/assets/dispatch-services.jpg";
import factoringServices from "@/assets/factoring-services.jpg";
import warehousingImg from "@/assets/warehousing.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const services = [
  {
    id: "freight-brokerage",
    title: "Freight Brokerage",
    icon: Truck,
    image: freightBrokerage,
    imageAlt: "Freight brokerage logistics with trucks lined up at distribution center",
    description: "Connect your shipments with our extensive carrier network. As an asset-based brokerage, we provide reliable transportation solutions with advanced tracking systems and competitive rates for all your freight needs.",
    features: [
      "Full Truckload (FTL) Services",
      "Less Than Truckload (LTL) Options",
      "Expedited & Time-Critical Shipping",
      "Macro Point & Trucker Tools Tracking",
      "Competitive Market Rates",
      "Dedicated Account Management",
    ],
  },
  {
    id: "carrier-services",
    title: "Carrier Services",
    icon: Users,
    image: carrierServices,
    imageAlt: "Semi-truck fleet for carrier transportation services",
    description: "Access our verified network of professional carriers ready to move your freight. We match you with the right carriers for full truckload, LTL, and specialized transportation requirements.",
    features: [
      "Verified & Vetted Carrier Network",
      "Equipment Matching",
      "Specialized Transportation",
      "Cross-Border Capabilities",
      "Insurance Verification",
      "Performance Tracking",
    ],
  },
  {
    id: "dispatch-services",
    title: "Dispatch Services",
    icon: HeadphonesIcon,
    image: dispatchServices,
    imageAlt: "Truck dispatch center with fleet management operations",
    description: "Expert dispatch support to keep your fleet moving efficiently. Our experienced team handles load coordination, route optimization, and 24/7 communication to maximize your operation's productivity.",
    features: [
      "24/7 Dispatch Support",
      "Load Board Management",
      "Route Optimization",
      "Driver Communication",
      "Paperwork & Documentation",
      "Revenue Maximization",
    ],
  },
  {
    id: "factoring-services",
    title: "Factoring Services",
    icon: DollarSign,
    image: factoringServices,
    imageAlt: "Financial factoring services for trucking business cash flow",
    description: "Improve your cash flow with our freight factoring solutions. Get paid quickly on your invoices so you can focus on growing your business without waiting 30-90 days for payment.",
    features: [
      "Same-Day Funding Available",
      "Competitive Factoring Rates",
      "No Hidden Fees",
      "Credit Checks on Shippers",
      "Collections Assistance",
      "Online Portal Access",
    ],
  },
  {
    id: "warehousing",
    title: "Warehousing",
    icon: Warehouse,
    image: warehousingImg,
    imageAlt: "Warehouse storage facility with organized inventory management",
    description: "Secure storage facilities with inventory management, packaging, and distribution support. Our strategically located warehouses help reduce transit times and streamline your supply chain.",
    features: [
      "Secure Storage Facilities",
      "Inventory Management",
      "Cross-Docking Services",
      "Pick & Pack Fulfillment",
      "Distribution Support",
      "Climate-Controlled Options",
    ],
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-40 pb-20 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroBg})` }}
          >
            <div className="absolute inset-0 bg-primary/90" />
          </div>
          <div className="container-custom px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6">
              Our <span className="text-accent">Services</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Comprehensive logistics solutions tailored to your business needs.
            </p>
          </div>
        </section>

        {/* Services List */}
        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className={`section-padding ${index % 2 === 0 ? "bg-background" : "bg-muted"}`}
          >
            <div className="container-custom">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      className="rounded-2xl shadow-xl w-full h-[350px] object-cover"
                    />
                    <div className="absolute -bottom-4 -left-4 bg-accent p-4 rounded-xl shadow-lg">
                      <service.icon className="w-8 h-8 text-accent-foreground" />
                    </div>
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/contact">
                    <Button variant="accent" size="lg" className="group">
                      Get A Quote
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="section-padding bg-primary">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
              Need a Custom <span className="text-accent">Solution?</span>
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Every business has unique logistics needs. Let's discuss how we can create a tailored transportation strategy for you.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl">Contact Our Team</Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
