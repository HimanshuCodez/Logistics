'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Truck, 
  Clock, 
  Globe, 
  Flame, 
  Thermometer, 
  Weight, 
  PackageOpen,
  Languages
} from 'lucide-react';

const highlights = [
  { icon: Truck, title: "Decades of Experience", text: "Over years of proven transportation expertise across India" },
  { icon: Clock, title: "Timely Planned Deliveries", text: "We fully understand and deliver on-time, every time" },
  { icon: Globe, title: "Trusted by Global Giants", text: "Preferred partner to some of the world’s largest companies" },
  { icon: Flame, title: "Dangerous Goods", text: "Safe handling of solid, liquid & gas chemicals" },
  { icon: Thermometer, title: "Temperature Controlled", text: "Finest refrigerated trucks for sensitive cargo" },
  { icon: Weight, title: "Heavy & Over-Dimensional", text: "Expertise in overweight and ODC haulage" },
  { icon: PackageOpen, title: "Break Bulk / Project Cargo", text: "Specialized solutions for complex projects" },
  { icon: Languages, title: "Multi-Lingual Team", text: "Seamless communication in your preferred language" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export default function SurfaceTransportationHighlights() {
  return (
    <>
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-black mb-4">
              Surface Transportation <span className="text-blue-500">Highlights</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Pan-India expertise with specialized capabilities for every cargo type
            </p>
            <div className="h-1 w-56 bg-blue-500 mx-auto mt-6 rounded-full" />
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -12, scale: 1.05 }}
                  className="group relative bg-gradient-to-br from-white to-gray impul-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-400 border border-gray-100 overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                  <div className="flex flex-col items-center text-center space-y-6">
                    <div className="p-5 bg-blue-500 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Icon className="w-12 h-12 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-black">
                      {item.title}
                    </h3>

                    <p className="text-gray-700 leading-relaxed">
                      {item.text}
                    </p>
                  </div>

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "80px" }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="h-1 bg-blue-500 mx-auto mt-8 rounded-full"
                  />
                </motion.div>
              );
            })}
          </motion.div>

          {/* Final Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-center mt-20"
          >
            <div className="inline-flex items-center gap-4 bg-blue-500 text-white px-14 py-8 rounded-full shadow-2xl text-xl font-bold">
              <Truck className="w-10 h-10" />
              India’s Most Reliable Surface Transportation Partner
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}