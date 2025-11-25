import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "IMPORT AND EXPORT CLERANCE",
    description: "SEA /AIR/OVERLAND",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu3g29Ov8VishI7DaVI3CrnI00GJC-NtEbSQ&s",
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
    },
  },
};

const Services = () => {
  return (
    <div className="bg-blue-600 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0.8, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl tracking-tight">
            AD LOGISTICS IS VERY ACTIVE IN THE FOLLOWING AREAS
          </h2>
          <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
            Providing top-notch logistics services across the globe, ensuring your cargo is handled with expertise and care.
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.2)",
                transition: { duration: 0.3 }
              }}
              className="group relative rounded-2xl shadow-xl overflow-hidden"
            >
              <img className="h-56 w-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out" src={service.imageUrl} alt={service.title} />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white tracking-wide uppercase">
                  {service.title}
                </h3>
                <p className="mt-1 text-sm text-blue-200 font-semibold uppercase">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
