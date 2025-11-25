import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
      
      {/* Soft glowing circles */}
      <div className="absolute top-10 left-10 w-56 h-56 bg-blue-400/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-300/10 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-6 py-20 lg:py-22 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <motion.h1
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight"
            >
              <span className="text-blue-400 drop-shadow-lg">Delivering</span><br />
              <span className="text-blue-400 drop-shadow-lg">Excellence</span><br />
              <span className="text-blue-400 drop-shadow-lg">In Every Mile</span>
            </motion.h1>

            <p className="text-gray-200 text-lg lg:text-xl leading-relaxed max-w-xl">
              Fast, secure, and reliable logistics services ensuring precision across
              road, air, and sea transport.
            </p>

            <p className="text-gray-200 text-base lg:text-lg leading-relaxed max-w-xl">
              We offer <span className="text-white font-semibold">Custom Clearance, Freight Forwarding, Warehousing, and Surface Transport</span> with unmatched efficiency and <span className="text-white font-semibold">100% reliability</span>.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-400 hover:bg-blue-500 text-blue-900 font-semibold px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-blue-400/50 transition-all"
              >
                Get a Quote
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-blue-900 font-semibold px-8 py-4 rounded-xl text-lg transition-all"
              >
                Track Shipment
              </motion.button>
            </div>
          </motion.div>

          {/* RIGHT IMAGE WITH ANIMATION */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative lg:-translate-y-10"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="data:image/jpeg;base64,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"
                alt="Logistics"
                className="w-full mb-20 h-auto object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
            </motion.div>

            {/* Extra glowing accents */}
            <div className="absolute -top-5 -right-5 w-28 h-28 bg-blue-400/30 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-white/10 rounded-full blur-3xl"></div>
          </motion.div>

        </div>
      </div>

      {/* Bottom soft fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-950 to-transparent"></div>
    </div>
  );
}
