import star from "../assets/trendy/star_fill.svg";
import image from "../assets/hero2.jpg";
const TourPlan = () => {
  return (
    <>
      <h3 className="text-[#181E4B] font-volkhov font-bold text-[32px]">
        Tour Plan
      </h3>
      <div className="flex flex-col">
        <div className="flex items-start">
          <div className="relative flex items-center w-[50px] h-full justify-center">
            <div className="w-[2px] h-full border-1 border-dashed border-primary"></div>
            <div className="absolute top-0 flex items-center justify-center p-3 text-white bg-primary rounded-lg w-full">
              01
            </div>
          </div>
          <div className="flex-1 px-3 flex flex-col gap-4 pb-8">
            <div className="flex flex-col gap-2">
              <h5 className="text-[#181E4B] text-[20px] font-poppins font-semibold">
                Day 1: Departure
              </h5>
              <p className="text-[#181E4B] text-[16px] font-poppins text-capitalize">
                Qui tempore voluptate qui quia commodi rem praesentium alias et
                voluptates officia sed molestiae sint et voluptas quos. Qui
                harum repudiandae galisum dolorem
              </p>
            </div>
            <ul className="list-disc text-[14px] font-poppins text-[#181E4B] px-3">
              <li>5 Star Accommodation</li>
              <li>Breakfast</li>
              <li>5 Star Accommodation</li>
              <li>Breakfast</li>
            </ul>
          </div>
        </div>
        <div className="flex items-start">
          <div className="relative flex items-center w-[50px] h-full justify-center">
            <div className="w-[2px] h-full border-1 border-dashed border-primary"></div>
            <div className="absolute top-0 flex items-center justify-center p-3 text-white bg-primary rounded-lg w-full">
              02
            </div>
          </div>
          <div className="flex-1 px-3 flex flex-col gap-4  pb-8">
            <div className="flex flex-col gap-2">
              <h5 className="text-[#181E4B] text-[20px] font-poppins font-semibold">
                Day 2: Visiting Zurich,Geneva And Zermatt
              </h5>
              <p className="text-[#181E4B] text-[16px] font-poppins text-capitalize">
                Qui tempore voluptate qui quia commodi rem praesentium alias et
                voluptates officia sed molestiae sint et voluptas quos. Qui
                harum repudiandae galisum dolorem
              </p>
            </div>
            <ul className="list-disc text-[14px] font-poppins text-[#181E4B] px-3">
              <li>5 Star Accommodation</li>
              <li>Breakfast</li>
              <li>5 Star Accommodation</li>
              <li>Breakfast</li>
            </ul>
          </div>
        </div>
        <div className="flex items-start">
          <div className="relative flex items-center w-[50px] h-full justify-center">
            <div className="w-[2px] h-full border-1 border-dashed border-primary"></div>
            <div className="absolute top-0 flex items-center justify-center p-3 text-white bg-primary rounded-lg w-full">
              03
            </div>
          </div>
          <div className="flex-1 px-3 flex flex-col gap-4  pb-8">
            <div className="flex flex-col gap-2">
              <h5 className="text-[#181E4B] text-[20px] font-poppins font-semibold">
                Day 3: Rest
              </h5>
              <p className="text-[#181E4B] text-[16px] font-poppins text-capitalize">
                Qui tempore voluptate qui quia commodi rem praesentium alias et
                voluptates officia sed molestiae sint et voluptas quos. Qui
                harum repudiandae galisum dolorem
              </p>
            </div>
            <ul className="list-disc text-[14px] font-poppins text-[#181E4B] px-3">
              <li>5 Star Accommodation</li>
              <li>Breakfast</li>
            </ul>
          </div>
        </div>
        <div className="flex items-start">
          <div className="relative flex items-center w-[50px] h-full justify-center">
            <div className="w-[2px] h-full border-1 border-dashed border-primary"></div>
            <div className="absolute top-0 flex items-center justify-center p-3 text-white bg-primary rounded-lg w-full">
              04
            </div>
          </div>
          <div className="flex-1 px-3 flex flex-col gap-4 pb-8">
            <div className="flex flex-col gap-2">
              <h5 className="text-[#181E4B] text-[20px] font-poppins font-semibold">
                Day 4: Historical Tour
              </h5>
              <p className="text-[#181E4B] text-[16px] font-poppins text-capitalize">
                Qui tempore voluptate qui quia commodi rem praesentium alias et
                voluptates officia sed molestiae sint et voluptas quos. Qui
                harum repudiandae galisum dolorem
              </p>
            </div>
            <ul className="list-disc text-[14px] font-poppins text-[#181E4B] px-3">
              <li>5 Star Accommodation</li>
              <li>Breakfast</li>
              <li>5 Star Accommodation</li>
              <li>Breakfast</li>
            </ul>
          </div>
        </div>
        <div className="flex items-start">
          <div className="relative flex items-center w-[50px] h-full justify-center">
            <div className="w-[2px] h-full border-1 border-dashed border-primary"></div>
            <div className="absolute top-0 flex items-center justify-center p-3 text-white bg-primary rounded-lg w-full">
              05
            </div>
          </div>
          <div className="flex-1 px-3 flex flex-col gap-4  pb-8">
            <div className="flex flex-col gap-2">
              <h5 className="text-[#181E4B] text-[20px] font-poppins font-semibold">
                Day 5: Return
              </h5>
              <p className="text-[#181E4B] text-[16px] font-poppins text-capitalize">
                Qui tempore voluptate qui quia commodi rem praesentium alias et
                voluptates officia sed molestiae sint et voluptas quos. Qui
                harum repudiandae galisum dolorem
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TourPlan;