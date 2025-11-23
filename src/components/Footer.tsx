import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Flexi African Lady</h3>
            <p className="text-background/80 mb-4">
              Your premier destination for natural hair care and luxurious beauty treatments.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-smooth"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-primary-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/90 transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-secondary-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-accent/90 transition-smooth"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-accent-foreground" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="#" className="hover:text-primary transition-smooth">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-smooth">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-smooth">
                  Book Appointment
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-smooth">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-background/80 mb-4">
              Subscribe to get special offers and beauty tips
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/50 focus:outline-none focus:border-primary"
              />
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-smooth">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/70">
          <p>&copy; {new Date().getFullYear()} Flexi African Lady. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
