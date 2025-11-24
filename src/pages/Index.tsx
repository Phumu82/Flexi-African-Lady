import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeatureOverview from "@/components/FeatureOverview";
import Services from "@/components/Services";
import Courses from "@/components/Courses";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <FeatureOverview />
      <Services />
      <Courses />
      <Gallery />
      <About />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
