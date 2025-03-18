import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import i_1 from "/about-f.png";
import i_2 from "/about_v.png";
import logo from "/LogoGreen.png";

const AboutSection1 = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.1, // Adjust this value as needed
  });

  const imageRef = useRef(null);
  const imageRef1 = useRef(null);

  useEffect(() => {
    if (inView) {
      imageRef.current.classList.add("animate-slideIn");
      imageRef1.current.classList.add("animate-slideIn");
    }
  }, [inView]);

  return (
    <section ref={ref} className="bg-gray-100 py-20 flex flex-col md:flex-row">
      <div className="w-full lg:pl-16 flex flex-col lg:flex-row">
        {/* ----- */}
        <div className="flex flex-col lg:flex-row lg:mr-[-90px] mb-4 lg:mb-0">
          <img
            ref={imageRef1}
            src={i_1}
            className="w-full md:w-[300px] md:h-[451px] mb-4 md:mb-0 
              left-0 transition-transform duration-1000"
            alt="Sliding"
          />
          <div className="bg-black rounded-full w-[80px] h-[4px] mt-[20px] md:mt-[50px] mx-auto md:mx-4 lg:ml-[-36px]"></div>
          <div className="text-xl pt-4 text-[#034B63] font-bold text-center md:text-left">
            <h1>Name 1</h1>
            <h1>Founders</h1>
          </div>
        </div>
        {/* ------------- */}
        <div className="gap-4 md:mt-28 md:z-10 md:flex md:flex-row lg:ml-[-30px] mb-4 lg:mb-0">
          <div className="lg:flex pt-[400px] lg:pl-[-200px] lg:flex-row lg:mb-[35px]">
            <div className="text-xl text-[#034B63] font-bold lg:pr-[30px] lg:pt-[-300px] text-center md:text-left">
              <h1>Name 2</h1>
              <h1>Founders</h1>
            </div>
          </div>
          <img
            ref={imageRef}
            src={i_2}
            className="w-full md:w-[300px] md:h-[451px] mb-4 md:mb-0 lg:ml-[-40px] transition-transform duration-1000 left-0"
            alt="Creative Director 2"
          />
        </div>
        {/* -------------------- */}
      </div>
      {/* ---- */}
      <div className="lg:w-[70%] lg:h-[666px] lg:ml-auto flex flex-col bg-white h-[260px] z-5 mt-4 md:mt-0">
        <div className="mr-[20px] mt-[40px] flex flex-col items-end lg:mr-6 lg:w-[400px] lg:mt-44">
          <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-bold text-right">
            Creative Directors
          </h2>
          <p className="font-normal text-[16px] md:text-[20px] lg:text-[20px] text-[#4d5055] text-right">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            faucibus, ante et consequat tincidunt.
          </p>
        </div>
        <div className="m-4 lg:m-11 lg:mt-[35%] flex justify-end items-end h-auto">
          <img
            src={logo}
            alt="image"
            className="w-[200px] h-[60px] rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection1;
