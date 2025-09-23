import Button from "./Button";
import img1 from "../assets/views/views1.svg";
import img2 from "../assets/views/views4.png";
import img3 from "../assets/views/views3.png";
import img4 from "../assets/views/views4.png";
import innerImage from "../assets/views/eifeltower.svg";
import bg from "../assets/packages/bg.svg";
import image0 from "../assets/packages/0.jpg";
import image1 from "../assets/packages/1.jpg";
import image2 from "../assets/packages/2.jpg";
import Section from "./Section";

const Views = () => {
  return (
    <Section classname="flex gap-8 relative w-full justify-between">
      <div className="flex flex-col flex-1 gap-8 w-full ">
        <div className="flex flex-col gap-[20px] jutify-center h-full justify-center">
          <span className="font-semibold font-poppins text-[18px] text-primary uppercase">
            Promotion
          </span>
          <h2 className="text-[#181E4B] font-volkhov font-bold md:text-[50px] text-[30px] capitalize md:leading-[50px] leading-[30px]">
            We Provide You Best <br /> Europe Sightseeing Tours
          </h2>
          <p className="text-[16px] text-black font-poppins md:w-[580px] xl:w-[590px]">
            Et labore harum non nobis ipsum eum molestias mollitia et corporis
            praesentium a laudantium internos. Non quis eius quo eligendi
            corrupti <br/> et fugiat nulla qui soluta recusandae in maxime quasi aut
            ducimus <br />illum aut optio quibusdam!
          </p>
          <Button name={"View Packages"} classname="w-fit" />
        </div>
        <div className="2xl:w-[1200px] xl:w-[950px] lg:w-[850px] md:w-[700px] w-[350px] grid 2xl:grid-cols-4 md:grid-cols-4 grid-cols-1 lg:gap-10 gap-4">
          <div className="relative col-span-1 rounded-[10px] overflow-hidden">
            <img
              src={img1}
              alt=""
              className="w-full h-full object-cover -z-10"
            />
            <div className="flex items-center justify-center px-2 py-1 button-gradient absolute top-4 right-2 text-white rounded-full font-poppins text-[16px] font-light">
              <p>$700</p>
            </div>
          </div>
          <div className="relative col-span-1 rounded-[10px] overflow-hidden">
            <img
              src={img2}
              alt=""
              className="w-full h-full object-cover -z-10"
            />
            <div className="flex items-center justify-center px-2 py-1 button-gradient absolute top-4 right-2 text-white rounded-full font-poppins text-[16px] font-light">
              <p>$800</p>
            </div>
          </div>
          <div className="relative col-span-1 rounded-[10px] overflow-hidden">
            <img
              src={img3}
              alt=""
              className="w-full h-full object-cover -z-10"
            />
            <div className="flex items-center justify-center px-2 py-1 button-gradient absolute top-4 right-2 text-white rounded-full font-poppins text-[16px] font-light">
              <p>$500</p>
            </div>
          </div>
          <div className="relative col-span-1 rounded-[10px] overflow-hidden">
            <img
              src={img4}
              alt=""
              className="w-full h-full object-cover -z-10"
            />
            <div className="flex items-center justify-center px-2 py-1 button-gradient absolute top-4 right-2 text-white rounded-full font-poppins text-[16px] font-light">
              <p>$400</p>
            </div>
          </div>
        </div>
      </div>
      <div className="2xl:block absolute transform xl:right-[200px] hidden -z-10">
        <div className="w-[400px] relative -z-10">
          <div className="-z-10 -left-[14px] h-[610px] w-[350px] rounded-t-full border-2 border-[#a7327a] absolute bottom-0 "></div>
          <img
            src={innerImage}
            alt=""
            className="h-[600px] w-[350px] rounded-t-full object-cover"
          />
          <h3 className="font-poppins text-[40px] font-bold text-black opacity-10 absolute w-fit -right-[190px] bottom-[180px] transform -rotate-90">
            Breath Taking Views
          </h3>
        </div>
      </div>
    </Section>
  );
};

export default Views;