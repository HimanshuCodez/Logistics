import { Ship, Boxes, Globe, Anchor } from "lucide-react";
import { motion } from "framer-motion";

export default function SeaFreightForwarder() {
  const services = [
    {
      title: "Full Container Load (FCL)",
      desc: "Reliable FCL services with end-to-end handling, stuffing, documentation, and global shipping routes.",
      icon: <Boxes size={50} className="text-blue-600" />,
      color: "border-blue-600",
      glow: "shadow-blue-300"
    },
    {
      title: "Less than Container Load (LCL)",
      desc: "Cost-effective LCL consolidation services with secure handling and optimised transit schedules.",
      icon: <Anchor size={50} className="text-green-600" />,
      color: "border-green-600",
      glow: "shadow-green-300"
    },
    {
      title: "Global Ocean Network",
      desc: "Access to worldwide shipping lines ensuring faster routes, better pricing, and reliable transit time.",
      icon: <Globe size={50} className="text-purple-600" />,
      color: "border-purple-600",
      glow: "shadow-purple-300"
    },
    {
      title: "Sea Cargo Documentation",
      desc: "Complete paperwork including BL, invoices, packing list, certificates, and customs documentation.",
      icon: <Ship size={50} className="text-red-600" />,
      color: "border-red-600",
      glow: "shadow-red-300"
    }
  ];

  return (
    <div className="w-full px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
        🌊 Sea Freight Forwarder Services
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className={`p-6 border-l-8 ${s.color} bg-gradient-to-br from-white to-gray-50 shadow-xl ${s.glow} rounded-2xl`}
          >
            <div className="flex items-center gap-5">
              {s.icon}
              <h2 className="text-2xl font-semibold text-gray-900">
                {s.title}
              </h2>
            </div>

            <p className="text-gray-700 mt-4 leading-relaxed text-lg">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
