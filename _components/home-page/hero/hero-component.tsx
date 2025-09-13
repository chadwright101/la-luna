import HeroSlider from "@/_components/home-page/hero/hero-slider";

import data from "@/_data/general-data.json";

const { heroSlider } = data;

const HeroComponent = () => {
  return (
    <section className="max-w-[1280px] mx-auto relative">
      <HeroSlider
        data={heroSlider}
        cssClasses="h-[500px] tablet:h-[550px] desktop:h-[600px]"
      />
      <h1 className="absolute top-1/2 left-1/2 -translate-y-[55%] -translate-x-1/2 z-10 flex flex-col leading-[90%] max-w-[215px] text-center px-5 py-10 bg-white/95 rounded-[2px] text-[68px] font-thin uppercase tablet:text-[100px] tablet:max-w-[320px]">
        La Luna
        <span className="text-[33.5px] pb-3 leading-[100%] font-thin border-b border-pink/25 tablet:text-[49px]">
          Boutique
        </span>
        <span className="text-[20px] font-thin pt-3 leading-[100%] normal-case tablet:text-[24px]">
          Plettenberg Bay
        </span>
      </h1>
    </section>
  );
};

export default HeroComponent;
