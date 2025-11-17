'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, 
  Zap, 
  FileCheck, 
  PhoneCall, 
  Truck, 
  ShieldCheck,
  Timer,
  HeadphonesIcon
} from 'lucide-react';

const highlights = [
  { icon: Timer, title: "Urgent Checklist", text: "Within 90 minutes" },
  { icon: Zap, title: "Same-Day Clearance", text: "If all documents are ready" },
  { icon: FileCheck, title: "Trained Technical Staff", text: "For precise documentation & clearance" },
  { icon: Clock, title: "Air Shipments", text: "Cleared in 6 hours with zero demurrage" },
  { icon: Truck, title: "Door-to-Door Service", text: "Reliable and lightning fast" },
  { icon: ShieldCheck, title: "ODC & Heavy Cargo", text: "Specialized handling expertise" },
  { icon: FileCheck, title: "Minimum Paperwork", text: "Streamlined & hassle-free process" },
  { icon: HeadphonesIcon, title: "24/7 Call Assistance", text: "We’re always here for you" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export default function CustomClearanceHighlights() {
  return (
    <>
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-black mb-4">
              Custom Clearance <span className="text-blue-500">Highlights</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Speed, Precision & Reliability – That’s what sets A.D. Logistics apart
            </p>
            <div className="h-1 w-48 bg-blue-500 mx-auto mt-6 rounded-full" />
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -12, scale: 1.06 }}
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-400 border border-gray-100 overflow-hidden"
                >
                  {/* Top blue bar on hover */}
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  
                  <div className="flex flex-col items-center text-center space-y-5">
                    <div className="p-5 bg-blue-500 rounded-2xl group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-12 h-12 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-black">
                      {highlight.title}
                    </h3>

                    <p className="text-lg font-semibold text-blue-600">
                      {highlight.text}
                    </p>
                  </div>

                  {/* Bottom accent */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "80px" }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="h-1 bg-blue-500 mx-auto mt-6 rounded-full"
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
            <div className="inline-flex items-center gap-4 bg-blue-500 text-white px-12 py-7 rounded-full shadow-2xl text-xl font-bold">
              <Zap className="w-10 h-10" />
              Fastest Customs Clearance in the Industry
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}