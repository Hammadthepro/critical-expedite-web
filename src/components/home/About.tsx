import { CheckCircle2 } from "lucide-react";
import dispatchServices from "@/assets/dispatch-services.jpg";

const features = [
  "Asset-based brokerage with own fleet",
  "15+ years of industry experience",
  "Advanced tracking with Macro Point & Trucker Tools",
  "24/7 customer support",
  "Nationwide coverage",
  "Competitive rates",
];

const About = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative animate-slide-in-left">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={dispatchServices}
                alt="Critical Expedite Freight operations"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent" />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-2xl shadow-xl animate-float">
              <div className="text-center">
                <span className="text-4xl font-bold block">15+</span>
                <span className="text-sm font-medium">Years of<br />Experience</span>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="animate-slide-in-right">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
              Who We <span className="text-accent">Are</span>
            </h2>
            <p className="text-accent font-semibold text-lg mb-6">
              Trusted asset-based brokerage with over 15 years of experience.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              At Critical Expedite Freight LLC, we're more than just a freight broker — we are your strategic logistics partner. As an asset-based brokerage company based in Fort Myers, Florida, we combine the flexibility of brokerage services with the reliability of our own fleet and warehouse facilities. With over 15 years of industry experience, we deliver efficient, scalable transportation solutions you can count on.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
