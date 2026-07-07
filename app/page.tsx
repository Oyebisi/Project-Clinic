import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import SampleTopicsSection from '@/components/SampleTopicsSection';
import WhySection from '@/components/WhySection';

export default function HomePage() {
  return (
    <main className="bg-[#FFFFFF] text-[#333333]">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SampleTopicsSection />
      <WhySection />
      <ContactSection />
      <Footer />
    </main>
  );
}
