import { Ship, Plane } from "lucide-react";
import { motion } from "framer-motion";

export default function SeaAir() {
  const modes = [
    {
      title: "Sea Customs Clearance",
      desc: "Complete sea shipment customs handling including documentation, port processes, container checks, duties, and approvals.",
      icon: <Ship size={50} className="text-blue-600" />,
      color: "border-blue-600",
      glow: "shadow-blue-300"
    },
    {
      title: "Air Customs Clearance",
      desc: "Fastest customs clearance for air cargo: airway bill, scanning, tariff evaluation, and rapid document verification.",
      icon: <Plane size={50} className="text-green-600" />,
      color: "border-green-600",
      glow: "shadow-green-300"
    }
  ];

  return (
    <div className="w-full px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 text-center">
        🚀 Customs Clearance – Sea & Air
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {modes.map((m, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className={`p-6 border-l-8 ${m.color} bg-gradient-to-br from-white to-gray-50 shadow-xl ${m.glow} rounded-2xl`}
          >
            <div className="flex items-center gap-5">
              {m.icon}
              <h2 className="text-2xl font-semibold text-gray-900">
                {m.title}
              </h2>
            </div>

            <p className="text-gray-700 mt-4 leading-relaxed text-lg">
              {m.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
