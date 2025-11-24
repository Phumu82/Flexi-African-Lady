import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import nails1 from "@/assets/gallery/nails-1.jpg";
import nails2 from "@/assets/gallery/nails-2.jpg";
import nails3 from "@/assets/gallery/nails-3.jpg";
import nails4 from "@/assets/gallery/nails-4.jpg";
import nails5 from "@/assets/gallery/nails-5.jpg";
import massage from "@/assets/gallery/massage.jpg";

const galleryImages = [
  {
    src: nails1,
    alt: "Elegant stiletto nail design with pink and white ombre",
    category: "Manicure",
  },
  {
    src: nails2,
    alt: "Sophisticated ombre nail art with black tips",
    category: "Manicure",
  },
  {
    src: nails3,
    alt: "Luxury stiletto nails with pearl embellishments",
    category: "Manicure",
  },
  {
    src: nails4,
    alt: "Artistic pink gradient nails with floral designs",
    category: "Manicure",
  },
  {
    src: nails5,
    alt: "Classic nude manicure with natural elegance",
    category: "Manicure",
  },
  {
    src: massage,
    alt: "Relaxing hot stone massage therapy session",
    category: "Massage",
  },
];

const GalleryPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-charcoal">
            Our Work
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our portfolio of stunning nail artistry and relaxing treatments. 
            Each piece showcases our commitment to excellence and attention to detail.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {galleryImages.map((image, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-border/50 hover:shadow-elegant transition-smooth animate-slide-up cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-90 transition-smooth flex items-center justify-center">
                    <div className="text-center text-primary-foreground p-4">
                      <p className="text-sm font-semibold mb-2 text-gold">{image.category}</p>
                      <p className="text-xs text-white">{image.alt}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="text-center mt-16 max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground mb-6">
              Follow us on social media to see more of our latest work and special promotions!
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.tiktok.com/@allaabout_beauty45"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light transition-colors"
              >
                TikTok
              </a>
              <span className="text-muted-foreground">•</span>
              <a
                href="https://www.facebook.com/FlexiAfricanLady"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default GalleryPage;
