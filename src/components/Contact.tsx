import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-gold">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Book your appointment or reach out for any inquiries
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="animate-slide-up shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl">Send us a Message</CardTitle>
              <CardDescription>We'll get back to you as soon as possible</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <Input placeholder="Your Name" className="bg-background" />
                </div>
                <div>
                  <Input type="email" placeholder="Your Email" className="bg-background" />
                </div>
                <div>
                  <Input type="tel" placeholder="Phone Number" className="bg-background" />
                </div>
                <div>
                  <Textarea placeholder="Your Message" rows={5} className="bg-background" />
                </div>
                <Button variant="default" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 animate-fade-in">
            <Card className="shadow-elegant">
              <CardContent className="flex items-start gap-4 pt-6">
                <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Visit Us</h3>
                  <p className="text-muted-foreground">
                    123 Beauty Boulevard<br />
                    City Center, State 12345
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardContent className="flex items-start gap-4 pt-6">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                  <p className="text-muted-foreground">
                    +1 (555) 123-4567<br />
                    +1 (555) 987-6543
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardContent className="flex items-start gap-4 pt-6">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                  <p className="text-muted-foreground">
                    info@flexiafricanlady.com<br />
                    booking@flexiafricanlady.com
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardContent className="flex items-start gap-4 pt-6">
                <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Opening Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Friday: 9:00 AM - 7:00 PM<br />
                    Saturday: 9:00 AM - 6:00 PM<br />
                    Sunday: 10:00 AM - 4:00 PM
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
