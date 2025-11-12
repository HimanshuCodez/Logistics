import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const listItemsLeft = [
  "Handled Second hand Machineries for Pune power project",
  "Handled Export of more than 50 TEU’s of Project & Machinery Cargoes per Month.",
  "Custom clearance Import of 500 TEU’S Per Months."
];
const listItemsRight = [
  "Handled 200 TEU’s Gypsum Powder.",
  "Handled 100 TEU’s Agro Fertilizer Product.",
  "Handled 200 TEU’s Calcium Carbonate Powder"
];

const AboutUs = ({
  title = "TOTAL LOGISTICS SOLUTION",
  heading = "As a conglomerate, we plan a global outreach for businesses, propelling growth and recognition. For over 20 years, our worldwide presence and a complex understanding of the global trade system has made us a reliable associate with a diverse clientele.",
  tagline = "Big dreams? No problem; possibility lies ahead.",
  readMoreHref = "#",
}) => {
  const listContainerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="relative py-12 px-4 md:px-8 lg:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative flex justify-center md:justify-start overflow-hidden">
            <motion.div
              initial={{ rotate: -6, x: -10, y: 10, opacity: 0 }}
              whileInView={{ rotate: -6, x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.8 }}
              className="absolute -left-8 -top-8 w-80 h-56 bg-blue-800 rounded-lg transform shadow-lg hidden sm:block"
              style={{ zIndex: 0 }}
            />
            <motion.div
              initial={{ rotate: -3, x: -6, y: 6, opacity: 0 }}
              whileInView={{ rotate: -3, x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.08, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.8 }}
              className="absolute -left-3 -top-3 w-96 h-64 bg-blue-600 rounded-lg transform shadow-2xl hidden sm:block"
              style={{ zIndex: 1 }}
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.8 }}
              className="relative z-10 w-full max-w-lg rounded-lg overflow-hidden shadow-2xl border-4 border-white"
            >
              <img src="https://www.pratikgroup.co.in/assets/images/about-us-img-1.png" alt="about" className="w-full h-auto block object-cover" />
            </motion.div>
          </div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-wide mb-4 bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
              {title}
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">{heading}</p>
            <p className="text-gray-800 font-semibold mb-6 italic">{tagline}</p>
            <h4 className="text-xl font-bold text-gray-800 mb-4">Our Experience</h4>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-8"
              variants={listContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <ul className="space-y-3">
                {listItemsLeft.map((it, idx) => (
                  <motion.li
                    key={idx}
                    variants={listItemVariants}
                    className="flex items-start gap-3 p-2 rounded-lg transition-all"
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{it}</span>
                  </motion.li>
                ))}
              </ul>
              <ul className="space-y-3">
                {listItemsRight.map((it, idx) => (
                  <motion.li
                    key={idx}
                    variants={listItemVariants}
                    className="flex items-start gap-3 p-2 rounded-lg transition-all"
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{it}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              href={readMoreHref}
              className="inline-block px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow-md transition-transform"
            >
              READ MORE
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
