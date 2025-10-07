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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
              reprehenderit dolorum, quisquam minima autem ad tenetur optio
              dolor eaque placeat molestiae laboriosam labore architecto
              doloremque eius recusandae dignissimos, voluptas odio laudantium!
              Eaque deleniti laudantium doloribus dolore enim.
            </p>
            <p>
              Neque in atque, sed expedita voluptatem error labore fuga
              similique, magni, porro libero deserunt magnam perferendis. Eaque
              illo soluta eligendi at exercitationem! Error obcaecati neque
              accusantium corporis modi ipsa, excepturi voluptate molestias sunt
              fuga cupiditate omnis sequi repellendus quisquam.
            </p>
          </div>
        </div>
        <div className="grid gap-10 min-[600px]:grid-cols-2 desktop:grid-cols-3">
          <Image
            src="/images/la-luna-boutique-image-20.jpg"
            alt="La Luna Boutique - Plettenberg Bay"
            width={800}
            height={600}
            sizes="(max-width: 800px) 100vw, 33vw"
            className="h-full w-full object-cover aspect-square"
          />
          <Image
            src="/images/la-luna-boutique-image-19.jpg"
            alt="La Luna Boutique - Plettenberg Bay"
            width={800}
            height={600}
            sizes="(max-width: 800px) 100vw, 33vw"
            className="h-full w-full object-cover aspect-square"
          />
          <Image
            src="/images/la-luna-boutique-image-12.jpg"
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
