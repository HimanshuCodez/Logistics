import React from "react";
import { motion } from "framer-motion";

const title = "ABOUT A.D. LOGISTICS";
const heading = `
  A.D. LOGISTICS is a leading name in custom clearance, freight forwarding, and custom consultancy in India. We provide value-added services in the areas of road transport, air and sea freight, logistics, and customs forwarding services. As a fully integrated logistics service provider, we make your logistics network more agile and cost-efficient — whatever your business sector is.
  Our goal is to deliver customized, high-quality, large-scale logistical services and assistance to provide a definite competitive advantage. We are a team of experienced, qualified and highly professional logistics experts. Our hands-on experience, local port knowledge and operations expertise in the field of custom clearance & supply chain logistics services is unparalleled in the industry.
`;
const tagline = "Your competent, reliable, and flexible logistics partner.";
const listItemsLeft = ["Road Transport", "Air Freight", "Sea Freight"];
const listItemsRight = ["Custom Clearance", "Logistics Services", "Supply Chain Solutions"];
const readMoreHref = "#";

export default function AboutADLogistics() {
  return (
    <section className="relative py-12 px-4 md:px-8 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative flex justify-center md:justify-start">
            <motion.div
              initial={{ rotate: -6, x: -10, y: 10, opacity: 0 }}
              whileInView={{ rotate: -6, x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.8 }}
              className="absolute -left-6 -top-6 w-64 h-44 bg-blue-800 rounded-sm transform shadow-lg hidden sm:block"
              style={{ zIndex: 0 }}
            />
            <motion.div
              initial={{ rotate: -3, x: -6, y: 6, opacity: 0 }}
              whileInView={{ rotate: -3, x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.08, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.8 }}
              className="absolute -left-2 -top-2 w-72 h-52 bg-blue-600 rounded-sm transform shadow-2xl hidden sm:block"
              style={{ zIndex: 1 }}
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.8 }}
              className="relative z-10 w-full max-w-sm rounded-md overflow-hidden shadow-2xl"
            >
              <img src="/Logo.jpg" alt="A.D. Logistics" className="w-full h-auto block object-cover" />
            </motion.div>
          </div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h3 className="text-2xl md:text-3xl font-extrabold text-black tracking-wide mb-4">{title}</h3>
            <p className="text-gray-700 leading-relaxed mb-4 whitespace-pre-line">{heading}</p>
            <p className="text-gray-800 font-semibold mb-6">{tagline}</p>
            <h4 className="text-lg font-semibold text-[#2b2b2b] mb-3">Our Services</h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <ul className="space-y-3">
                {listItemsLeft.map((it, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                    <span className="mt-1 text-blue-600 font-bold">›</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {listItemsRight.map((it, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                    <span className="mt-1 text-blue-600 font-bold">›</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={readMoreHref}
              className="inline-block px-6 py-2 rounded border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition"
            >
              READ MORE
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
