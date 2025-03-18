import React from "react";

interface Service {
  no: string;
  image: string;
  title: string;
  description1: string;
  description2: string;
  features: string[];
  moreInfo: string;
  icons: { image: string; title: string; description: string }[];
}

interface ServiceProps {
  service: Service;
  isLeft: boolean;
}

const ServiceComponent: React.FC<ServiceProps> = ({ service, isLeft }) => {
  return (
    <section
      className={`flex flex-col ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      } gap-16 lg:m-10 lg:pl-[-30px]`}
    >
      <div className="w-full md:w-1/2">
        <img
          loading="lazy"
          src={service.image}
          className="w-full aspect-[1.54]"
          alt={service.title}
        />
        <div className="mt-7 w-full">
          <div className="flex gap-4">
            {service.icons.map((icon, idx) => (
              <div key={idx} className="flex-1">
                <img
                  loading="lazy"
                  src={icon.image}
                  className="w-full aspect-[1.49]"
                  alt={icon.title}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="lg:w-1/2">
        <div className="px-5 mt-7 md:mt-10">
          <div className="gap-5 font-bold text-sky-900">
            <div className="flex items-center">
              <div className="lg:text-[65px]">{service.no}</div>
              <div className="lg:text-[35px] text-2xl lg:font-bold mt-4 ml-2">
                {service.title}
              </div>
            </div>
            <div className="mt-3 text-[14px] lg:text-[20px] font-normal text-[#68747d] w-full lg:w-[500px]">
              {service.description1}
            </div>
            <div className="mt-3 text-[14px] lg:text-[18px] font-light text-[#64717C] w-full lg:w-[500px]">
              {service.description2}
            </div>
            <button className="bg-[#F4BD14] hover:rounded-2xl duration-200 text-white font-normal p-2 px-3 rounded-sm mt-4">
              Contact Us
            </button>
            <div className="mt-[20px]">
              {/* <div className="text-[24px] font-bold">Features</div> */}
              <div className="flex flex-wrap gap-6 w-full mt-5 rounded-md">
                {service.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-3 rounded-xl hover:text-white text-l hover:bg-yellow-500 hover:rounded-2xl duration-200 shadow-md w-[calc(50%-12px)] flex justify-center items-center"
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceComponent;
