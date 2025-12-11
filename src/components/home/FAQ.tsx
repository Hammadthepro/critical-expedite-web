import { ChevronRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const leftFaqs = [
  {
    question: "How do I track my shipment?",
    answer: "We use advanced tracking systems including Macro Point and Trucker Tools to monitor your shipment in real-time. Our team provides regular updates via call, text, or email with live location and estimated delivery times.",
  },
  {
    question: "What shipping modes do you offer?",
    answer: "We provide full truckload (FTL), less-than-truckload (LTL), expedited shipping, and specialized freight services through our carrier network and company assets.",
  },
  {
    question: "Do you handle international shipping?",
    answer: "Yes, we coordinate domestic and cross-border shipments with full documentation support and customs coordination assistance.",
  },
  {
    question: "What shipping methods do you offer?",
    answer: "We offer dry van, flatbed, refrigerated transport, and specialized equipment based on your cargo requirements and timeline.",
  },
];

const rightFaqs = [
  {
    question: "How much does shipping cost?",
    answer: "Shipping costs depend on distance, weight, freight type, and service level. Contact us for a free, customized quote based on your specific needs.",
  },
  {
    question: "Do you offer free shipping?",
    answer: "We provide competitive rates with volume discounts for regular customers. Reach out to discuss pricing options tailored to your shipping frequency.",
  },
  {
    question: "How long does shipping take?",
    answer: "Transit times vary by distance and service type. We offer standard and expedited options to meet your delivery deadlines.",
  },
  {
    question: "Can I change my shipping address after placing an order?",
    answer: "Yes, contact our dispatch team immediately. If the shipment hasn't been picked up yet, we can update the delivery address without issues.",
  },
];

const FAQ = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Got Questions? We've Got <span className="text-accent">Answers</span>.
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about our logistics services and how we operate.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {leftFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`left-${index}`}
                  className="bg-card rounded-xl border-none shadow-sm overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-accent/5 [&[data-state=open]>svg]:rotate-90">
                    <span className="flex items-center gap-3 text-left font-semibold text-foreground">
                      <ChevronRight className="w-5 h-5 text-accent transition-transform duration-200" />
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right Column */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {rightFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`right-${index}`}
                  className="bg-card rounded-xl border-none shadow-sm overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-accent/5 [&[data-state=open]>svg]:rotate-90">
                    <span className="flex items-center gap-3 text-left font-semibold text-foreground">
                      <ChevronRight className="w-5 h-5 text-accent transition-transform duration-200" />
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
