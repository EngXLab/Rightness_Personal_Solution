/* eslint-disable react/prop-types */
import { MoveRight } from "lucide-react";
import myImages from "/cart.png";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const ServicesLayout = ({ services }) => {
  const [size, setSize] = useState(50);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSize(20);
      } else {
        setSize(40);
      }
    };
    handleResize(); // Call initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleArrowClick = (service) => {
    const urlSlug = service.title.toLowerCase().replace(/\s+/g, "-");
    navigate(`/service-details/${urlSlug}`, { state: { service } });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 lg:px-8">
      {services.map((service, index) => {
        const urlSlug = service.title.toLowerCase().replace(/\s+/g, "-");
        return (
          <div key={index} className="flex justify-center align-middle">
            <div
              className="pl-5 border flex flex-col rounded-xl text-black mt-10 bg-cover bg-no-repeat h-[330px] w-full max-w-[440px]"
              style={{ backgroundImage: `url(${myImages})` }}
            >
              <div className="mt-6 lg:mt-9 min-h-[64px] text-black text-[18px] lg:text-2xl font-semibold">
                <Link to={`/service-details/${urlSlug}`} state={{ service }}>
                  {service.title}
                </Link>
              </div>
              <div>
                <p className="text-[12px] lg:text-base w-[90%] leading-6 text-[#9197a3] font-normal mt-2">
                  {service.description}
                </p>
              </div>
              <div className="flex gap-x-4 mt-auto mb-6">
                <div
                  className="size-[3.5rem] lg:size-[3.5rem] bg-[#034B63] rounded-full flex justify-center items-center hover:-rotate-[30deg] transition-all ease-in-out duration-300 cursor-pointer hover:scale-110 hover:shadow-lg"
                  onClick={() => handleArrowClick(service)}
                >
                  <MoveRight stroke="white" size={size} strokeWidth={1.3} />
                </div>
                <div className="text-gray-600 whitespace-pre flex items-center text-[10px] lg:text-xl">
                  <Link to={`/service-details/${urlSlug}`} state={{ service }}>
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServicesLayout;
