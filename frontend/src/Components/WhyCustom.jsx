'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function WhyADLogisticsConsultancy() {
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
              <br className="hidden md:block" /> Custom Consultancy?
            </h2>
            <div className="h-1 w-48 bg-blue-500 mx-auto mt-8 rounded-full" />
          </motion.div>

          {/* Main Paragraph – exactly as you gave */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="max-w-5xl mx-auto text-center"
          >
            <p className="text-lg md:text-xl leading-9 text-gray-800">
              In an era of rapidly emerging global markets, tight budgets, and scarce resources, maintaining compliance with customs requirements while minimising duty and related charges is critical to maintaining a competitive advantage. Our detailed, non-intrusive reviews of your organisation’s import and export activities will identify potential savings opportunities and recover overpaid duties. In complex situations, A.D.LOGISTICS will prepare and secure favourable customs rulings prior to submitting refund requests, thus protecting your compliance with Customs regulations. Our seasoned professionals have years of experience supporting premier global companies in all aspects of customs compliance and operational effectiveness.
            </p>
          </motion.div>

          {/* Optional decorative badge (you can remove if you want pure text) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-center mt-20"
          >
            <div className="inline-flex items-center gap-4 bg-blue-500 text-white px-12 py-7 rounded-full shadow-2xl text-xl font-semibold">
              Strategic Customs Consultancy – Zero Risk, Maximum Savings
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}