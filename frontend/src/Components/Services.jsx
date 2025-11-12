const services = [
  {
    title: "IMPORT AND EXPORT CLERANCE",
    description: "SEA /AIR/OVERLAND",
    imageUrl: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "SEA AND AIR FREIGHT",
    description: "AGENT",
    imageUrl: "https://imgs.search.brave.com/a_Ogae9tU-MgYRw_XVqWl7yP-itXKWJajIF7M88YZcg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/ZWFzeWhhdWwuY29t/L2Jsb2cvd3AtY29u/dGVudC91cGxvYWRz/LzIwMjEvMDEvQWly/LWFuZC1TZWEtRnJl/aWdodC1TZXJ2aWNl/cy0yLTEwMjR4NTc2/LnBuZw",
  },
  {
    title: "BONDED WAREHOUSING",
    description: "TEMA/ACCRA",
    imageUrl: "https://imgs.search.brave.com/IiUM7jBmYD_AffLk7ItYoREKcrIlIbbh97dV5JpF91A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly81Lmlt/aW1nLmNvbS9kYXRh/NS9TRUxMRVIvRGVm/YXVsdC8yMDIyLzIv/R1gvT0svWFAvODgx/MDExODYvYm9uZGVk/LXdhcmVob3VzaW5n/LXNlcnZpY2VzLTI1/MHgyNTAuanBlZw",
  },
  {
    title: "HAULAGE OF GOODS",
    description: "SEA/AIR/OVERLAND",
    imageUrl: "https://imgs.search.brave.com/RTq6-mUZMARriTgx9P7eKehcr4U8JiI3t56UlOfyst4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zZWFp/cmdsb2JhbC5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjIv/MTIvczIxLmpwZw",
  },
  {
    title: "CONSOLIDATION OF GOODS",
    description: "WORLDWIDE",
    imageUrl: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "TRANSPORTATION",
    description: "ALL OVER INDIA",
    imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
 
];

const Services = () => {
  return (
    <div className="bg-blue-600 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            AD LOGISTICS IS VERY ACTIVE IN THE FOLLOWING AREAS
          </h2>
          <p className="mt-4 text-lg text-gray-200">
            Providing top-notch logistics services across the globe.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
            >
              <img className="h-56 w-full object-cover" src={service.imageUrl} alt={service.title} />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-600">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-800">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
