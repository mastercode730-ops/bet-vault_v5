import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import Features from '@/components/Features';
import Steps from '@/components/Steps';
import Markets from '@/components/Markets';
import Story from '@/components/Story';
import Blog from '@/components/Blog';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustStrip />
      <Features />
      <Steps />
      <Markets />
      <Story />
      <Blog />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
