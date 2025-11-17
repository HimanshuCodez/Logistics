

import React from 'react';
import { motion } from 'framer-motion';

export default function WhyADLogisticsSurfaceTransportation() {
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
            <h2 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Why <span className="text-blue-500">A.D. LOGISTICS</span> for
              <br className="hidden md:block" /> Surface Transportation?
            </h2>
            <div className="h-1 w-48 bg-blue-500 mx-auto mt-8 rounded-full" />
          </motion.div>

          {/* Exact paragraph – no changes, no additions */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="max-w-5xl mx-auto text-center"
          >
            <p className="text-lg md:text-xl leading-9 text-gray-800">
              We specialise in the transportation of goods across India. We offer an exceptional value for money and 'peace of mind' service, enhanced by our reliable, courteous and professional team. We aim to build long term relationships with all of our customers - we offer the same high level of service whether you require our transport services daily, weekly, monthly or yearly. We pride ourselves in providing a tailor-made, cost effective solution, whatever your general or specialist haulage requirements are.
            </p>
          </motion.div>

          {/* Optional badge (remove if you want pure paragraph only) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-center mt-20"
          >
            <div className="inline-flex items-center gap-4 bg-blue-500 text-white px-12 py-7 rounded-full shadow-2xl text-xl font-semibold">
              Your Trusted Pan-India Surface Transportation Partner
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}