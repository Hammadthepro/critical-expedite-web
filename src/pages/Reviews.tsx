import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star, Quote } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const reviews = [
  {
    name: "Liam Chen",
    role: "Supply Chain Manager",
    company: "TechCorp Industries",
    content: "Critical Expedite transformed our fulfillment process. The deliveries are always on time, and their tracking system gives us complete visibility. We've reduced our shipping costs by 20% since partnering with them.",
    rating: 5,
  },
  {
    name: "Sophia James",
    role: "Logistics Director",
    company: "Retail Solutions Inc",
    content: "Their brokerage services are top-notch. Great communication and reliable carriers every time. The team goes above and beyond to ensure our shipments arrive safely and on schedule.",
    rating: 5,
  },
  {
    name: "Ava Mitchell",
    role: "Fleet Owner",
    company: "Mitchell Trucking",
    content: "The dispatch team keeps our trucks moving efficiently. Excellent support and coordination. They handle all the paperwork and negotiations, letting us focus on driving.",
    rating: 5,
  },
  {
    name: "Rahul Desai",
    role: "Business Owner",
    company: "Desai Manufacturing",
    content: "Factoring services helped our cash flow tremendously. Professional and hassle-free process. We no longer have to wait 60+ days for payment.",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "Operations Manager",
    company: "National Distributors",
    content: "We've worked with many freight brokers, but Critical Expedite stands out. Their asset-based approach means we always have capacity, even during peak seasons.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Purchasing Director",
    company: "Rodriguez Food Services",
    content: "The warehousing solutions have been a game-changer for our business. Strategic locations, excellent inventory management, and seamless distribution.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "CEO",
    company: "Kim Electronics",
    content: "15 years of experience really shows. They anticipated our needs before we even knew them. The team treats our freight like their own.",
    rating: 5,
  },
  {
    name: "Sarah Thompson",
    role: "Logistics Coordinator",
    company: "Thompson Wholesale",
    content: "The real-time tracking with Macro Point gives us peace of mind. We can update our customers accurately and plan our operations better.",
    rating: 5,
  },
];

const ReviewsPage = () => {
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
              Client <span className="text-accent">Reviews</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our valued clients have to say.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-accent">
          <div className="container-custom">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold text-accent-foreground mb-1">4.9/5</p>
                <p className="text-accent-foreground/80">Average Rating</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-accent-foreground mb-1">500+</p>
                <p className="text-accent-foreground/80">Happy Clients</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-accent-foreground mb-1">98%</p>
                <p className="text-accent-foreground/80">Would Recommend</p>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-2xl shadow-md card-hover relative"
                >
                  <Quote className="w-10 h-10 text-accent/20 absolute top-4 right-4" />
                  
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    "{review.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-lg">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{review.name}</p>
                      <p className="text-sm text-muted-foreground">{review.role}</p>
                      <p className="text-xs text-accent">{review.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
              Ready to Join Our <span className="text-accent">Success Stories?</span>
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Experience the Critical Expedite difference and see why businesses trust us with their freight.
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

export default ReviewsPage;
