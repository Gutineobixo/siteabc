import Header from "@/components/header";
import Hero from "@/components/hero";
import ProfessionalProfile from "@/components/professional-profile";
import Services from "@/components/services";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ProfessionalProfile />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
