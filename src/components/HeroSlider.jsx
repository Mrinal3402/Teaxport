import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Parallax,Autoplay, EffectFade ,Mousewheel, Keyboard} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    id: 1,
    title: "Setting New Standards in Apparel Exports",
    description:
      "Crafting quality apparel with a commitment to ethical practices and sustainability since 1978.",
    image: "./images/LandingPage/A.png", // Update with actual image path
  },
  {
    id: 2,
    title: "Our Initiatives",
    description:
      "We believe in living in harmony with the environment and play a vital role in championing the cause.",
    image: "./images/LandingPage/B.png", // Update with actual image path
  },
  {
    id: 3,
    title: "Your Partner since 1978",
    description:
      "Texport is a well-recognized business in the apparel industry, among the top exports from India.",
    image: "./images/LandingPage/C.png", // Update with actual image path
  },
];

const HeroSlider = () => {
  return (
    <Swiper
      modules={[Navigation,Parallax,Pagination, Autoplay, EffectFade, Keyboard]}
      spaceBetween={0}
      slidesPerView={1}
      effect="fade"
      keyboard={{ enabled: true }}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
      
      className="w-[100vw] h-[70vh]"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div
            className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-zinc-700 opacity-40"></div>
            <div className="flex flex-col md:flex md:flex-col justify-center    items-center px-5  top-[25%] md:w-full z-20 absolute text-white">
              <h2 className="text-3xl  text-center font-custom font-normal mb-3">{slide.title}</h2>
              <p className="mt-2 text-center">{slide.description}</p>
              
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
