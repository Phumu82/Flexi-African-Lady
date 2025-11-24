import { GraduationCap, Clock, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const courses = [
  {
    title: "Acrylic Nails",
    duration: "2 weeks",
    level: "Beginner",
    description: "Master the art of acrylic nail application, shaping, and design. Includes starter kit and hands-on practice.",
    highlights: ["Starter kit included", "Certificate upon completion", "Hands-on training"],
  },
  {
    title: "Gel Polish Nails",
    duration: "2 weeks",
    level: "Beginner",
    description: "Learn professional gel polish application, nail prep, and creative designs. Perfect for beginners.",
    highlights: ["Starter kit included", "Certificate upon completion", "Real client practice"],
  },
  {
    title: "Swedish & Aroma Massage",
    duration: "2 weeks",
    level: "Beginner",
    description: "Comprehensive massage therapy training covering Swedish techniques and aromatherapy principles.",
    highlights: ["Massage kit included", "Certificate upon completion", "Anatomy & techniques"],
  },
  {
    title: "Cluster Eyelashes",
    duration: "1 week",
    level: "Beginner",
    description: "Quick yet thorough training in cluster eyelash application for natural and dramatic looks.",
    highlights: ["Lash kit included", "Certificate upon completion", "Application mastery"],
  },
];

const Courses = () => {
  const handleEnroll = () => {
    window.open(
      "https://wa.me/27691297257?text=Hi%2C+I%27m+interested+in+enrolling+in+your+training+courses.",
      "_blank"
    );
  };

  return (
    <section id="courses" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-block mb-4">
            <Badge className="bg-gold text-charcoal text-base px-4 py-2">
              Certified Training Programs
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-charcoal">
            Beginner-Friendly Beauty Courses
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transform your passion into a profession with our hands-on training courses. 
            Each program includes a starter kit, certificate, and real-world practice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {courses.map((course, index) => (
            <Card
              key={index}
              className="group hover:shadow-elegant transition-smooth animate-slide-up border-2 border-border/50 hover:border-gold/50 bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="border-b border-border/30 bg-gradient-subtle">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-emerald group-hover:text-gold transition-colors">
                    <GraduationCap size={40} strokeWidth={1.5} />
                  </div>
                  <Badge variant="secondary" className="bg-emerald text-white">
                    {course.level}
                  </Badge>
                </div>
                <CardTitle className="text-2xl text-charcoal mb-2">{course.title}</CardTitle>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock size={16} />
                  <span className="font-semibold">{course.duration}</span>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {course.description}
                </p>
                <div className="space-y-2 mb-6">
                  {course.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-charcoal">
                      <Award size={16} className="text-gold" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
                <Button
                  className="w-full bg-gold text-charcoal hover:bg-gold-light hover:shadow-glow transform hover:scale-105"
                  onClick={handleEnroll}
                >
                  Enroll Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center bg-emerald/10 border-2 border-emerald/20 rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-charcoal">
            Ready to Start Your Beauty Career?
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join our beginner-friendly courses and gain practical skills, confidence, and certification. 
            Start your beauty journey with confidence — beauty and wellness is our game.
          </p>
          <Button
            size="lg"
            className="bg-emerald text-white hover:bg-emerald-light hover:shadow-glow"
            onClick={handleEnroll}
          >
            Contact Us About Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
