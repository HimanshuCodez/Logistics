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
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1000&q=80"
                alt="Logistics"
                className="w-full h-auto object-cover"
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
