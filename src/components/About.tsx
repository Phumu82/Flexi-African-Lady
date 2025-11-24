import { Button } from "@/components/ui/button";
import { Award, Users, Sparkles, Leaf } from "lucide-react";

const stats = [
  {
    icon: Award,
    value: "5+",
    label: "Years Experience",
  },
  {
    icon: Users,
    value: "500+",
    label: "Happy Clients",
  },
  {
    icon: Sparkles,
    value: "15+",
    label: "Premium Services",
  },
  {
    icon: Leaf,
    value: "100%",
    label: "Quality Focused",
  },
];

const About = () => {
  const handleLearnMore = () => {
    window.open(
      "https://wa.me/27691297257?text=Hi%2C+I%27d+like+to+learn+more+about+Flexi+African+Lady.",
      "_blank"
    );
  };

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal">
            About Flexi African Lady
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              Welcome to Flexi African Lady — your premier destination for beauty, wellness, and professional training
              in African-inspired beauty services.
            </p>
            <p>
              We are dedicated to celebrating and enhancing natural beauty through expert services including manicures,
              pedicures, cluster eyelashes, massage therapy, facials, and comprehensive hair treatments.
            </p>
            <p>
              Beyond our exceptional beauty services, we empower aspiring beauty professionals through certified,
              beginner-friendly training courses. Our hands-on programs include starter kits and real-world practice,
              ensuring you gain practical skills and confidence to launch your own beauty career.
            </p>
            <p className="text-xl font-semibold text-charcoal italic">
              Beauty & Wellness Is Our Game — Join us on your transformation journey.
            </p>
          </div>
          <Button
            size="lg"
            className="mt-8 bg-gold text-charcoal hover:bg-gold-light hover:shadow-glow transform hover:scale-105"
            onClick={handleLearnMore}
          >
            Learn More About Us
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-gradient-subtle border-2 border-border/30 hover:border-gold/50 transition-smooth animate-slide-up hover:shadow-elegant"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center mb-4 text-emerald">
                <stat.icon size={40} strokeWidth={1.5} />
              </div>
              <div className="text-4xl font-bold mb-2 text-charcoal">{stat.value}</div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
