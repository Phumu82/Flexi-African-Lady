import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "Home", id: "hero" },
    { name: "Services", id: "services" },
    { name: "Courses", id: "courses" },
    { name: "Gallery", id: "gallery" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-emerald shadow-elegant" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection("hero")}>
            <img src={logo} alt="Flexi African Lady Logo" className="h-16 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-white hover:text-gold transition-colors font-medium"
              >
                {link.name}
              </button>
            ))}
            <Button
              variant="default"
              className="bg-gold text-charcoal hover:bg-gold-light hover:shadow-glow"
              onClick={() =>
                window.open(
                  "https://wa.me/27691297257?text=Hi%2C+I%27m+interested+in+your+beauty+services+or+training+courses.",
                  "_blank"
                )
              }
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-emerald border-t border-white/10">
            <div className="flex flex-col space-y-4 py-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-white hover:text-gold transition-colors font-medium text-left px-4"
                >
                  {link.name}
                </button>
              ))}
              <div className="px-4">
                <Button
                  variant="default"
                  className="w-full bg-gold text-charcoal hover:bg-gold-light"
                  onClick={() =>
                    window.open(
                      "https://wa.me/27691297257?text=Hi%2C+I%27m+interested+in+your+beauty+services+or+training+courses.",
                      "_blank"
                    )
                  }
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
