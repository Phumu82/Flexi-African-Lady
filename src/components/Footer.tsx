import { Facebook, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(
      "https://wa.me/27691297257?text=Hi%2C+I%27d+like+to+subscribe+to+your+newsletter.",
      "_blank"
    );
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-earth-brown text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <img src={logo} alt="Flexi African Lady" className="h-20 w-auto mb-4" />
            <p className="text-white/80 leading-relaxed">
              Empowering African beauty and wellness through professional services and certified training courses.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/Flexi African Lady"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light transition-colors hover:scale-110 transform"
                aria-label="Facebook"
              >
                <Facebook size={28} />
              </a>
              <a
                href="https://www.tiktok.com/@allaabout_beauty45"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light transition-colors hover:scale-110 transform"
                aria-label="TikTok"
              >
                <Send size={28} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-white/80 hover:text-gold transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-white/80 hover:text-gold transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("courses")}
                  className="text-white/80 hover:text-gold transition-colors"
                >
                  Training Courses
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="text-white/80 hover:text-gold transition-colors"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-white/80 hover:text-gold transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gold">Contact Info</h3>
            <ul className="space-y-3 text-white/80">
              <li>
                <span className="block font-semibold text-white">Phone:</span>
                <a href="tel:+27691297257" className="hover:text-gold transition-colors">
                  069 129 7257
                </a>
              </li>
              <li>
                <span className="block font-semibold text-white">Email:</span>
                <a href="mailto:info@flexiafricanlady.co.za" className="hover:text-gold transition-colors">
                  info@flexiafricanlady.co.za
                </a>
              </li>
              <li>
                <span className="block font-semibold text-white">Location:</span>
                Johannesburg, South Africa
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gold">Stay Updated</h3>
            <p className="text-white/80 mb-4">
              Subscribe to get updates on new services and training courses.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Your email"
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button
                type="submit"
                className="w-full bg-gold text-charcoal hover:bg-gold-light hover:shadow-glow"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60">
            © {currentYear} Flexi African Lady. All rights reserved. Beauty & Wellness Is Our Game.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
