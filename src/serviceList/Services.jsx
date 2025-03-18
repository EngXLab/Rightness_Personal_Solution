// import ServicesView from "./Service/services-view";
import image0 from "/images/img-1.jpg";
import ServiceComponent from './components/serviceComponent'


const page = () => {
  return (
    <div className="overflow-x-hidden pt-8 lg:pt-16">
      <section className="relative min-h-screen md:h-screen">
        <img
          src={image0}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "42% 8%" }}
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="container mx-auto h-full flex flex-col justify-center px-4 relative z-10 lg:ml-[110px] pt-[250px] md:pt-0">
          {/* <pre className="lg:text-l font-bold text-yellow-500 word-spacing-lg text-[16px] md:mt-10">
            S e r v i c e s
          </pre> */}
          <h1 className="text-[30px] md:text-[40px] lg:text-[65px] font-extrabold mb-4 text-white w-500px">
            Making Your <br /> Team Shine
          </h1>
        </div>
      </section>
      <ServiceComponent/>
      {/* <ServicesView /> */}
      {/* # Create Services card ! */}
    </div>
  );
};

export default page;
