
const Partners = () => {
  const logos = Array.from({ length: 40 }, (_, i) => ({
    src: `/logos/logo${i + 1}.png`,
    alt: `Partner Logo ${i + 1}`,
  }));

  const firstHalf = logos.slice(0, 20);
  const secondHalf = logos.slice(20, 40);

  return (
    <div className="flex flex-col overflow-hidden w-full bg-white py-16 md:py-20 lg:py-14 space-y-10">
      <section id="sec-partners">
        <div className="layout flex flex-col items-center justify-evenly gap-12 space-y-5 overflow-hidden lg:h-[80vh] lg:py-0">
          <div className='  px-8 py-4'>
            <h2 className="heading text-black font-semibold text-3xl">
              Our <span className="fancy ">Testimonial</span>
            </h2>
          </div>

          {/* First Section with 20 logos */}
          <div className="flex w-full justify-between">
            <div className="inline-flex animate-leftToRightSlide">
              {firstHalf.map((logo, index) => (
                <img
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  width={176}
                  height={112}
                  className="mx-16 h-32 w-44"
                />
              ))}
            </div>
          </div>

          {/* Second Section with another 20 logos */}
          <div className="flex w-full justify-between">
            <div className="inline-flex animate-rightToLeftSlide">
              {secondHalf.map((logo, index) => (
                <img
                  key={index + 20}
                  src={logo.src}
                  alt={logo.alt}
                  width={176}
                  height={112}
                  className="mx-16 h-32 w-44"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
