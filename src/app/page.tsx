import Hero from "@/landing/Hero";
import Services from "@/landing/Services";
import Expertise from "@/landing/Expertise";
import About from '@/landing/About';
import Testimonials from '@/landing/Testimonials';
import Portfolio from '@/landing/Portfolio';
import CallToAction from '@/landing/CallToAction';
import FAQ from '@/landing/FAQ';
import Pricing from '@/landing/Pricing';

export default function Home() {
  return (
    <div 
      className="min-h-screen relative"
      style={{
        backgroundImage: 'url("/branding/background.jpg")',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-[#FFF8E7]/50"></div>
      <div className="relative">
        <Hero />
        <Services />
        <Expertise />
        <About />
        <Pricing />
        <Testimonials />
        <Portfolio />
        <CallToAction />
        <FAQ />
      </div>
    </div>
  );
}
