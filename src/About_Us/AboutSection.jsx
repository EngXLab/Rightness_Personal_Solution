import { useEffect, useRef} from "react";
import { useInView } from "react-intersection-observer";
import i_1 from "/about-f.png";
import i_2 from "/about_v.png";
import logo from "/Logo3.png";


const AboutSection1 = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
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
    <div className="flex flex-col">
      <section ref={ref} className="py-20 flex flex-col md:flex-row relative">
        <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
          <div
            style={{
              clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          />
        </div>

        <div className="w-full lg:pl-16 flex flex-col lg:flex-row">
          <div className="flex flex-col lg:flex-row lg:mr-[-90px] mb-4 lg:mb-0">
            <img
              ref={imageRef1}
              src={i_1}
              className={`w-full md:w-[300px] md:h-[451px] mb-4 md:mb-0 transition-transform duration-1000 ${inView ? 'transform translate-x-0 opacity-100' : 'transform -translate-x-10 opacity-0'}`}
              alt="Founder 1"
            />
            <div className="bg-black rounded-full w-[80px] h-[4px] mt-[20px] md:mt-[50px] mx-auto md:mx-4 lg:ml-[-36px]"></div>
            <div className="text-xl pt-4 text-[#034B63] font-bold text-center md:text-left">
              <h1>Name 1</h1>
              <h1>Founder</h1>
            </div>
          </div>
          <div className="gap-4 md:mt-28 md:z-10 md:flex md:flex-row lg:ml-[-30px] mb-4 lg:mb-0">
            <div className="lg:flex pt-[400px] lg:pl-[-200px] lg:flex-row lg:mb-[35px]">
              <div className="text-xl text-[#034B63] font-bold lg:pr-[30px] lg:pt-[-300px] text-center md:text-left">
                <h1>Name 2</h1>
                <h1>Founder</h1>
              </div>
            </div>
            <img
              ref={imageRef}
              src={i_2}
              className={`w-full md:w-[300px] md:h-[451px] mb-4 md:mb-0 lg:ml-[-40px] transition-transform duration-1000 ${inView ? 'transform translate-x-0 opacity-100' : 'transform -translate-x-10 opacity-0'}`}
              alt="Founder 2"
            />
          </div>
        </div>
        <div className="lg:w-[70%] lg:h-[466px] lg:ml-auto flex flex-col bg-gray-200 h-[260px] z-5 mt-4 md:mt-0 justify-center">
          <div className="mr-[20px] mt-[20px] flex flex-col items-end lg:mr-6 lg:w-[400px] lg:mt-14 justify-center">
            <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-bold text-right">
              Creative Directors
            </h2>
            <p className="font-normal text-[16px] md:text-[20px] lg:text-[20px] text-[#4d5055] text-right">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              faucibus, ante et consequat tincidunt.
            </p>
          </div>
          <div className="m-4 lg:m-11 lg:mt-[10%] inline-flex justify-end h-auto">
            <img
              src={logo}
              alt="logo"
              className="w-[100px] h-[100px] mr-4"
            />
          </div>
        </div>
      </section>

      {/* Infinite Scroll Section */}
      </div>
  );
};

export default AboutSection1;
