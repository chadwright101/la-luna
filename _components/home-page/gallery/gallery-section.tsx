import LayoutWrapper from "@/_lib/utils/layout-wrapper";
import GallerySlider from "./gallery-slider";

import galleryData from "@/_data/general-data.json";
import SectionHeading from "@/_lib/utils/section-heading";

const { gallerySlider } = galleryData;

const GallerySection = () => {
  return (
    <section>
      <LayoutWrapper cssClasses="overflow-hidden">
        <SectionHeading cssClasses="mb-7">Gallery</SectionHeading>
        <GallerySlider data={gallerySlider} />
      </LayoutWrapper>
    </section>
  );
};

export default GallerySection;
