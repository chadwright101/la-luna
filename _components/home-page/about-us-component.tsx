import LayoutWrapper from "@/_lib/utils/layout-wrapper";
import SectionHeading from "@/_lib/utils/section-heading";
import Image from "next/image";

const AboutUsComponent = () => {
  return (
    <main>
      <LayoutWrapper cssClasses="grid gap-10 desktop:grid-cols-[440px_1fr]">
        <div>
          <SectionHeading cssClasses="mb-7">About Us</SectionHeading>
          <div className="grid gap-4">
            <p>
              Nestled in the heart of Plettenberg Bay, La Luna Boutique is a
              charming destination for exquisite swimwear, lingerie, and
              leisurewear. We proudly curate a collection of imported fashion
              from style capitals such as Germany, Italy, and Australia,
              alongside beautifully crafted garments made right here in South
              Africa.
            </p>
            <p>
              At La Luna, we believe elegance and glamour should be part of
              everyday life. Whether you're preparing for a sun-kissed beach
              outing or a relaxed moonlit dinner with loved ones, our versatile
              range is designed to make every moment feel special.
            </p>
            <p>
              We welcome you to experience the warmth of our boutique — with
              every piece telling a story of beauty, comfort, and effortless
              style.
            </p>
          </div>
        </div>
        <div className="grid gap-10 min-[600px]:grid-cols-2 desktop:grid-cols-3">
          <Image
            src="/images/la-luna-boutique-gallery-image-19.jpg"
            alt="La Luna Boutique - Plettenberg Bay"
            width={800}
            height={600}
            sizes="(max-width: 800px) 100vw, 33vw"
            className="h-full w-full object-cover aspect-square"
          />
          <Image
            src="/images/la-luna-boutique-gallery-image-18.jpg"
            alt="La Luna Boutique - Plettenberg Bay"
            width={800}
            height={600}
            sizes="(max-width: 800px) 100vw, 33vw"
            className="h-full w-full object-cover aspect-square"
          />
          <Image
            src="/images/la-luna-boutique-gallery-image-4.jpg"
            alt="La Luna Boutique - Plettenberg Bay"
            width={800}
            height={600}
            sizes="(max-width: 800px) 100vw, 33vw"
            className="hidden desktop:block h-full w-full object-cover"
          />
        </div>
      </LayoutWrapper>
    </main>
  );
};

export default AboutUsComponent;
