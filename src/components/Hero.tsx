import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-beauty-spa.jpg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/services");
  };

  const handleViewCourses = () => {
    navigate("/courses");
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxurious African-inspired beauty and wellness sanctuary"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">
          Flexi African Lady
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-white/95 max-w-3xl mx-auto drop-shadow-md">
          Professional beauty services and hands-on training designed to
          transform your skills and confidence.
        </p>

        <p className="text-lg md:text-xl mb-10 text-white/90 max-w-2xl mx-auto drop-shadow-md italic">
          Beauty & Wellness Is Our Game
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="default"
            size="lg"
            className="min-w-48 bg-gold text-charcoal hover:bg-gold-light hover:shadow-glow transform hover:scale-105"
            onClick={handleBookNow}
          >
            Book an Appointment
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="min-w-48 bg-white/20 backdrop-blur-sm border-white/50 text-white hover:bg-white/30 hover:border-white"
            onClick={handleViewCourses}
          >
            View Training Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
