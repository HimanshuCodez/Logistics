'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Package, Ship, Truck, CheckCircle2 } from 'lucide-react';

const experiences = [
  { icon: Package, text: "Handled Second-hand Machineries for Pune Power Project" },
  { icon: Ship, text: "Export of more than 50 TEUs of Project & Machinery Cargoes per month" },
  { icon: Truck, text: "Custom Clearance Import of 500 TEUs per month" },
  { icon: Package, text: "Handled 200 TEUs Gypsum Powder" },
  { icon: Package, text: "Handled 100 TEUs Agro Fertilizer Product" },
  { icon: Package, text: "Handled 200 TEUs Calcium Carbonate Powder" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export default function OurExperience() {
  return (
    <>
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Our <span className="text-blue-500">Experience</span>
            </h2>
            <div className="h-1 w-48 bg-blue-500 mx-auto rounded-full" />
          </motion.div>

          {/* Experience List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto"
          >
            {experiences.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="group flex items-start gap-6 bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="p-4 bg-blue-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-lg md:text-xl font-semibold text-black flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-blue-500" />
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Final Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-center mt-20"
          >
            <div className="inline-block bg-blue-500 text-white px-16 py-10 rounded-3xl shadow-2xl">
              <p className="text-3xl md:text-4xl font-bold">
                OBSESSED WITH <span className="text-white">EXCELLENCE</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}