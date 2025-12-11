import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, Shield, Clock } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      {/* Content */}
      <div className="container-custom px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="animate-fade-in-up">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-6">
              Asset-Based Freight Brokerage
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up animation-delay-100">
            Delivering The Future Of{" "}
            <span className="text-accent">Logistics</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-accent font-semibold mb-4 animate-fade-in-up animation-delay-200">
            Where Trust Travels.
          </p>
          
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl animate-fade-in-up animation-delay-300">
            Fast, reliable, and tech-driven shipping solutions across the globe. With 15+ years of experience, we deliver efficient, scalable transportation solutions you can count on.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
            <Link to="/contact">
              <Button variant="hero" size="xl" className="group">
                Get A Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="hero-outline" size="xl">
                Our Services
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-primary-foreground/20 animate-fade-in-up animation-delay-500">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-accent/20">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary-foreground">15+</p>
                <p className="text-sm text-primary-foreground/70">Years Experience</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-accent/20">
                <Truck className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary-foreground">500+</p>
                <p className="text-sm text-primary-foreground/70">Carriers Network</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-accent/20">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary-foreground">100%</p>
                <p className="text-sm text-primary-foreground/70">Secure Tracking</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
