import col1Image from "../assets/banners/2.jpg";
import col2Image from "../assets/banners/1.jpg";
import line1 from "../assets/banners/line1.png";
import Button from "./Button";
const Banner = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 md:gap-0 gap-4 h-[400px]">
      <div className="columns-1 relative flex items-center justify-center">
        <img
          src={col1Image}
          alt=""
          className="absolute w-full h-full object-cover brightness-50 -z-10"
        />
        <div className="flex flex-col items-center gap-4 py-4">
          <span className="text-[#FFEFEC] text-[18px] font-bold font-poppins uppercase tracking-wider">
            Promotion
          </span>
          <div className="relative">
            <h3 className="text-white font-volkhov text-[50px] leading-[72px] font-bold">
              Explore Nature
            </h3>
            <img
              src={line1}
              alt=""
              className="absolute w-60 -bottom-[24px] -right-[30px] -rotate-8"
            />
          </div>
          <Button
            name={"View Packages"}
            variant="outline"
            classname="w-[150px] mt-8"
          />
        </div>
      </div>

      <div className="columns-1 relative flex items-center justify-center">
        <img
          src={col2Image}
          alt=""
          className="absolute w-full h-full object-cover brightness-50 -z-10"
        />
        <div className="flex flex-col items-center gap-4">
          <span className="text-[#FFEFEC] text-[18px] font-bold font-poppins uppercase tracking-wider">
            Promotion
          </span>
          <div className="relative">
            <h3 className="text-white font-volkhov text-[50px] leading-[72px] font-bold">
              Explore Cities
            </h3>
            <img
              src={line1}
              alt=""
              className="absolute w-60 -bottom-[24px] -right-[30px] -rotate-8"
            />
          </div>
          <Button
            name={"View Packages"}
            variant="outline"
            classname="w-[150px] mt-8"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
