import { Sparkles, Hand, Eye, Heart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Hand,
    title: "Manicure & Pedicure",
    description: "Premium nail care services including gel polish, acrylics, nail art, and spa treatments for hands and feet.",
  },
  {
    icon: Eye,
    title: "Cluster Eyelashes",
    description: "Professional eyelash enhancement services for a natural or dramatic look that enhances your beauty.",
  },
  {
    icon: Heart,
    title: "Swedish & Aroma Massage",
    description: "Relaxing therapeutic massage treatments combining Swedish techniques with aromatherapy for ultimate wellness.",
  },
  {
    icon: Sparkles,
    title: "Facial Treatments",
    description: "Rejuvenating facial treatments tailored to your skin type, leaving you glowing and refreshed.",
  },
];

const Services = () => {
  const handleBookNow = () => {
    window.open(
      "https://wa.me/27691297257?text=Hi%2C+I%27m+interested+in+your+beauty+services.",
      "_blank"
    );
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-charcoal">
            Our Premium Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience professional beauty and wellness treatments in a luxurious, welcoming environment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-elegant transition-smooth animate-slide-up border-border/50 hover:border-emerald/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="mb-4 text-emerald group-hover:text-gold transition-colors">
                  <service.icon size={48} strokeWidth={1.5} />
                </div>
                <CardTitle className="text-xl text-charcoal">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-emerald text-white hover:bg-emerald-light hover:shadow-glow transform hover:scale-105"
            onClick={handleBookNow}
          >
            Book Your Service
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
