import { Sparkles, GraduationCap, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Heart,
    title: "Beauty Services",
    description:
      "Enjoy premium nail care, eyelash work, and relaxing massage treatments delivered with expertise and passion.",
    color: "text-emerald",
  },
  {
    icon: GraduationCap,
    title: "Training Courses",
    description:
      "Learn beauty skills through certified, beginner-friendly courses that include starter kits and real practice.",
    color: "text-gold",
  },
  {
    icon: Sparkles,
    title: "Why Choose Us",
    description:
      "Practical, hands-on training • Affordable beginner courses • Friendly learning environment • High-quality beauty services • Real skills, real opportunities",
    color: "text-earth-brown",
  },
];

const FeatureOverview = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal">
            Discover Your Beauty Journey
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A calm, welcoming space where beauty, wellness, and practical skills come together.
            From flawless nails and soothing massages to fully guided beginner courses — we help you grow with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-elegant transition-smooth animate-slide-up border-border/50 bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className={`${feature.color} p-4 rounded-full bg-background group-hover:scale-110 transition-transform`}>
                    <feature.icon size={48} strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-charcoal">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureOverview;
