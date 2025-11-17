'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  Clock, 
  Shield, 
  Zap, 
  Users,
  Target,
  Globe,
  HeadphonesIcon
} from 'lucide-react';

const reasons = [
  { icon: CheckCircle2, title: "Proven Expertise", text: "Exceptional custom brokerage services tailored for all types of manufacturing companies" },
  { icon: Globe, title: "Up-to-Date Knowledge", text: "We stay ahead of constantly changing import regulations and new trade opportunities" },
  { icon: Zap, title: "Fast & Efficient Clearance", text: "Expedited processing to ensure your shipments clear customs swiftly with zero delays" },
  { icon: HeadphonesIcon, title: "Free Expert Advice", text: "Real, honest, and completely free consultation tailored to your specific needs" },
  { icon: Target, title: "Customized Solutions", text: "Bespoke services designed to perfectly match your individual or company requirements" },
  { icon: Shield, title: "Challenge-Driven Team", text: "We love complex cases and find creative, compliant ways to solve them" },
  { icon: Clock, title: "24/7 Monitoring", text: "Real-time tracking of arrival, dispatch, and entire clearance procedure" },
  { icon: Users, title: "Dedicated Support", text: "Professional, timely, and personal assistance at every step of the process" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export default function WhyADLogistics() {
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
              Why <span className="text-blue-500">A.D. LOGISTICS</span> for
              <br className="hidden md:block" /> Custom Clearance?
            </h2>
            <div className="h-1 w-40 bg-blue-500 mx-auto rounded-full" />
          </motion.div>

          {/* Reasons Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -12, scale: 1.05 }}
                  className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-400 border border-gray-100 overflow-hidden"
                >
                  {/* Blue accent on hover */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  
                  <div className="flex flex-col items-center text-center space-y-5">
                    <div className="p-5 bg-blue-500 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-12 h-12 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-black">
                      {reason.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {reason.text}
                    </p>
                  </div>

                  {/* Bottom decorative line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "60px" }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="h-1 bg-blue-500 mx-auto mt-6 rounded-full"
                  />
                </motion.div>
              );
            })}
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-center mt-20"
          >
            <div className="inline-block bg-blue-500 text-white px-12 py-8 rounded-3xl shadow-2xl">
              <p className="text-2xl font-bold flex items-center gap-4">
                <Shield className="w-10 h-10" />
                Your Trusted Customs Clearance Partner in India
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}