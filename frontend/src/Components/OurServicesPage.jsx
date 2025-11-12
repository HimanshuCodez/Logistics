import React from 'react';

const ourServicesData = [
  {
    title: "Custom Clearance",
    description: "Customs clearance work involves preparation and submission of documentations required to facilitate export or imports into the country, representing client during customs examination, assessment, payment of duty and co taking delivery of cargo from customs after clearance along with documents.",
    imageUrl: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Freight Forwarding",
    description: "Freight forwarder is to organize and execute the transport of goods on behalf of others. A freight forwarder handles the pick-up of goods from the supplier, customs clearance (Documents) at the proper authorities, handling at the warehouses involved, and secure a spot on the Ship, Plane or truck delivering the goods.",
    imageUrl: "https://images.unsplash.com/photo-1569952453021-f749b8a434b5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Consultancy",
    description: "We handle complete custom consultancy like obtaining IEC, DGFT, and DEPB license. Setting up custom of Custom Bonded/General Warehouse, Project Import Registration, Reconciliation & Finalisation, and Drawback/Refunds.",
    imageUrl: "https://images.unsplash.com/photo-1565610222536-49b5a9248357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Surface Transportation",
    description: "We provide complete transportation solution by road. Our services are uninterrupted and available 365 days anywhere in India. We are specialised in movement of general cargo, project cargo services and over dimensional cargo.",
    imageUrl: "https://images.unsplash.com/photo-1587679299438-c5484c7f3283?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const OurServicesPage = () => {
  return (
    <div className="bg-blue-600 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            Our Comprehensive Services
          </h1>
          <p className="mt-4 text-xl text-gray-200">
            AD Logistics is dedicated to providing top-tier logistics solutions across various domains.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-2">
          {ourServicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col lg:flex-row"
            >
              <div className="lg:w-1/2">
                <img className="h-64 w-full object-cover lg:h-full" src={service.imageUrl} alt={service.title} />
              </div>
              <div className="p-8 lg:w-1/2 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-blue-600 mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-800 text-lg leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServicesPage;
