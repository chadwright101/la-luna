import AboutUsComponent from "@/_components/home-page/about-us-component";
import ContactComponent from "@/_components/home-page/contact/contact-component";
import GallerySection from "@/_components/home-page/gallery/gallery-section";
import HeroComponent from "@/_components/home-page/hero/hero-component";

export default function HomePage() {
  return (
    <div className="space-y-10 overflow-hidden">
      <HeroComponent />
      <div id="about" className="-translate-y-24 desktop:-translate-y-32" />
      <AboutUsComponent />
      <div id="gallery" className="-translate-y-24 desktop:-translate-y-32" />
      <GallerySection />
      <div id="contact" className="-translate-y-24 desktop:-translate-y-32" />
      <ContactComponent />
    </div>
  );
}
