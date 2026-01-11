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
import gallery21 from "@/assets/gallery/gallery-21.jpg";
import gallery22 from "@/assets/gallery/gallery-22.jpg";
import gallery23 from "@/assets/gallery/gallery-23.jpg";
import gallery24 from "@/assets/gallery/gallery-24.jpg";
import gallery25 from "@/assets/gallery/gallery-25.jpg";
import gallery26 from "@/assets/gallery/gallery-26.jpg";
import gallery27 from "@/assets/gallery/gallery-27.jpg";
import gallery28 from "@/assets/gallery/gallery-28.jpg";
import gallery29 from "@/assets/gallery/gallery-29.jpg";
import gallery30 from "@/assets/gallery/gallery-30.jpg";

const galleryImages = [
  { src: gallery01, alt: "White RAM truck at sunset", category: "Fleet" },
  { src: gallery02, alt: "Flatbed trailer with covered cargo", category: "Equipment" },
  { src: gallery03, alt: "Freightliner semi-truck with load", category: "Fleet" },
  { src: gallery04, alt: "Fleet truck on delivery route", category: "Fleet" },
  { src: gallery05, alt: "Heavy haul flatbed operations", category: "Operations" },
  { src: gallery06, alt: "Gooseneck trailer at loading facility", category: "Equipment" },
  { src: gallery07, alt: "Company truck with trailer attached", category: "Fleet" },
  { src: gallery08, alt: "Freight hauling on rural highway", category: "Operations" },
  { src: gallery09, alt: "Fleet management vehicle", category: "Fleet" },
  { src: gallery10, alt: "Critical Expedite delivery truck", category: "Fleet" },
  { src: gallery11, alt: "Mr. Peterson - Owner of Critical Expedite Freight", category: "Team" },
  { src: gallery12, alt: "Freightliner Cascadia hauling pallets", category: "Fleet" },
  { src: gallery13, alt: "Gooseneck trailer at job site", category: "Equipment" },
  { src: gallery14, alt: "Red International LT semi-truck", category: "Fleet" },
  { src: gallery15, alt: "Heavy equipment transport", category: "Operations" },
  { src: gallery16, alt: "Critical Expedite branded work truck", category: "Fleet" },
  { src: gallery17, alt: "Company RAM pickup at truck stop", category: "Fleet" },
  { src: gallery18, alt: "Green Peterbilt 579", category: "Fleet" },
  { src: gallery19, alt: "Flatbed with construction materials", category: "Operations" },
  { src: gallery20, alt: "Warehouse cross-docking operations", category: "Operations" },
  { src: gallery21, alt: "Critical Expedite work truck with flatbed trailer", category: "Fleet" },
  { src: gallery22, alt: "RAM 3500 dually at truck yard", category: "Fleet" },
  { src: gallery23, alt: "Tarp-covered load at gas station", category: "Operations" },
  { src: gallery24, alt: "Wabash flatbed with steel coils", category: "Equipment" },
  { src: gallery25, alt: "Freightliner on country road with lumber load", category: "Fleet" },
  { src: gallery26, alt: "Container hauling at shipping yard", category: "Operations" },
  { src: gallery27, alt: "RAM truck with gooseneck and rebar load", category: "Fleet" },
  { src: gallery28, alt: "APE equipment on step deck trailer", category: "Equipment" },
  { src: gallery29, alt: "Maroon International with industrial tanks", category: "Fleet" },
  { src: gallery30, alt: "Green Peterbilt at parking area", category: "Fleet" },
];

const categories = ["All", "Fleet", "Operations", "Equipment", "Team"];

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
              Our <span className="text-accent">Gallery</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Take a look at our fleet, operations, and the dedicated team behind Critical Expedite Freight.
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
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-accent text-accent-foreground shadow-md"
                      : "bg-muted text-muted-foreground hover:bg-accent/20"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredImages.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-primary-foreground font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                      {image.alt}
                    </span>
                  </div>
                  <div className="absolute bottom-2 left-2">
                    <span className="text-xs bg-accent/90 text-accent-foreground px-2 py-1 rounded-full">
                      {image.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-5xl bg-background/95 backdrop-blur-sm border-none p-0">
            <div className="relative">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-background/80 rounded-full hover:bg-background transition-colors"
                aria-label="Close gallery lightbox"
              >
                <X className="w-6 h-6" />
              </button>
              
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-background/80 rounded-full hover:bg-background transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-background/80 rounded-full hover:bg-background transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {selectedImage !== null && (
                <div className="p-4">
                  <img
                    src={filteredImages[selectedImage].src}
                    alt={filteredImages[selectedImage].alt}
                    className="w-full max-h-[80vh] object-contain rounded-lg"
                  />
                  <p className="text-center text-muted-foreground mt-4">
                    {filteredImages[selectedImage].alt}
                  </p>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
