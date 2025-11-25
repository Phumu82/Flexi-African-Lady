import { useState } from "react";
import { Sparkles, Hand, Eye, Heart, ChevronDown } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import manicureImg from "@/assets/services/manicure.jpg";
import eyelashesImg from "@/assets/services/eyelashes.jpg";
import massageImg from "@/assets/services/massage.jpg";
import facialImg from "@/assets/services/facial.jpg";

const services = [
  {
    icon: Hand,
    title: "Manicure & Pedicure",
    description: "Premium nail care services including gel polish, acrylics, nail art, and spa treatments for hands and feet. Experience luxury nail treatments that leave you feeling pampered and polished.",
    image: manicureImg,
    details: [
      "Gel polish application",
      "Acrylic nail extensions",
      "Creative nail art designs",
      "Spa pedicure treatments",
      "Nail care & maintenance"
    ]
  },
  {
    icon: Eye,
    title: "Cluster Eyelashes",
    description: "Professional eyelash enhancement services for a natural or dramatic look that enhances your beauty. Our expert technicians create stunning, long-lasting results.",
    image: eyelashesImg,
    details: [
      "Natural lash enhancement",
      "Dramatic volume looks",
      "Long-lasting application",
      "Safe & hygienic process",
      "Customized to your style"
    ]
  },
  {
    icon: Heart,
    title: "Swedish & Aroma Massage",
    description: "Relaxing therapeutic massage treatments combining Swedish techniques with aromatherapy for ultimate wellness. Melt away stress in our tranquil spa environment.",
    image: massageImg,
    details: [
      "Swedish massage techniques",
      "Aromatherapy infusion",
      "Hot stone therapy option",
      "Full body relaxation",
      "Stress relief & wellness"
    ]
  },
  {
    icon: Sparkles,
    title: "Facial Treatments",
    description: "Rejuvenating facial treatments tailored to your skin type, leaving you glowing and refreshed. Experience radiant skin with our professional skincare services.",
    image: facialImg,
    details: [
      "Deep cleansing facials",
      "Anti-aging treatments",
      "Hydration therapy",
      "Custom skin analysis",
      "Natural ingredient options"
    ]
  },
];

const regularServices = [
  { name: "Classic Facial", price: "R180" },
  { name: "Deep Cleanse Facial", price: "R250" },
  { name: "Hydrating Glow Facial", price: "R300" },
  { name: "Massage Add-On", price: "R80" },
  { name: "Brow Tint", price: "R60" },
  { name: "Lash Tint", price: "R70" },
];

const premiumWaxing = [
  { name: "Hollywood Wax", price: "R280" },
  { name: "Full Body Wax", price: "R450" },
  { name: "Underarm Wax", price: "R80" },
  { name: "Full Leg Wax", price: "R150" },
  { name: "Bikini Wax", price: "R120" },
  { name: "Brows / Lip Wax", price: "R50" },
];

const ServicesPage = () => {
  const [isPremiumOpen, setIsPremiumOpen] = useState(false);

  const handleBookNow = () => {
    window.open(
      "https://wa.me/27691297257?text=Hi%2C+I%27m+interested+in+your+beauty+services.",
      "_blank"
    );
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-charcoal">
            Our Premium Services
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Experience professional beauty and wellness treatments in a luxurious, welcoming environment. 
            Each service is delivered with expertise, passion, and attention to your unique needs.
          </p>
          <Button
            size="lg"
            className="bg-emerald text-white hover:bg-emerald-light hover:shadow-glow transform hover:scale-105"
            onClick={handleBookNow}
          >
            Book Your Service Now
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`overflow-hidden border-2 border-border/50 hover:border-gold/50 hover:shadow-elegant transition-smooth animate-slide-up ${
                  index % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="md:grid md:grid-cols-2 md:gap-0">
                  {/* Image */}
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-hero opacity-20" />
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col justify-center">
                    <div className="mb-4 text-emerald">
                      <service.icon size={48} strokeWidth={1.5} />
                    </div>
                    <CardTitle className="text-3xl text-charcoal mb-4">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </CardDescription>
                    
                    <div className="space-y-2 mb-6">
                      <h4 className="font-semibold text-charcoal mb-3">What's Included:</h4>
                      {service.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      className="bg-gold text-charcoal hover:bg-gold-light hover:shadow-glow w-full md:w-auto"
                      onClick={handleBookNow}
                    >
                      Book This Service
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Services Pricing Section */}
          <div className="mt-20 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-charcoal">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {regularServices.map((service, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 bg-background border-2 border-gold/20 rounded-xl hover:border-gold/50 hover:shadow-elegant transition-smooth"
                >
                  <span className="text-lg text-charcoal font-medium">{service.name}</span>
                  <span className="text-xl text-gold font-bold">{service.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Premium Waxing Section (Collapsible) */}
          <div className="mt-12 max-w-4xl mx-auto">
            <Collapsible open={isPremiumOpen} onOpenChange={setIsPremiumOpen}>
              <CollapsibleTrigger asChild>
                <Button
                  className="w-full md:w-auto mx-auto flex items-center gap-2 border-2 border-gold bg-background text-charcoal hover:bg-emerald/10 hover:shadow-glow transition-smooth rounded-xl px-8 py-6 text-lg font-semibold"
                  variant="outline"
                >
                  See Premium Services
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-300 ${
                      isPremiumOpen ? "rotate-180" : ""
                    }`}
                  />
                </Button>
              </CollapsibleTrigger>
              
              <CollapsibleContent className="mt-8 animate-accordion-down">
                <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-charcoal">
                  Premium Waxing Services
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {premiumWaxing.map((service, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-4 bg-emerald/5 border-2 border-emerald/20 rounded-xl hover:border-gold/50 hover:shadow-elegant transition-smooth"
                    >
                      <span className="text-lg text-charcoal font-medium">{service.name}</span>
                      <span className="text-xl text-gold font-bold">{service.price}</span>
                    </div>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 bg-emerald/10 border-2 border-emerald/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-charcoal">
              Ready to Experience Luxury?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Book your appointment today and discover why we're the premier choice for beauty and wellness.
            </p>
            <Button
              size="lg"
              className="bg-emerald text-white hover:bg-emerald-light hover:shadow-glow"
              onClick={handleBookNow}
            >
              Book an Appointment
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServicesPage;
