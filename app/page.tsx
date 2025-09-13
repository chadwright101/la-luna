import AboutUsComponent from "@/_components/home-page/about-us-component";
import GallerySection from "@/_components/home-page/gallery/gallery-section";
import HeroComponent from "@/_components/home-page/hero/hero-component";

export default function HomePage() {
  return (
    <div className="space-y-10 overflow-hidden">
      <HeroComponent />
      <AboutUsComponent />
      <GallerySection />
    </div>
  );
}
