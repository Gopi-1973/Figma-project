import logo1 from "../assets/brands/1.svg";
import logo3 from "../assets/brands/3.svg";

const Brands = () => {
  return (
    <div className=" w-full border border-red-500 container mx-auto bg-[#F7F7F7] grid lg:grid-cols-5 grid-cols-2 md:grid-cols-3 gap-y-5 py-8">
      <img src={logo1} className="max-w-[120px] object-fit" />
      <img src={logo1} className="max-w-[120px] object-fit" />
      <img src={logo3} className="max-w-[120px] object-fit" />
      <img src={logo3} className="max-w-[120px] object-fit" />
      <img src={logo1} className="max-w-[120px] object-fit" />
    </div>
  );
};

export default Brands;
