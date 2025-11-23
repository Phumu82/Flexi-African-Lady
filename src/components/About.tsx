import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-gold">
                Welcome to Flexi African Lady
              </h2>
              <p className="text-lg text-foreground mb-6">
                A premium beauty sanctuary dedicated to celebrating the natural beauty of African hair and skin. 
                Our expert stylists and therapists bring years of experience and passion to every treatment.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We specialize in natural hair care, protective styling, and luxurious spa treatments that honor 
                and enhance your natural beauty. Every service is personalized to meet your unique needs.
              </p>
              <Button variant="default" size="lg">
                Learn More
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4 animate-fade-in">
              <div className="bg-card p-6 rounded-lg shadow-elegant border border-border">
                <h3 className="text-3xl font-bold text-primary mb-2">10+</h3>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-elegant border border-border">
                <h3 className="text-3xl font-bold text-secondary mb-2">500+</h3>
                <p className="text-muted-foreground">Happy Clients</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-elegant border border-border">
                <h3 className="text-3xl font-bold text-accent mb-2">5</h3>
                <p className="text-muted-foreground">Premium Services</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-elegant border border-border">
                <h3 className="text-3xl font-bold text-primary mb-2">100%</h3>
                <p className="text-muted-foreground">Natural Products</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
