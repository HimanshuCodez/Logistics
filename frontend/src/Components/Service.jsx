'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Truck, 
  Warehouse, 
  Globe,
  PackageCheck,
  ScrollText
} from 'lucide-react';

const services = [
  {
    icon: FileText,
    title: "Custom Clearance",
    description: "Customs clearance work involves preparation and submission of documentations required to facilitate export or imports into the country, representing client during customs examination, assessment, payment of duty and co taking delivery of cargo from customs after clearance along with documents."
  },
  {
    icon: Globe,
    title: "Freight Forwarding",
    description: "Freight forwarder is to organize and execute the transport of goods on behalf of others. A freight forwarder handles the pick-up of goods from the supplier, customs clearance (Documents) at the proper authorities, handling at the warehouses involved, and secure a spot on the Ship, Plane or truck delivering the goods."
  },
  {
    icon: ScrollText,
    title: "Consultancy",
    description: "We handle complete custom consultancy like obtaining IEC, DGFT, and DEPB license. Setting up custom of Custom Bonded/General Warehouse, Project Import Registration, Reconciliation & Finalisation, and Drawback/Refunds."
  },
  {
    icon: Truck,
    title: "Surface Transportation",
    description: "We provide complete transportation solution by road. Our services are uninterrupted and available 365 days anywhere in India. We are specialised in movement of general cargo, project cargo services and over dimensional cargo."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

export default function LogisticsFolioLogisticsServices() {
  return (
    <>
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
              TOTAL LOGISTICS SOLUTION
            </h2>
            <div className="h-1 w-32 bg-blue-500 mx-auto rounded-full" />
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
                >
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                  
                  <div className="p-8 md:p-10">
                    <div className="flex items-center gap-5 mb-6">
                      <div className="p-4 bg-blue-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-black">
                        {service.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed text-base">
                      {service.description}
                    </p>

                    {/* Bottom Accent Line */}
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "100px" }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      className="h-1 bg-blue-500 mt-8 rounded-full"
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Final Callout */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          
            className="text-center mt-20"
          >
            <div className="inline-flex items-center gap-4 bg-blue-500 text-white px-10 py-6 rounded-full shadow-2xl">
              <PackageCheck className="w-8 h-8" />
              <span className="text-xl font-semibold">End-to-End Logistics Partner</span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}