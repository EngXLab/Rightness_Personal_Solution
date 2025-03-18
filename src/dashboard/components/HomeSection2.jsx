import { useInView } from "react-intersection-observer";
import logo from "/cg-nav-logo.jpeg";
import workerImg from "/images/img-2.jpg";
import "../../App.css";

const HomeSection2 = () => {
  const { ref } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      className={`h-auto lg:h-[773px] w-full bg-[#F1F1F1] py-16 lg:py-0 `}
    >
      <div className="flex flex-col justify-center px-4 lg:px-32 lg:mt-24">
        <div className="flex flex-col lg:flex-row justify-items-start justify-between lg:w-full">
          <h1 className="text-[26px] lg:text-[45px] font-bold font-sans lg:w-[50%]">
            Your exquisite Solution for Job  Search
          </h1>
          <div className="flex flex-col lg:flex-row items-start lg:w-[50%] lg:mt-6">
            <div className="hidden lg:block w-[3px] h-[90px] bg-blue-500 lg:mr-4"></div>
            <p className="text-[14px] lg:text-[18px] text-[#5B5B5B] font-sans lg:w-[90%]">
            In a world where talent and efficiency are crucial, having a reliable 
            and professional staffing partner is essential. At Visionary Staffing, 
            we pride ourselves on being your trusted recruiting experts, dedicated 
            to delivering exceptional talent and ensuring your teams are always 
            equipped with the best professionals to drive your success.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10 lg:mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 pb-4">
            <div className="w-full h-[198px] hover:rounded-md bg-white hover:bg-[#034B63] flex flex-col hover:text-white">
              <h1 className="text-[36px] lg:text-[45px] font-bold font-sans pt-4 pl-4 ">
                1000+
              </h1>
              <p className="text-[#858585] font-sans text-[20px] lg:text-[28px] pl-4">
                Satisfied <br /> Customers
              </p>
            </div>
            <div className="w-full h-[198px] hover:rounded-md bg-white hover:bg-[#034B63] flex flex-col hover:text-white">
              <h1 className="text-[36px] lg:text-[45px] font-bold font-sans pt-4 pl-4 hover:text-white">
                10+
              </h1>
              <p className="text-[#858585] font-sans text-[20px] lg:text-[28px] pl-4">
                Years of <br />
                Experience
              </p>
            </div>
            <div className="w-full h-[198px] hover:rounded-md bg-white hover:bg-[#034B63] flex flex-col hover:text-white">
              <h1 className="text-[36px] lg:text-[45px] font-bold font-sans pt-4 pl-4 hover:text-white">
                150+
              </h1>
              <p className="text-[#858585] font-sans text-[20px] lg:text-[28px] pl-4">
                WorkForce
              </p>
            </div>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden p-6">
            <div className="flex flex-col h-full">
              <div className="flex mb-4">
                <div className="flex-grow">
                  <h1 className="tracking-[.50em] text-blue-500 text-lg font-semibold mb-4">
                    Experience
                  </h1>
                  <p className="text-sm text-[#9197A3] mb-4">
                  With over 10 years in the staffing industry, our team has the 
                  expertise and experience to match the right talent with the 
                  right roles, handling a diverse range of recruitment needs 
                  efficiently and effectively.
                  </p>
                </div>
                <img
                  src={logo}
                  alt="icon"
                  className="w-20 h-20 object-contain ml-4"
                />
              </div>
              <div className="mt-auto">
                <img
                  src={workerImg}
                  alt="worker"
                  className="w-full h-[250px] object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection2;
