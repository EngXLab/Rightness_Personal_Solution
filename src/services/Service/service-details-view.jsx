import { useParams, useLocation } from "react-router-dom";
import { services } from "../../components/servicesData"; // Importing the detailed services data
import ServiceDetails from "./service-details";
import image0 from "/images/img-1.jpg";

const ServiceDetailsView = () => {
  const { urlSlug } = useParams();
  const location = useLocation();

  // Find the service based on the URL slug
  const service =
    services.find(
      (s) => s.title.toLowerCase().replace(/\s+/g, "-") === urlSlug
    ) || location.state?.service;

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="lg:mb-8">
      {/* Hero Section */}
      <section className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] w-full">
        <img
          src={image0}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "top center" }}
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-start px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto w-full">
            <pre className="text-sm sm:text-base md:text-lg font-bold text-yellow-500 mb-2 sm:mb-4">
              O u r &nbsp; S e r v i c e s
            </pre>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight">
              {service.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <ServiceDetails service={service} />
    </div>
  );
};

export default ServiceDetailsView;
