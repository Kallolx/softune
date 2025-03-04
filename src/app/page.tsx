import Hero from "@/app/landing/Hero";
import Services from "@/app/landing/Services";
import Expertise from "@/app/landing/Expertise";
import About from '@/app/landing/About';
import Testimonials from '@/app/landing/Testimonials';
import Portfolio from '@/app/landing/Portfolio';
import CallToAction from '@/app/landing/CallToAction';
export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFF8E7]">
      <Hero />
      <Services />
      <Expertise />
      <About />
      <Testimonials />
      <Portfolio />
      <CallToAction />
    </div>
  );
}
