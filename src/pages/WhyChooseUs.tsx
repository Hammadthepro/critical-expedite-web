import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Clock, Truck, DollarSign, Users, Headphones, Award, MapPin, CheckCircle2, Quote } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import ownerImage from "@/assets/gallery/gallery-11.jpg";

const reasons = [
  {
    icon: Truck,
    title: "Asset-Based Operations",
    description: "We own our trucks and equipment, giving you guaranteed capacity and consistent service quality when you need it most.",
  },
  {
    icon: Clock,
    title: "25+ Years Experience",
    description: "Over two decades of industry expertise means we've seen it all and know how to handle any logistics challenge.",
  },
  {
    icon: Shield,
    title: "Real-Time Tracking",
    description: "Advanced tracking with Macro Point and Trucker Tools keeps you informed with live updates on every shipment.",
  },
  {
    icon: DollarSign,
    title: "Competitive Rates",
    description: "Our extensive carrier network and asset ownership allows us to offer some of the most competitive rates in the industry.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our dedicated team is available around the clock to handle any questions, updates, or emergencies.",
  },
  {
    icon: Users,
    title: "Verified Carrier Network",
    description: "Every carrier in our network is thoroughly vetted for safety, insurance, and performance standards.",
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description: "We stand behind our service with a commitment to on-time delivery and complete shipment integrity.",
  },
  {
    icon: MapPin,
    title: "Nationwide Coverage",
    description: "From coast to coast, we have the network and resources to move your freight anywhere in the country.",
  },
];

const stats = [
  { value: "25+", label: "Years in Business" },
  { value: "500+", label: "Carrier Partners" },
  { value: "98%", label: "On-Time Delivery" },
  { value: "24/7", label: "Customer Support" },
];

const WhyChooseUs = () => {
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
              Why Choose <span className="text-accent">Us</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Discover why businesses across the nation trust Critical Expedite Freight for their logistics needs.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-accent">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-4xl md:text-5xl font-bold text-accent-foreground mb-2">{stat.value}</p>
                  <p className="text-accent-foreground/80 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Owner Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src={ownerImage}
                  alt="Mr. Peterson - Founder and Owner of Critical Expedite Freight LLC"
                  className="rounded-2xl shadow-xl w-full h-[500px] object-cover object-top"
                />
                <div className="absolute -bottom-4 -right-4 bg-accent p-4 rounded-xl shadow-lg">
                  <Award className="w-8 h-8 text-accent-foreground" />
                </div>
              </div>
              <div>
                <div className="inline-block bg-accent/10 px-4 py-2 rounded-full mb-4">
                  <span className="text-accent font-semibold text-sm">Leadership</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                  Led by <span className="text-accent">Experience</span>
                </h2>
                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-accent/30 absolute -top-2 -left-2" />
                  <p className="text-lg text-muted-foreground leading-relaxed pl-6 italic">
                    "Hard work, consistency, and a genuine passion for this industry have been my guiding principles for over 25 years."
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Under the leadership of Mr. Peterson, a seasoned businessman with over 25 years in the transportation industry, Critical Expedite Freight has grown into a trusted name in logistics. His hands-on approach and deep understanding of the trucking community ensure that every client receives personalized, reliable service.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  From successfully running Classic Traffic School to building an asset-based brokerage with its own fleet, Mr. Peterson's journey reflects dedication, integrity, and an unwavering commitment to both drivers and customers.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-muted p-4 rounded-xl text-center">
                    <span className="text-xl font-bold text-accent block">25+</span>
                    <span className="text-xs text-muted-foreground">Years</span>
                  </div>
                  <div className="bg-muted p-4 rounded-xl text-center">
                    <span className="text-xl font-bold text-accent block">Own Fleet</span>
                    <span className="text-xs text-muted-foreground">Asset-Based</span>
                  </div>
                  <div className="bg-muted p-4 rounded-xl text-center">
                    <span className="text-xl font-bold text-accent block">Florida</span>
                    <span className="text-xs text-muted-foreground">Based</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reasons Grid */}
        <section className="section-padding bg-muted">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                The Critical Expedite <span className="text-accent">Advantage</span>
              </h2>
              <p className="text-muted-foreground">
                We go above and beyond to ensure your freight arrives safely and on time.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {reasons.map((reason, index) => (
                <div key={index} className="bg-card p-6 rounded-2xl shadow-md card-hover">
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                    <reason.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Our <span className="text-accent">Commitment</span> to You
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                At Critical Expedite Freight, we understand that your business depends on reliable logistics. That's why we've built our company around a simple promise: to deliver excellence in every shipment, every time.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {["Transparent Communication", "Reliable Delivery", "Competitive Pricing"].map((item, index) => (
                  <div key={index} className="flex items-center justify-center gap-2 bg-muted p-4 rounded-xl shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span className="font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
              Experience the <span className="text-accent">Difference</span>
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied customers who trust Critical Expedite Freight for their logistics needs.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl">Get Your Free Quote</Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WhyChooseUs;
