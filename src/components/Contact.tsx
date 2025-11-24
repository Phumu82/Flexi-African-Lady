import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    content: "Johannesburg, South Africa",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "069 129 7257",
  },
  {
    icon: Mail,
    title: "Email Us",
    content: "info@flexiafricanlady.co.za",
  },
  {
    icon: Clock,
    title: "Opening Hours",
    content: "Mon - Sat: 9:00 AM - 6:00 PM\nSunday: By Appointment",
  },
];

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(
      "https://wa.me/27691297257?text=Hi%2C+I%27d+like+to+get+in+touch+with+you.",
      "_blank"
    );
  };

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-charcoal">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about our services or training courses? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-2 border-border/50 shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl text-charcoal">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input placeholder="Your Name" required className="border-border/50" />
                </div>
                <div>
                  <Input type="email" placeholder="Your Email" required className="border-border/50" />
                </div>
                <div>
                  <Input type="tel" placeholder="Phone Number" className="border-border/50" />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    required
                    rows={5}
                    className="border-border/50 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-emerald text-white hover:bg-emerald-light hover:shadow-glow"
                >
                  Send Message via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="border-2 border-border/50 hover:border-gold/50 transition-smooth hover:shadow-elegant"
              >
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="text-emerald mt-1">
                    <info.icon size={32} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-charcoal">{info.title}</h3>
                    <p className="text-muted-foreground whitespace-pre-line">{info.content}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
