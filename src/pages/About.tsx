import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, Users, Truck, Shield, Clock, Award, Target, Quote } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import ownerImage from "@/assets/gallery/gallery-21.jpg";

const values = [
  {
    icon: Shield,
    title: "Reliability",
    description: "We deliver on our promises, every time. Your freight is in safe hands with our verified carrier network.",
  },
  {
    icon: Clock,
    title: "Efficiency",
    description: "Time is money. Our streamlined processes and 24/7 operations ensure your shipments move fast.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We build lasting relationships with our clients, understanding your unique needs and growing with you.",
  },
  {
    icon: Target,
    title: "Innovation",
    description: "Leveraging the latest technology including Macro Point and Trucker Tools for real-time tracking.",
  },
];

const AboutPage = () => {
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
              About <span className="text-accent">Us</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Your trusted asset-based logistics partner with over 25 years of excellence in freight transportation.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src={aboutImage}
                  alt="Critical Expedite Freight fleet trucks and logistics operations"
                  className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-2xl shadow-xl">
                  <div className="text-center">
                    <span className="text-4xl font-bold block">25+</span>
                    <span className="text-sm font-medium">Years of<br />Experience</span>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                  Our <span className="text-accent">Story</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Founded in Fort Myers, Florida, Critical Expedite Freight LLC began with a simple mission: to provide reliable, efficient freight solutions that businesses can truly depend on.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  As an asset-based brokerage, we combine the flexibility of traditional freight brokerage with the reliability of owning our own equipment. This unique position allows us to offer guaranteed capacity, competitive rates, and complete transparency throughout the shipping process.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Today, we serve businesses nationwide, from small operations to major enterprises, all with the same commitment to excellence that started our journey over 25 years ago.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {["Asset-Based Operations", "Nationwide Coverage", "24/7 Support", "Real-Time Tracking"].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Owner Section */}
        <section className="section-padding bg-muted">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Meet Our <span className="text-accent">Founder</span>
              </h2>
              <p className="text-muted-foreground">
                The visionary behind Critical Expedite Freight.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <div className="relative">
                  <img
                    src={ownerImage}
                    alt="Peterson - Founder and CEO of Critical Expedite Freight LLC"
                    className="rounded-2xl shadow-xl w-full h-[500px] object-cover object-center"
                  />
                  <div className="absolute -bottom-4 -left-4 bg-primary p-4 rounded-xl shadow-lg">
                    <Award className="w-8 h-8 text-accent" />
                  </div>
                </div>
              </div>
              <div className="lg:order-1">
                <div className="inline-block bg-accent/10 px-4 py-2 rounded-full mb-4">
                  <span className="text-accent font-semibold text-sm">Founder & CEO</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                  Peterson
                </h3>
                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-accent/30 absolute -top-2 -left-2" />
                  <p className="text-lg text-muted-foreground leading-relaxed pl-6 italic">
                    "Taking care of our drivers and delivering reliable freight services has always been my passion."
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Peterson is a seasoned businessman from Fort Myers, Florida, with over 25 years of experience in the transportation industry. After successfully running Classic Traffic School, he continued his journey and is now the owner of Critical Expedite Freight, an asset-based brokerage company with its own fleet of trucks.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Known for his strong relationships across the driving and trucking community, he is deeply committed to taking care of his drivers and delivering reliable freight services. His career reflects hard work, consistency, and a genuine passion for the industry he has proudly served for decades.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-card p-4 rounded-xl shadow-sm text-center flex-1 min-w-[120px]">
                    <span className="text-2xl font-bold text-accent block">25+</span>
                    <span className="text-sm text-muted-foreground">Years Experience</span>
                  </div>
                  <div className="bg-card p-4 rounded-xl shadow-sm text-center flex-1 min-w-[120px]">
                    <span className="text-2xl font-bold text-accent block">Own Fleet</span>
                    <span className="text-sm text-muted-foreground">Asset-Based</span>
                  </div>
                  <div className="bg-card p-4 rounded-xl shadow-sm text-center flex-1 min-w-[120px]">
                    <span className="text-2xl font-bold text-accent block">Fort Myers</span>
                    <span className="text-sm text-muted-foreground">Based In</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Our <span className="text-accent">Values</span>
              </h2>
              <p className="text-muted-foreground">
                The principles that guide everything we do.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-card p-6 rounded-2xl shadow-md card-hover text-center">
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
              Ready to Work <span className="text-accent">Together?</span>
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help optimize your supply chain and exceed your logistics expectations.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl">Get Started Today</Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
