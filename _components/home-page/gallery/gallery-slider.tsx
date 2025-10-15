"use client";

import Image from "next/image";
import { SetStateAction, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

interface Props {
  cssClasses?: string;
  data: string[];
}

const GallerySlider = ({ cssClasses, data }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (swiper: {
    activeIndex: SetStateAction<number>;
  }) => {
    setCurrentIndex(swiper.activeIndex);
  };

  return (
    <Swiper
      onSlideChange={handleSlideChange}
      speed={1000}
      autoplay={{
        delay: 5000,
        disableOnInteraction: true,
      }}
      modules={[Navigation, Pagination, Autoplay]}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      pagination={{
        dynamicBullets: true,
      }}
      loop
      slidesPerGroup={1}
      className={cssClasses}
      slidesPerView={1}
      spaceBetween={20}
      style={
        {
          "--swiper-pagination-color": "#FCAFDB",
          "--swiper-pagination-bullet-inactive-color": "#FCAFDB",
          "--swiper-pagination-bullet-inactive-opacity": "0.8",
        } as React.CSSProperties
      }
      breakpoints={{
        1280: {
          spaceBetween: 40,
          slidesPerView: 4,
        },
        900: {
          slidesPerView: 3,
        },
        600: {
          slidesPerView: 2,
        },
      }}
    >
      {data.map((src, index) => (
        <SwiperSlide key={index} className="mb-7 aspect-[2.75/4] desktop:mb-8">
          <Image
            src={src}
            alt={`La Luna Boutique - Image ${index + 1}`}
            width={500}
            height={360}
            className="w-full h-full object-cover"
            loading="eager"
          />
        </SwiperSlide>
      ))}
      <button
        className="hidden desktop:grid place-items-center z-10 swiper-button-prev absolute translate-y-1/3 bottom-1/2 left-8 cursor-pointer hover:opacity-90 ease-in-out duration-300 w-12 h-12 bg-white/90 rounded-full"
        aria-label="Show previous image"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="9"
          height="12"
          viewBox="0 0 9 12"
          fill="none"
          className="size-5"
        >
          <path
            d="M7.29406 12L0.5 6L7.29406 0L8.5 1.065L2.91189 6L8.5 10.935L7.29406 12Z"
            fill="#FCAFDB"
          />
        </svg>
      </button>
      <button
        className="hidden desktop:grid place-items-center z-10 swiper-button-next absolute translate-y-1/3 bottom-1/2 right-8 cursor-pointer hover:opacity-90 ease-in-out duration-300 w-12 h-12 bg-white/90 rounded-full"
        aria-label="Show next image"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fill="none"
          className="size-5"
        >
          <path
            d="M1.5552 0.0552258L7.5 6.00003L1.5552 11.9448L0.499999 10.8896L5.3896 6.00003L0.5 1.11043L1.5552 0.0552258Z"
            fill="#FCAFDB"
          />
        </svg>
      </button>
    </Swiper>
  );
};

export default GallerySlider;
