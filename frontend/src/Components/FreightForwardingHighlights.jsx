import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const FreightForwardingHighlights = () => {
  const items = [
    "Customized, time definite deliveries such as project moves and next flight out.",
    "Client specific services, available on request, such as quality inspection.",
    "Best Customs clearance service at origin or destination",
    "Flexible routing available for deferred, lower cost programs.",
    "Airport to Airport, Airport to Door, Door to Airport, Door to Door delivery.",
    "Professional cargo handling.",
    "Provide cargo insurance.",
    "Online visibility and tracking."
  ];

  return (
    <motion.div
      className="p-8 bg-white rounded-2xl shadow-lg border border-blue-100 flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="text-3xl font-bold mb-6 text-black border-l-4 border-blue-500 pl-3 mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Freight Forwarding Highlights
      </motion.h2>

      <ul className="space-y-4 w-full max-w-2xl">
        {items.map((text, index) => (
          <motion.li
            key={index}
            className="text-black flex items-center gap-3 justify-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            <Check className="text-blue-500 w-5 h-5" />
            <span>{text}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default FreightForwardingHighlights;
