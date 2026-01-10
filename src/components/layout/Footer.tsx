import { Link } from "react-router-dom";
import { Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
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

  const resources = [
    { name: "Blog", path: "#" },
    { name: "Case Studies", path: "#" },
    { name: "Press & News", path: "#" },
    { name: "Industry Insights", path: "#" },
    { name: "Download Brochures", path: "#" },
    { name: "Client Portal Login", path: "#" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <img src={logo} alt="Critical Expedite Freight LLC" className="h-20 w-auto brightness-0 invert" />
            <p className="text-accent font-semibold text-lg">Where Trust Travels.</p>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Critical Expedite is an asset-based freight brokerage providing comprehensive logistics solutions for businesses nationwide. Delivering efficiency, reliability, and quality since 2008.
            </p>
            <div className="space-y-3">
              <a href="tel:+13474526934" className="flex items-center gap-3 text-sm hover:text-accent transition-colors">
                <Phone className="w-4 h-4 text-accent" />
                +1 (347) 452 6934
              </a>
              <a href="mailto:info@criticalexpeditefreightllc.com" className="text-sm hover:text-accent transition-colors block">
                info@criticalexpeditefreightllc.com
              </a>
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span>3100 Evans Ave<br />Fort Myers, FL 33901</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold mb-6">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link
                    to={resource.path}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Critical Expedite Freight LLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
