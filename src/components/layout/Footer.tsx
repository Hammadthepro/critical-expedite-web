import { Link } from "react-router-dom";
import { Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight, Truck } from "lucide-react";
import logo from "@/assets/logo.webp";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/contact" },
    { name: "Carrier Sign Up", path: "/carrier-setup" },
    { name: "FAQs", path: "/faq" },
  ];

  const services = [
    { name: "Freight Brokerage", path: "/services#freight-brokerage" },
    { name: "Carrier Services", path: "/services#carrier-services" },
    { name: "Dispatch Services", path: "/services#dispatch-services" },
    { name: "Factoring Services", path: "/services#factoring-services" },
    { name: "Warehousing", path: "/services#warehousing" },
  ];

  return (
    <footer className="bg-gradient-to-b from-primary to-primary/95 text-primary-foreground relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-accent/50 to-accent"></div>
      <div className="absolute top-20 right-10 opacity-5">
        <Truck className="w-64 h-64" />
      </div>
      
      {/* CTA Banner */}
      <div className="bg-accent py-6">
        <div className="container-custom px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-accent-foreground font-bold text-xl">Ready to streamline your logistics?</h3>
            <p className="text-accent-foreground/80 text-sm">Get a free quote today and experience the difference.</p>
          </div>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all group"
          >
            Get Started
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      <div className="container-custom px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Company Info */}
          <div className="space-y-6 lg:col-span-1">
            <img src={logo} alt="Critical Expedite Freight LLC" className="h-16 w-auto brightness-0 invert" />
            <p className="text-accent font-semibold text-xl italic">"Where Trust Travels."</p>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Critical Expedite is an asset-based freight brokerage providing comprehensive logistics solutions for businesses nationwide.
            </p>
            
            {/* Contact Info Cards */}
            <div className="space-y-4 pt-4">
              <a 
                href="tel:+13474526934" 
                className="flex items-center gap-4 p-3 rounded-lg bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-xs text-primary-foreground/60">Call Us</p>
                  <p className="font-semibold group-hover:text-accent transition-colors">+1 (347) 452 6934</p>
                </div>
              </a>
              
              <a 
                href="mailto:info@criticalexpeditefreightllc.com" 
                className="flex items-center gap-4 p-3 rounded-lg bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <span className="text-accent-foreground font-bold text-sm">@</span>
                </div>
                <div>
                  <p className="text-xs text-primary-foreground/60">Email Us</p>
                  <p className="font-semibold group-hover:text-accent transition-colors text-sm">info@criticalexpeditefreightllc.com</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4 p-3 rounded-lg bg-primary-foreground/5">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-xs text-primary-foreground/60">Visit Us</p>
                  <p className="font-semibold">3100 Evans Ave, Fort Myers, FL 33901</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-accent"></span>
              Quick Links
            </h4>
            <ul className="grid grid-cols-1 gap-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors inline-flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-accent"></span>
              Our Services
            </h4>
            <ul className="grid grid-cols-1 gap-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors inline-flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-accent"></span>
                Follow Us
              </h4>
              <div className="flex items-center gap-3">
                <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-all flex items-center justify-center group">
                  <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-all flex items-center justify-center group">
                  <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-all flex items-center justify-center group">
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-all flex items-center justify-center group">
                  <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
            <p>© {new Date().getFullYear()} Critical Expedite Freight LLC. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link to="#" className="hover:text-accent transition-colors">Privacy Policy</Link>
              <Link to="#" className="hover:text-accent transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
