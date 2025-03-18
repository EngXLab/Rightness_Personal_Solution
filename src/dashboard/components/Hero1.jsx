import image0 from "/images/img-1.jpg";
import icon1 from "/images/icon_1.png";
import icon2 from "/images/icon_2.png";
import icon3 from "/images/icon_3.png";
import icon4 from "/images/icon_4.png";

const Hero_1 = () => {
  const valuesCards = [
    {
      icon: icon1,
      title: "Client-Centric Approach",
      description:
        "We prioritize our valued clients, focusing on building quality relationships rather than just doing business.",
    },
    {
      icon: icon2,
      title: "Professional Excellence",
      description:
        "Our team is dedicated to maintaining professional excellence, ensuring top-tier service in every interaction.",
    },
    {
      icon: icon3,
      title: "Human Elegance",
      description:
        "We bring human elegance into our services, creating a unique, respectful, and compassionate experience.",
    },
    {
      icon: icon4,
      title: "Integrity and Trust",
      description:
        "We operate with transparency and integrity, fostering trust and long-lasting partnerships with our clients.",
    },
  ];

  return (
    <div className="">
      <section className="relative min-h-screen pt-14 lg:-pt-16">
        <img
          src={image0}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover object-right-top sm:object-center"
          style={{ objectPosition: "35% 1%" }}
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="container mx-auto min-h-screen flex flex-col justify-center px-4 relative z-10 lg:pl-[100px] lg:pt-32 lg:mt-8">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 text-white md:mt-24">
            Discover Opportunities that Elevate Your Career
          </h1>
          <div className="h-1 w-full bg-white bg-opacity-30 rounded-md mt-6 lg:mt-10"></div>

          {/* Values Cards Section */}
          <div className="w-full rounded-md flex flex-col lg:flex-row justify-around lg:mt-10 lg:py-10">
            {valuesCards.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col pt-4 w-full lg:w-1/4 px-4 lg:px-6 hover:border-t-4 hover:border-blue-500 transition duration-300 hover:bg-white hover:bg-opacity-15 ${
                  index > 0 ? "mt-6 lg:mt-0" : ""
                }`}
              >
                <div className="flex items-center mb-2">
                  <img
                    src={item.icon}
                    alt="icon"
                    className="w-10 h-10 lg:w-12 lg:h-12"
                  />
                  <h1 className="text-lg lg:text-xl font-bold text-white ml-4">
                    {item.title}
                  </h1>
                </div>
                <p className="text-white text-sm lg:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero_1;
