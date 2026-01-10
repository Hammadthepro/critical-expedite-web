import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

// Import all gallery images
import gallery01 from "@/assets/gallery/gallery-01.jpg";
import gallery02 from "@/assets/gallery/gallery-02.jpg";
import gallery03 from "@/assets/gallery/gallery-03.jpg";
import gallery04 from "@/assets/gallery/gallery-04.jpg";
import gallery05 from "@/assets/gallery/gallery-05.jpg";
import gallery06 from "@/assets/gallery/gallery-06.jpg";
import gallery07 from "@/assets/gallery/gallery-07.jpg";
import gallery08 from "@/assets/gallery/gallery-08.jpg";
import gallery09 from "@/assets/gallery/gallery-09.jpg";
import gallery10 from "@/assets/gallery/gallery-10.jpg";
import gallery11 from "@/assets/gallery/gallery-11.jpg";
import gallery12 from "@/assets/gallery/gallery-12.jpg";
import gallery13 from "@/assets/gallery/gallery-13.jpg";
import gallery14 from "@/assets/gallery/gallery-14.jpg";
import gallery15 from "@/assets/gallery/gallery-15.jpg";
import gallery16 from "@/assets/gallery/gallery-16.jpg";
import gallery17 from "@/assets/gallery/gallery-17.jpg";
import gallery18 from "@/assets/gallery/gallery-18.jpg";
import gallery19 from "@/assets/gallery/gallery-19.jpg";
import gallery20 from "@/assets/gallery/gallery-20.jpg";

// Also include the main service images in the gallery
import freightBrokerage from "@/assets/freight-brokerage.jpg";
import carrierServices from "@/assets/carrier-services.jpg";
import dispatchServices from "@/assets/dispatch-services.jpg";
import factoringServices from "@/assets/factoring-services.jpg";
import warehousing from "@/assets/warehousing.jpg";
import aboutImage from "@/assets/about-image.jpg";
import servicesHero from "@/assets/services-hero.jpg";
import whyChooseUs from "@/assets/why-choose-us.jpg";
import reviewsHero from "@/assets/reviews-hero.jpg";

const galleryImages = [
  { src: gallery01, alt: "Fleet Operations", category: "Fleet" },
  { src: gallery02, alt: "Freight Transportation", category: "Fleet" },
  { src: gallery03, alt: "Cargo Delivery", category: "Operations" },
  { src: gallery04, alt: "Trucking Services", category: "Fleet" },
  { src: gallery05, alt: "Logistics Operations", category: "Operations" },
  { src: gallery06, alt: "Freight Hauling", category: "Fleet" },
  { src: gallery07, alt: "Transportation Services", category: "Fleet" },
  { src: gallery08, alt: "Cargo Management", category: "Operations" },
  { src: gallery09, alt: "Fleet Management", category: "Fleet" },
  { src: gallery10, alt: "Delivery Services", category: "Operations" },
  { src: gallery11, alt: "Team Member", category: "Team" },
  { src: gallery12, alt: "Freightliner Truck", category: "Fleet" },
  { src: gallery13, alt: "Gooseneck Trailer", category: "Equipment" },
  { src: gallery14, alt: "Red International Truck", category: "Fleet" },
  { src: gallery15, alt: "Heavy Equipment Load", category: "Operations" },
  { src: gallery16, alt: "Branded Truck", category: "Fleet" },
  { src: gallery17, alt: "Company Vehicle", category: "Fleet" },
  { src: gallery18, alt: "Green Peterbilt", category: "Fleet" },
  { src: gallery19, alt: "Flatbed Delivery", category: "Operations" },
  { src: gallery20, alt: "Warehouse Loading", category: "Operations" },
  { src: freightBrokerage, alt: "Freight Brokerage", category: "Services" },
  { src: carrierServices, alt: "Carrier Services", category: "Services" },
  { src: dispatchServices, alt: "Dispatch Services", category: "Services" },
  { src: factoringServices, alt: "Factoring Services", category: "Services" },
  { src: warehousing, alt: "Warehousing", category: "Services" },
  { src: aboutImage, alt: "About Our Company", category: "Company" },
  { src: servicesHero, alt: "Our Services", category: "Services" },
  { src: whyChooseUs, alt: "Why Choose Us", category: "Company" },
  { src: reviewsHero, alt: "Customer Reviews", category: "Company" },
];

const categories = ["All", "Fleet", "Operations", "Equipment", "Services", "Team", "Company"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const handlePrevious = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    } else if (selectedImage === 0) {
      setSelectedImage(filteredImages.length - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null && selectedImage < filteredImages.length - 1) {
      setSelectedImage(selectedImage + 1);
    } else if (selectedImage === filteredImages.length - 1) {
      setSelectedImage(0);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>
        <div className="relative z-10 text-center text-primary-foreground">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Our Gallery</h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto px-4">
            Explore our fleet, operations, and the dedicated team behind Critical Expedite Freight
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/60 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-primary-foreground">
                    <p className="font-semibold">{image.alt}</p>
                    <p className="text-sm text-primary-foreground/80">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Image count */}
          <p className="text-center text-muted-foreground mt-8">
            Showing {filteredImages.length} of {galleryImages.length} images
          </p>
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-0 bg-black/95 border-none">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
          >
            <X className="w-6 h-6" />
          </button>
          
          {selectedImage !== null && (
            <div className="relative flex items-center justify-center min-h-[60vh]">
              <button
                onClick={handlePrevious}
                className="absolute left-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              
              <img
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].alt}
                className="max-h-[80vh] max-w-full object-contain"
              />
              
              <button
                onClick={handleNext}
                className="absolute right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
              
              <div className="absolute bottom-4 left-0 right-0 text-center text-white">
                <p className="font-semibold">{filteredImages[selectedImage].alt}</p>
                <p className="text-sm text-white/70">{selectedImage + 1} / {filteredImages.length}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Gallery;
