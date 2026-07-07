import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

const Slider = () => {
  return (
    <>
    <Swiper
      spaceBetween={30}
      effect={'fade'}
      loop={true} // Enables infinite loop
      autoplay={{
        delay: 4000, // 3-second delay
        disableOnInteraction: false, // Keeps autoplay running after interaction
      }}
      
      pagination={{ clickable: true }}
      modules={[EffectFade, Navigation, Pagination, Autoplay]}
      className="mySwiper w-full xs:h-32 md:h-96 lg:h-[500px]"
    >
      <SwiperSlide className="bg-center bg-cover  bg-purple-400">
        <img className="block w-full absolute -bottom-20" src="/semple.jpg" />
      </SwiperSlide>
      <SwiperSlide className="bg-center bg-cover bg-green-300">
        <img className="block w-full absolute -bottom-20 " src="/semple2.jpg" />
      </SwiperSlide>
      <SwiperSlide className="bg-center bg-cover bg-green-300">
        <img className="block w-full  absolute -bottom-20" src="/semple3.jpg" />
      </SwiperSlide>
      <SwiperSlide className="bg-center bg-cover bg-green-300">
        <img className="block w-full  absolute -bottom-20" src="/semple2.jpg" />
      </SwiperSlide>
      
    </Swiper>

    <style>
        {`
          .swiper-pagination-bullet {
          border: 1px black solid;
            background: transparent !important; /* Change bullet color */
            width: 8px !important;
            height: 8px !important;
            opacity: 0.8 !important;
          }

          .swiper-pagination-bullet-active {
            background: white !important; /* Active bullet color */
            width: 8px !important;
            height: 8px !important;
          }
        `}
      </style>
    </>
  );
};

export default Slider;
