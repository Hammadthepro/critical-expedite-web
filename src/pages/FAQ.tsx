import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroBg from "@/assets/hero-bg.jpg";

const faqCategories = [
  {
    title: "Shipping & Tracking",
    faqs: [
      {
        question: "How do I track my shipment?",
        answer: "We use advanced tracking systems including Macro Point and Trucker Tools to monitor your shipment in real-time. Our team provides regular updates via call, text, or email with live location and estimated delivery times. You can also access our client portal for 24/7 tracking visibility.",
      },
      {
        question: "What shipping modes do you offer?",
        answer: "We provide full truckload (FTL), less-than-truckload (LTL), expedited shipping, and specialized freight services through our carrier network and company assets. We can handle dry van, flatbed, refrigerated, and specialized equipment needs.",
      },
      {
        question: "Do you handle international shipping?",
        answer: "Yes, we coordinate domestic and cross-border shipments with full documentation support and customs coordination assistance. Our team has experience with both Canadian and Mexican border crossings.",
      },
      {
        question: "What shipping methods do you offer?",
        answer: "We offer dry van, flatbed, refrigerated transport, and specialized equipment based on your cargo requirements and timeline. Our asset-based operations ensure we always have capacity available.",
      },
      {
        question: "Can I change my shipping address after placing an order?",
        answer: "Yes, contact our dispatch team immediately. If the shipment hasn't been picked up yet, we can update the delivery address without issues. For in-transit changes, we'll work with the carrier to accommodate when possible.",
      },
    ],
  },
  {
    title: "Pricing & Payment",
    faqs: [
      {
        question: "How much does shipping cost?",
        answer: "Shipping costs depend on distance, weight, freight type, and service level. Contact us for a free, customized quote based on your specific needs. Our competitive rates and transparent pricing mean no hidden fees.",
      },
      {
        question: "Do you offer volume discounts?",
        answer: "Yes, we provide competitive rates with volume discounts for regular customers. Reach out to discuss pricing options tailored to your shipping frequency and needs.",
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept ACH transfers, wire transfers, company checks, and credit cards. For regular shippers, we offer net 30 terms upon credit approval.",
      },
      {
        question: "How does your factoring service work?",
        answer: "Our factoring service allows carriers to get paid quickly on their invoices, typically within 24-48 hours. We handle collections so you can focus on growing your business without waiting 30-90 days for payment.",
      },
    ],
  },
  {
    title: "Services & Operations",
    faqs: [
      {
        question: "What makes you different from other freight brokers?",
        answer: "As an asset-based brokerage, we own our own trucks and equipment, which means guaranteed capacity and consistent service quality. Combined with our 15+ years of experience and advanced tracking technology, we provide a level of reliability that traditional brokers can't match.",
      },
      {
        question: "Do you offer warehousing services?",
        answer: "Yes, we have secure storage facilities with inventory management, packaging, and distribution support. Our strategically located warehouses help reduce transit times and streamline your supply chain.",
      },
      {
        question: "What industries do you serve?",
        answer: "We serve a wide range of industries including manufacturing, retail, food & beverage, construction, automotive, and e-commerce. Our diverse experience allows us to handle specialized requirements for various sectors.",
      },
      {
        question: "How do you ensure cargo safety?",
        answer: "All carriers in our network are thoroughly vetted for insurance, safety ratings, and performance history. We require proper cargo insurance and provide real-time tracking on every shipment.",
      },
    ],
  },
  {
    title: "Carrier Information",
    faqs: [
      {
        question: "How can I become a carrier partner?",
        answer: "Visit our Carrier Setup page to apply. We require active MC authority, proper insurance documentation, and a clean safety record. Our team will review your application and contact you within 24-48 hours.",
      },
      {
        question: "What are your carrier requirements?",
        answer: "We require active DOT and MC numbers, $100,000 cargo insurance, $1,000,000 auto liability insurance, and a satisfactory safety rating. We verify all documentation before adding carriers to our network.",
      },
      {
        question: "How quickly can I get set up as a carrier?",
        answer: "Once you submit your application and documentation, our team can typically verify and approve carriers within 24-48 hours. Quick setup means you can start hauling loads right away.",
      },
    ],
  },
];

const FAQPage = () => {
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
              Frequently Asked <span className="text-accent">Questions</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Everything you need to know about our logistics services and how we operate.
            </p>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="section-padding bg-background">
          <div className="container-custom max-w-4xl">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12 last:mb-0">
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                  {category.title}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`${categoryIndex}-${faqIndex}`}
                      className="bg-card rounded-xl border-none shadow-sm overflow-hidden"
                    >
                      <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-accent/5 [&[data-state=open]>svg]:rotate-90">
                        <span className="flex items-center gap-3 text-left font-semibold text-foreground">
                          <ChevronRight className="w-5 h-5 text-accent transition-transform duration-200" />
                          {faq.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4 pt-0 text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
              Still Have <span className="text-accent">Questions?</span>
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Our team is here to help. Reach out and we'll get back to you within 24 hours.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl">Contact Us</Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQPage;
