import ok from "/ok.png";
import image0 from "/images/img-6.jpg";

const HomeSection5 = () => {
  return (
    <section className="h-auto lg:h-[809px] w-full mt-32 lg:mt-32 pb-10">
      <div className="flex flex-col md:flex-row mx-4 sm:mx-6 md:mx-8 gap-6 md:gap-8 md:-mt-12 lg:gap-24">
        <div className="w-full md:w-[1050px] h-auto md:h-[594px] overflow-hidden rounded-md">
          <img src={image0} alt="icon" className="w-full h-full object-cover object-center md:ml-6" />
        </div>
        <div className="flex flex-col mt-6 md:mt-0 w-full md:w-1/2 lg:w-[55%]">
          <h1 className="text-[22px] sm:text-[24px] lg:text-[32px] mb-2 md:mb-4 font-semibold">
            Our Staffing Expertise
          </h1>
          <p className="py-2 text-[14px] sm:text-[16px] lg:text-[20px] text-[#9197A3] mb-4 sm:mb-6">
            We specialize in recruiting for key industries, ensuring qualified and expert candidates across various sectors.
          </p>
          <div className="flex flex-row gap-4">
           <div> 
          <h1 className="text-[20px] sm:text-[22px] lg:text-[26px] mb-3 sm:mb-4 font-semibold">
            Industries We Serve:
          </h1>
          {[
            "Information Technology",
            "Oil & Gas, Petrochemicals",
            "Hydro & Nuclear Power",
            "Pharmaceuticals, BFSI",
            "Engineering & Manufacturing",
            "Telecom, FMCG",
          ].map((item, index) => (
            <div key={index} className="flex flex-row items-start my-1 sm:my-2">
              <img src={ok} alt="ok" className="w-[20px] sm:w-[24px] h-[20px] sm:h-[24px] mt-1 mr-3 sm:mr-4 flex-shrink-0" />
              <h1 className="text-[14px] sm:text-[16px] lg:text-[18px]">{item}</h1>
            </div>
          ))}
          </div>
          <div>

          <h1 className="text-[20px] sm:text-[22px] lg:text-[26px] mb-3 sm:mb-4 font-semibold">
            Key Professional Roles:
          </h1>
          {[
            "NPD Engineer",
            "Piping Engineer",
            "Product & Process Development",
            "Electrical & Civil Design Engineer",
            "R & D Engineer",
          ].map((item, index) => (
            <div key={index} className="flex flex-row items-start my-1 sm:my-2">
              <img src={ok} alt="ok" className="w-[20px] sm:w-[24px] h-[20px] sm:h-[24px] mt-1 mr-3 sm:mr-4 flex-shrink-0" />
              <h1 className="text-[14px] sm:text-[16px] lg:text-[18px]">{item}</h1>
            </div>
          ))}

          </div>
          </div>
          <h1 className="text-[20px] sm:text-[22px] lg:text-[26px] mb-3 sm:mb-4 font-semibold">
            Our Services:
          </h1>
          {[
            "Executive Search & Head Hunting",
            "Bulk Recruitment",
            "Payroll Management",
            "Background Verification",
          ].map((item, index) => (
            <div key={index} className="flex flex-row items-start  sm:my-2">
              <img src={ok} alt="ok" className="w-[20px] sm:w-[24px] h-[20px] sm:h-[24px] mt-1 mr-3 sm:mr-4 flex-shrink-0" />
              <h1 className="text-[14px] sm:text-[16px] lg:text-[18px]">{item}</h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSection5;
