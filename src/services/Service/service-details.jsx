/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ServiceDetails = ({ service }) => {
  const [activeFeature, setActiveFeature] = useState(null);
  const navigate = useNavigate();

  const toggleFeature = (index) => {
    setActiveFeature(activeFeature === index ? null : index);
  };

  return (
    <section className="flex flex-col gap-16 lg:m-10 mb-5">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="w-full md:w-1/2">
          <img
            loading="lazy"
            src={service.image}
            className="w-full aspect-[1.54] mt-5 md:mt-0"
            alt={service.title}
          />
        </div>
        <div className="lg:w-1/2">
          <div className="px-5">
            <div className="gap-5 font-bold text-sky-900">
              <div className="flex items-center">
                <div className="lg:text-[65px]">{service.no}</div>
                <div className="lg:text-[35px] text-2xl lg:font-bold ml-2">
                  {service.title}
                </div>
              </div>
              <div className="mt-3 text-[14px] lg:text-[20px] font-normal text-[#68747d] w-full lg:w-[500px]">
                {service.description1}
              </div>
              <div className="mt-3 text-[14px] lg:text-[18px] font-light text-[#64717C] w-full lg:w-[500px]">
                {service.description2}
              </div>
              <button
                className="bg-[#F4BD14] hover:rounded-2xl duration-200 text-white font-normal p-2 px-3 rounded-sm mt-4"
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[20px] px-5">
        
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-6 w-full mt-5 rounded-md">
          {service.features.map((feature, idx) => (
            <div key={idx} className="w-full sm:w-[calc(50%-12px)]">
              <button
                onClick={() => toggleFeature(idx)}
                className={`w-full bg-white p-3 rounded-xl text-sky-900 font-bold hover:text-white text-l hover:bg-yellow-500 hover:rounded-2xl duration-200 shadow-md flex justify-center items-center ${
                  activeFeature === idx ? "bg-yellow-500 text-white" : ""
                }`}
              >
                {feature.name}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeFeature === idx
                    ? "max-h-[1000px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="mt-4 p-4 bg-gray-100 rounded-md">
                  {feature.subfeatures.map((subfeature, subIdx) => (
                    <div key={subIdx} className="mb-4">
                      <h3 className="font-bold mb-2">{subfeature.title}</h3>
                      <p className="text-sm text-gray-500">
                        {subfeature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
