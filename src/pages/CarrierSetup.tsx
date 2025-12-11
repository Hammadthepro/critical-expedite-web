import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, Truck, FileText, Shield } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const requirements = [
  "Active DOT & MC Numbers",
  "$100,000 Cargo Insurance",
  "$1,000,000 Auto Liability",
  "Satisfactory Safety Rating",
  "W-9 Form",
  "Certificate of Insurance",
];

const benefits = [
  {
    icon: Truck,
    title: "Consistent Freight",
    description: "Regular loads to keep your trucks moving and revenue flowing.",
  },
  {
    icon: FileText,
    title: "Quick Pay Options",
    description: "Get paid fast with our factoring services - no waiting 30-90 days.",
  },
  {
    icon: Shield,
    title: "Reliable Partners",
    description: "Work with a trusted, asset-based brokerage that understands carriers.",
  },
];

const CarrierSetup = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    mcNumber: "",
    dotNumber: "",
    contactName: "",
    email: "",
    phone: "",
    equipmentType: "",
    homeBase: "",
    lanePreferences: "",
    additionalInfo: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Application Submitted!",
      description: "We'll review your information and contact you within 24-48 hours.",
    });
    
    setFormData({
      companyName: "",
      mcNumber: "",
      dotNumber: "",
      contactName: "",
      email: "",
      phone: "",
      equipmentType: "",
      homeBase: "",
      lanePreferences: "",
      additionalInfo: "",
    });
    setIsSubmitting(false);
  };

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
              Carrier <span className="text-accent">Setup</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Join our network of trusted carriers and start hauling quality freight today.
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-12 bg-accent">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-4 text-accent-foreground">
                  <div className="p-3 bg-accent-foreground/20 rounded-xl">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">{benefit.title}</h3>
                    <p className="text-sm text-accent-foreground/80">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Requirements */}
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                  Requirements
                </h2>
                <p className="text-muted-foreground mb-6">
                  To join our carrier network, you'll need the following:
                </p>
                <ul className="space-y-3">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 p-6 bg-muted rounded-xl">
                  <h3 className="font-bold text-foreground mb-2">Quick Onboarding</h3>
                  <p className="text-sm text-muted-foreground">
                    Our streamlined process gets you set up and hauling loads within 24-48 hours of approval.
                  </p>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-2">
                <div className="bg-card p-8 rounded-2xl shadow-lg">
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                    Carrier Application
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="companyName">Company Name *</Label>
                        <Input
                          id="companyName"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                          required
                          placeholder="Your company name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contactName">Contact Name *</Label>
                        <Input
                          id="contactName"
                          name="contactName"
                          value={formData.contactName}
                          onChange={handleChange}
                          required
                          placeholder="Primary contact"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="mcNumber">MC Number *</Label>
                        <Input
                          id="mcNumber"
                          name="mcNumber"
                          value={formData.mcNumber}
                          onChange={handleChange}
                          required
                          placeholder="MC-XXXXXX"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="dotNumber">DOT Number *</Label>
                        <Input
                          id="dotNumber"
                          name="dotNumber"
                          value={formData.dotNumber}
                          onChange={handleChange}
                          required
                          placeholder="XXXXXXX"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="email@company.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="(XXX) XXX-XXXX"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="equipmentType">Equipment Type</Label>
                        <select
                          id="equipmentType"
                          name="equipmentType"
                          value={formData.equipmentType}
                          onChange={handleChange}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                          <option value="">Select equipment type</option>
                          <option value="dry-van">Dry Van</option>
                          <option value="flatbed">Flatbed</option>
                          <option value="reefer">Refrigerated</option>
                          <option value="step-deck">Step Deck</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="homeBase">Home Base Location</Label>
                        <Input
                          id="homeBase"
                          name="homeBase"
                          value={formData.homeBase}
                          onChange={handleChange}
                          placeholder="City, State"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lanePreferences">Preferred Lanes</Label>
                      <Input
                        id="lanePreferences"
                        name="lanePreferences"
                        value={formData.lanePreferences}
                        onChange={handleChange}
                        placeholder="e.g., Southeast, Midwest, OTR"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="additionalInfo">Additional Information</Label>
                      <Textarea
                        id="additionalInfo"
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleChange}
                        placeholder="Tell us more about your fleet, experience, or any questions..."
                        rows={4}
                      />
                    </div>
                    <Button 
                      type="submit" 
                      variant="accent" 
                      size="xl" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CarrierSetup;
