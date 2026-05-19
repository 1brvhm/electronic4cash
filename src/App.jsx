import Navbar          from './components/Navbar';
import Hero            from './components/Hero';
import DeviceCategories from './components/DeviceCategories';
import HowItWorks      from './components/HowItWorks';
import WhyChooseUs     from './components/WhyChooseUs';
import ContactVideo    from './components/ContactVideo';
import Testimonials    from './components/Testimonials';
import FAQ             from './components/FAQ';
import CTABanner       from './components/CTABanner';
import Footer          from './components/Footer';

export default function App() {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <CTABanner />
        <ContactVideo />
        <Testimonials />
        <WhyChooseUs />
        <DeviceCategories />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
