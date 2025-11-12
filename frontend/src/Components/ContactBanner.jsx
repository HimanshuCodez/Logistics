import React from "react";
import { PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
export default function ContactBanner() {
  return (
    <div className="w-full flex justify-center bg-red-700 py-10">
      <div className="bg-red-600 rounded-2xl shadow-lg px-4 sm:px-10 py-8 text-center text-white flex flex-col items-center gap-4 w-[90%] md:w-[70%]">
        {/* Top Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6">
          <div className="flex flex-col items-center">
            <div className="bg-white text-red-600 font-bold rounded-lg px-4 py-2 text-sm">
              CALL <br /> 24x7
            </div>
          </div>

          {/* Bouncing Number */}
          <motion.h1
            className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-wider flex items-baseline"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            99&nbsp;3021&nbsp;34&nbsp;
            <motion.span
              className="text-2xl sm:text-4xl md:text-6xl"
              animate={{
                scale: [1, 1.2, 1],
                color: ["#fff", "#ffeb3b", "#fff"],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              44
            </motion.span>
          </motion.h1>
        </div>

        {/* Middle Text */}
        <div className="border-t border-white/50 w-full my-3" />
        <h2 className="text-lg md:text-xl font-semibold">
          For all shifting & logistics solutions
        </h2>
        <p className="text-white/90 text-base md:text-lg flex items-center gap-2 mt-2">
          <PhoneCall className="w-5 h-5 text-yellow-300" />
          Call now to get an instant moving quote!
        </p>
      </div>
    </div>
  );
}
