import { GraduationCap, Clock, DollarSign, Award, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import clusterLashesImg from "@/assets/courses/cluster-lashes.jpg";
import acrylicNailsImg from "@/assets/courses/acrylic-nails.jpg";
import gelPolishImg from "@/assets/courses/gel-polish.jpg";
import massageTherapyImg from "@/assets/courses/massage-therapy.jpg";

const courses = [
  {
    title: "Cluster Eyelashes Course",
    duration: "1 Week",
    price: "R1,200",
    level: "Beginner",
    description: "Quick yet thorough training in cluster eyelash application for natural and dramatic looks. Perfect for beginners wanting to master lash artistry.",
    image: clusterLashesImg,
    includes: [
      "Starter kit with all tools",
      "Hands-on practical training",
      "Certificate of completion",
      "Lash application techniques",
      "Client consultation skills"
    ]
  },
  {
    title: "Acrylic Nails Course",
    duration: "2 Weeks",
    price: "R1,800",
    level: "Beginner",
    description: "Master the art of acrylic nail application, shaping, and design. Comprehensive training covering all aspects of acrylic nail artistry.",
    image: acrylicNailsImg,
    includes: [
      "Starter kit included",
      "Nail prep training",
      "Tips & acrylic application",
      "Gel overlay techniques",
      "Nail art basics",
      "Certificate of completion"
    ]
  },
  {
    title: "Gel Polish Course",
    duration: "2 Weeks",
    price: "R1,500",
    level: "Beginner",
    description: "Learn professional gel polish application, nail prep, and creative designs. Perfect foundation for starting your nail career.",
    image: gelPolishImg,
    includes: [
      "Starter kit included",
      "Nail prep techniques",
      "Application of gel polish",
      "Nail art basics",
      "UV lamp training",
      "Certificate of completion"
    ]
  },
  {
    title: "Massage Therapy Course (Swedish & Aromatherapy)",
    duration: "2 Weeks",
    price: "R2,000",
    level: "Beginner",
    description: "Comprehensive massage therapy training covering Swedish techniques and aromatherapy principles for wellness professionals.",
    image: massageTherapyImg,
    includes: [
      "Practical techniques training",
      "Theory of massage",
      "Aromatherapy basics",
      "Oils & tools introduction",
      "Body mechanics & safety",
      "Certificate of completion"
    ]
  },
];

const CoursesPage = () => {
  const handleEnroll = () => {
    window.open(
      "https://wa.me/27691297257?text=Hi%2C+I%27m+interested+in+enrolling+in+your+training+courses.",
      "_blank"
    );
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-gold text-charcoal text-base px-6 py-2 mb-6">
            Certified Training Programs
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-charcoal">
            Flexi African Lady — Course Pricing
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Transform your passion into a profession with our hands-on training courses. 
            Each program includes a starter kit, certificate, and real-world practice.
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            {courses.map((course, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-elegant transition-smooth animate-slide-up border-2 border-border/50 hover:border-gold/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Course Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-hero opacity-30" />
                  <Badge 
                    variant="secondary" 
                    className="absolute top-4 right-4 bg-emerald text-white"
                  >
                    {course.level}
                  </Badge>
                </div>

                <CardHeader className="border-b border-border/30 bg-gradient-subtle">
                  <div className="flex items-start justify-between mb-3">
                    <div className="text-emerald group-hover:text-gold transition-colors">
                      <GraduationCap size={40} strokeWidth={1.5} />
                    </div>
                  </div>
                  <CardTitle className="text-2xl text-charcoal mb-3">
                    {course.title}
                  </CardTitle>
                  
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock size={16} />
                      <span className="font-semibold">{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-emerald font-bold text-lg">
                      <DollarSign size={18} />
                      <span>{course.price}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {course.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-charcoal flex items-center gap-2">
                      <Award size={18} className="text-gold" />
                      Includes:
                    </h4>
                    {course.includes.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check size={16} className="text-gold mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
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

          {/* CTA Section */}
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

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CoursesPage;
