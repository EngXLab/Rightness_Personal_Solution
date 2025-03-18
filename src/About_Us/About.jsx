import image0 from "/images/img-1.jpg"; // Replace with your hero image path
import AboutSection from "./AboutSection";

const About = () => (
  <div className="overflow-x-hidden pt-8 lg:pt-16">
    <section className="relative min-h-screen md:h-screen">
      <img
        src={image0}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-600 ease-out"
        style={{ objectPosition: "42% 8%" }}
      />
      <div className="absolute inset-0 bg-black opacity-60 transition-opacity duration-600 ease-out"></div>
      <div className="container mx-auto h-full flex flex-col justify-center px-4 relative z-10 lg:ml-[110px] pt-[250px] md:pt-0">
        
        <h1 className="text-[35px] md:text-[40px] lg:text-[65px] font-extrabold mb-4 text-white w-500px transition-opacity duration-600 ease-out">
          The Gold Standard <br /> in Staffing
        </h1> 
        <div>
        <h1 className="text-[18px]  text-white font-light lg:w-[750px] mb-5">
        Rightness Personnel Solutions Private Limited is a company incorporated 
        on 28th September 2015. It is one of the renowned employment agencies in 
        India, which is also authentic and licensed recruitment agency. It is 
        registered as per the law of the country.
        </h1> 
        <h1 className="text-[18px]   text-white font-light lg:w-[750px] mb-5 ">
        Being a young organization we have the dynamism and zeal to surpass the 
        expectations that the clients have to increase their productivity through 
        better use of their human resources and to enable companies to achieve real 
        competitive advantages.
        </h1> 
        <h1 className="text-[18px]  text-white font-light lg:w-[750px] mb-5 ">
        We aimed to serve right candidates to right opportunities at the right time. 
        Hence we assure to create close, long lasting and mutually beneficial 
        relationship forever with all our clients and candidates.
        </h1> 
        </div>
      </div>
    </section>
    <AboutSection />
    
  </div>
);

export default About;
