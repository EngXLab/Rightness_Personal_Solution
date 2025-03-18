import { useInView } from "react-intersection-observer";
import m1 from "/images/img-8.jpg";
import m2 from "/images/img-4.jpg";
import m3 from "/images/img-5.jpg";
import m4 from "/images/img-7.jpg";

const HomeSection3 = () => {
  // const { ref, inView } = useInView({
  //   triggerOnce: false,
  //   threshold: 0.2,
  // });

  return (
    <section
      // ref={ref}
      className={`h-auto w-full bg-[#034B63] text-white py-12`}
    >
      <div className="flex flex-col justify-center px-4 lg:px-32 lg:-mt-12 ">
        <div className="flex flex-col lg:flex-row justify-items-start justify-between lg:py-16 pb-8">
          <h1 className="text-[26px] lg:text-[45px] font-bold font-sans lg:w-[50%]">
          Discover Your Ideal Staffing Partner
          </h1>
          <div className="flex flex-col lg:flex-row items-start lg:w-[50%] lg:mt-6">
            <div className="hidden lg:block w-[3px] h-[90px] bg-blue-500 lg:mr-4"></div>
            <p className="text-[10px] lg:text-[18px] text-[#cfcfcf] font-sans lg:w-[90%]">
            Embark on a journey to find your premier staffing partner. 
            Experience exceptional talent placement with guaranteed 
            satisfaction, and build a team that leaves a lasting impact.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 mx-4 lg:mx-0">
          <div className="relative group col-span-1 md:col-span-3">
            <img
              src={m3}
              alt="icon"
              className="w-full h-[300px] md:h-[500px] lg:h-[600px] object-cover rounded-md"
              style={{ objectPosition: "top center" }}
            />
          </div>
          <img
            src={m2}
            alt="icon"
            className="w-full h-[320px] md:h-[480px] object-cover rounded-md md:col-span-1"
          />
          <img
            src={m4}
            alt="icon"
            className="w-full h-[320px] md:h-[480px] object-cover rounded-md md:col-span-1"
          />
          <img
            src={m1}
            alt="icon"
            className="w-full h-[320px] md:h-[480px] object-cover rounded-md md:col-span-1"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeSection3;
