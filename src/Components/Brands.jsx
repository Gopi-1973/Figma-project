import logo1 from "../assets/brands/1.svg";
import logo2 from "../assets/brands/3.svg";
import logo3 from "../assets/brands/1.svg";
import logo4 from "../assets/brands/3.svg";
import logo5 from "../assets/brands/1.svg";
import { useEffect, useState } from "react";


const Brands = () => {
  const [currentIndex,setCurrentIndex]= useState(0);
  const arr = [logo1,logo2,logo3,logo4,logo5];

  const Right = ()=>{
    setCurrentIndex((prevValue)=>(prevValue +1)% arr.length);
  };

  useEffect(()=>{
    const interval=setInterval(()=>{Right();},1000);
    return () => clearInterval(interval);
  },[]);

  return (
     <div className="container mx-auto p-4 overflow-hidden">
     <div className="flex gap-60 transition-transform duration-500 ease-in-out" style={{transform:`translateX(-${currentIndex * 200}px)`}}>
      {arr.map((logo,index)=>(
        <div key={index} className="flex-shrink-0  w-[200px] h-auto ">
         <img src={logo} alt={`Brand ${index + 1}`} className="w-full h-auto object-contain" />
        </div>
      ))}
     </div>
    </div>
  );
};

export default Brands;
