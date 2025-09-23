import ServicesCard from "./ServicesCard";
import image1 from '../assets/services/1.png';
import image2 from '../assets/services/2.png';
import image3 from '../assets/services/3.png';
import image4 from '../assets/services/4.png';
import Section from "./Section";

const Services = () => {
  return (
    <Section classname="flex flex-col items-center gap-[20px] overflow-hidden w-full">
      <span className="font-semibold font-poppins md:text-[18px] text-[16px] text-primary uppercase mt-8">
        Category
      </span>
      <h2 className="text-[#181E4B] font-volkhov font-bold md:text-[50px] sm:text-[30px] text-[20px] text-center capitalize md:leading-[50px] leading-[20px]">
        We Offer Best Services
      </h2>
      {/* Services Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-6  mt-4 ">
        <ServicesCard
          img={image1}
          title={"Guided Tours"}
          desc={"sunt qui repellat saepe quo velit aperiam id aliquam placeat."}
        />
        <ServicesCard
          img={image2}
          title={"Best Flights Options"}
          type={2}
          desc={"sunt qui repellat saepe quo velit aperiam id aliquam placeat."}
        />
        <ServicesCard
          img={image3}
          title={"Religious Tours"}
          desc={"sunt qui repellat saepe quo velit aperiam id aliquam placeat."}
        />
        <ServicesCard
          img={image4}
          title={"Medical Insurance"}
          desc={"sunt qui repellat saepe quo velit aperiam id aliquam placeat."}
        />
      </div>
    </Section>
  );
};

export default Services;