import Navbar from '../../HomeStay/src/components/Navbar';
import HeroSection from '../../HomeStay/src/components/HeroSection';
import AboutSection from '../../HomeStay/src/components/AboutSection';
import RoomSection from '../../HomeStay/src/components/RoomSection';
import GallerySection from '../../HomeStay/src/components/GallerySection';
import Testimonials from '../../HomeStay/src/components/Testimonials';
import BookingSection from '../../HomeStay/src/components/BookingSection';
import Footer from '../../HomeStay/src/components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <AboutSection />
        <RoomSection />
        <GallerySection />
        <Testimonials />
        <BookingSection />
      </main>
      <Footer />
    </>
  );
}
