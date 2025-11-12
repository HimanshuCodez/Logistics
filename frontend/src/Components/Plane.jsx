import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Ship, Truck, Trophy, Globe } from 'lucide-react';

/*
  Plane.jsx
  - Animated statistics component for a logistics company using Tailwind CSS + Framer Motion
  - Numbers count up smoothly when component mounts
  - Replace icons or adjust colors as you wish
*/

const statsData = [
  { icon: Globe, label: 'Years of Experience', value: 25, suffix: '+', color: 'text-pink-600' },
  { icon: Users, label: 'Logistics Experts', value: 300, suffix: '+', color: 'text-pink-600' },
  { icon: Ship, label: 'Countries Covered', value: 120, suffix: '+', color: 'text-pink-600' },
  { icon: Trophy, label: 'Tons of Goods Moved', value: 1500, suffix: 'K+', color: 'text-pink-600' },
  { icon: Award, label: 'Satisfied Clients', value: 1200, suffix: '+', color: 'text-pink-600' },
  { icon: Truck, label: 'Fleets', value: 500, suffix: '+', color: 'text-pink-600' },
];

const StatCard = ({ icon: Icon, label, value, suffix, color }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1500;
    const increment = end / (duration / 16);

    const animate = () => {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    requestAnimationFrame(animate);
  }, [value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition"
    >
      <div className={`mb-3 ${color}`}>
        <Icon size={42} />
      </div>
      <h3 className={`text-3xl font-extrabold ${color}`}>{count}{suffix}</h3>
      <p className="text-gray-600 font-medium mt-1 text-center">{label}</p>
    </motion.div>
  );
};

const Plane = () => {
  return (
    <section className="bg-[#f9aeaf]/20 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Global Reach and Achievements</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our commitment to excellence has propelled us to the forefront of the logistics industry, delivering satisfaction and success to clients worldwide.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {statsData.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </section>
  );
};

export default Plane;
