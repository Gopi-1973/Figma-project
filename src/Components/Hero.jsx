import heroImage from "../assets/hero2.jpg";
import Nav from './Nav'
import curve from "../assets/curve.svg";
import Button from "./Button";
import Circle from "./Circle";
import BottomCircle from "./BottomCircle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useState } from "react";

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="max-h-screen w-full relative overflow-hidden">
      <Swiper
        slidesPerView={1}
        loop
        autoplay={{ delay: 5000 }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <img
            src={heroImage}
            className=" min-h-screen w-full object-cover brightness-50"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={heroImage}
            className="min-h-screen w-full object-cover brightness-50"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={heroImage}
            className="min-h-screen w-full object-cover brightness-50"
          />
        </SwiperSlide>
      </Swiper>

      <div className="flex items-center justify-center gap-4 absolute transform bottom-10 left-1/2 -translate-x-1/2 z-20">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className={`h-[5px] w-[100px] rounded-full ${
              activeIndex == index ? "bg-primary" : "bg-white"
            }`}
          />
        ))}
      </div>
      <div className="flex flex-col gap-4 absolute z-10 transform top-1/2 -translate-y-1/2 xl:pl-[200px] lg:pl-[80px] px-[30px] mt-34">
        <img src={curve} alt="" className="w-[80px]" />
        <h1 className="font-poppins w-full max-w-[300px] lg:w-full lg:max-w-[631px] lg:text-[58px] text-[32px] font-bold text-white lg:leading-[70px]">
          No matter where you’re going to, we’ll take you there
        </h1>
        <form className="flex md:flex-row  flex-col items-center lg:justify-between justify-center gap-3 px-3 py-2 bg-[#F3f3f3]/60 rounded-[6px] backdrop-blur-[18px] lg:h-[80px] ">
          <input
            type="text"
            name="place"
            id="place"
            placeholder="Where to?"
            className="text-white placeholder:text-white text-[18px] font-poppins md:w-[130px] lg:focus:border-r-2 outline-0 md:border-r-2 md:text-center text-left border-b-2 w-full py-2"
          />
          <input
            type="text"
            name="travelType"
            id="travelType"
            placeholder="Travel Type"
            className="text-white placeholder:text-white text-[18px] font-poppins lg:w-[130px] lg:focus:border-r-2 outline-0 md:border-r-2 md:text-center text-left border-b-2 w-full py-2"
          />
          <input
            type="text"
            name="duration"
            id="duration"
            placeholder="Duration"
            className="text-white placeholder:text-white text-[18px] font-poppins md:w-[130px] focus:border-r-2 outline-0 md:border-r-2 md:text-center text-left border-b-2 w-full py-2"
          />
          <Button name={"Submit"} classname="px-6 w-full" />
        </form>
        <div className="flex items-center h-fit">
          <div className="flex items-center w-[200px] relative h-[40px]">
            <Circle />
            <Circle classname={"left-[20px] z-10"} />
            <Circle classname={"left-[40px] z-10"} />
            <Circle classname={"left-[60px] z-10"} />
            <Circle classname={"left-[80px] z-10"} />
            <Circle classname={"left-[100px] z-10"} />
            <Circle variant={"none"} classname={"left-[120px] z-10"} />
          </div>
          <p className="text-white flex items-center h-full font-poppins text-[13px] font-medium">
            2,500 people booked Tommorowland Event in last 24 hours
          </p>
        </div>
      </div>
      <BottomCircle />
    </div>
  );
};
export default Hero;