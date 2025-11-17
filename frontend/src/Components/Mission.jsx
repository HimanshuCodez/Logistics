'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Eye, 
  HeartHandshake, 
  Sparkles,
  CheckCircle2,
  Clock,
  Zap,
  ShieldCheck
} from 'lucide-react';

export default function MissionVisionValues() {
  return (
    <>
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Our Mission, Vision <span className="text-blue-500">& Values</span>
            </h2>
            <div className="h-1 w-48 bg-blue-500 mx-auto rounded-full" />
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-500 rounded-2xl inline-block">
                <Target className="w-10 h-10 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">Our Mission</h3>
            <p className="text-lg md:text-xl leading-9 text-gray-800">
              We aim to be a recognised player in providing high quality logistic solutions and build a trustworthy, long lasting relationship with our customers.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16 text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-500 rounded-2xl inline-block">
                <Eye className="w-10 h-10 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">Our Vision</h3>
            <p className="text-lg md:text-xl leading-9 text-gray-800">
              A.D.LOGISTICS shall be the world leader in providing logistic services of world class standards and shall be the first choice for the customers. Behind this vision stand our main values: innovation, trust and professionalism; based on which we are confident of achieving success.
            </p>
          </motion.div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold text-center text-black mb-12">
              Our Core Values
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: HeartHandshake, text: "ACT WITH INTEGRITY" },
                { icon: Sparkles, text: "EXCEED CUSTOMER EXPECTATIONS" },
                { icon: Zap, text: "CONTINUOUS IMPROVEMENT" },
                { icon: ShieldCheck, text: "EFFICIENCY AND FLEXIBILITY" },
                { icon: Clock, text: "PUNCTUALITY AND TIMELINESS" },
                { icon: CheckCircle2, text: "100% RELIABILITY" }
              ].map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-100"
                  >
                    <div className="p-4 bg-blue-500 rounded-2xl inline-block mb-5 group-hover:scale-110 transition-transform">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <p className="text-xl font-bold text-black">
                      {value.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}