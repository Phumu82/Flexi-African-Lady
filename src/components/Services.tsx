import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Hand, Footprints, Heart, Scissors } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Hair Treatments",
    description: "Natural hair care, protective styles, silk press, treatments, and cuts celebrating African hair textures.",
  },
  {
    icon: Hand,
    title: "Manicure",
    description: "Luxurious nail care with premium products, gel, acrylics, and artistic nail designs.",
  },
  {
    icon: Footprints,
    title: "Pedicure",
    description: "Complete foot care treatments with relaxing soaks, scrubs, and beautiful polish applications.",
  },
  {
    icon: Heart,
    title: "Massage Therapy",
    description: "Therapeutic massages to relieve tension, promote relaxation, and rejuvenate your body.",
  },
  {
    icon: Sparkles,
    title: "Facials",
    description: "Customized facial treatments for all skin types with premium products and techniques.",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-gold">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Indulge in our comprehensive range of beauty and wellness treatments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group hover:shadow-elegant transition-smooth border-border/50 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth shadow-elegant">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
