import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import WhenToCall from "@/components/WhenToCall";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Stats />
        <About />
        <WhyChooseUs />
        <WhenToCall />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
}
