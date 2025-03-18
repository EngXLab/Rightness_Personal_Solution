// import React from "react";
import ServicesLayout from "./services-layout";

const ServicesView = () => {
  const services = [
    {
      title: "Information Technology (IT)",
      description: "Specialized staffing solutions for all your IT needs."
    },
    {
      title: "Life Science",
      description: "Expert staffing for biotech, pharma, and healthcare sectors."
    },
    {
      title: "Financial Services",
      description: "Providing skilled professionals for banking and finance roles."
    },
    {
      title: "Manufacturing",
      description: "Recruiting top talent for production, quality, and management."
    },
    {
      title: "Government Services",
      description: "Trusted staffing support for federal, state, and local agencies."
    },
    {
      title: "Energy",
      description: "Connecting energy firms with experienced industry professionals."
    },
    {
      title: "Semiconductors",
      description: "Supplying specialized talent for the semiconductor industry."
    },
    {
      title: "K-12",
      description: "Providing qualified educators and staff for K-12 institutions."
    },
    {
      title: "Food & Beverages",
      description: "Offering staffing solutions for food production and hospitality."
    },
  ];

  return (
    <div className="bg-[#F1F1F1] py-12">
      <div className="container mx-auto">
        <ServicesLayout services={services} />
      </div>
    </div>
  );
};

export default ServicesView;
