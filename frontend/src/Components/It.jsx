import { motion } from "framer-motion";
import { Server, FileCode, Network, Printer, BarChart4, Database } from "lucide-react";

export default function ITCapabilities() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="w-full bg-gray-50 py-16 flex justify-center px-4 sm:px-8">
      <motion.div
        className="max-w-5xl bg-blue-600 text-white rounded-3xl shadow-2xl p-8 sm:p-12 md:p-16 text-center md:text-left overflow-hidden relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={containerVariants}
      >
        {/* Floating Background */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/cubes.png')",
          }}
        />

        {/* Heading */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 text-yellow-300 relative z-10 text-center"
          variants={itemVariants}
        >
          Our IT Capabilities
        </motion.h1>

        {/* Subheading */}
        <motion.h2
          className="text-xl sm:text-2xl font-semibold mb-4 text-white relative z-10 text-center md:text-left"
          variants={itemVariants}
        >
          PAN-based CHA : Integrated by In-House IT Systems
        </motion.h2>

        {/* List Section */}
        <motion.ul
          className="space-y-4 text-lg sm:text-xl leading-relaxed relative z-10"
          variants={containerVariants}
        >
          <motion.li
            variants={itemVariants}
            className="flex items-start gap-3 sm:gap-4"
          >
            <Network className="w-6 h-6 text-yellow-300 mt-1" />
            Directly connected to <strong>ICEGATE</strong>.
          </motion.li>

          <motion.li
            variants={itemVariants}
            className="flex items-start gap-3 sm:gap-4"
          >
            <FileCode className="w-6 h-6 text-yellow-300 mt-1" />
            Online document filing system.
          </motion.li>

          <motion.li
            variants={itemVariants}
            className="flex items-start gap-3 sm:gap-4"
          >
            <Printer className="w-6 h-6 text-yellow-300 mt-1" />
            Printing <strong>TR6 challan</strong> copy / query sheets through online system.
          </motion.li>

          <motion.li
            variants={itemVariants}
            className="flex items-start gap-3 sm:gap-4"
          >
            <BarChart4 className="w-6 h-6 text-yellow-300 mt-1" />
            Generating monthly / half-yearly / annual reports of import / export shipments.
          </motion.li>

          <motion.li
            variants={itemVariants}
            className="flex items-start gap-3 sm:gap-4"
          >
            <Database className="w-6 h-6 text-yellow-300 mt-1" />
            Generating weekly / monthly / quarterly / half-yearly / annual reports of GOP.
          </motion.li>
        </motion.ul>
      </motion.div>
    </div>
  );
}
