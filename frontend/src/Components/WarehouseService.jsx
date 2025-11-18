import React from "react";
import { motion } from "framer-motion";
import { PackageSearch, Warehouse } from "lucide-react";

export default function WarehouseService() {
  return (
    <div className="w-full flex justify-center px-4 py-10 bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-6 md:p-10 border border-gray-200"
      >
        <div className="flex items-center gap-3 mb-6">
          <Warehouse className="w-10 h-10 text-green-700" />
          <h2 className="text-3xl font-extrabold text-green-800 uppercase">
            Warehouse Services
          </h2>
        </div>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          We provide secure and highly efficient <span className="font-semibold text-green-700">Bonded & Non-Bonded Warehouse Services</span> designed to support smooth import, export, and domestic logistics operations.
        </p>

        <div className="mt-4 space-y-4">
          <div className="flex items-start gap-3 p-4 bg-green-50 rounded-xl border border-green-200">
            <PackageSearch className="w-6 h-6 text-green-700 mt-1" />
            <p className="text-gray-800 text-lg"><span className="font-semibold">Bonded Warehouse:</span> Store imported goods without paying duties until clearance.</p>
          </div>

          <div className="flex items-start gap-3 p-4 bg-green-50 rounded-xl border border-green-200">
            <PackageSearch className="w-6 h-6 text-green-700 mt-1" />
            <p className="text-gray-800 text-lg"><span className="font-semibold">Non-Bonded Warehouse:</span> Ideal for domestic goods & fast-moving logistics.</p>
          </div>

          <div className="flex items-start gap-3 p-4 bg-green-50 rounded-xl border border-green-200">
            <PackageSearch className="w-6 h-6 text-green-700 mt-1" />
            <p className="text-gray-800 text-lg"><span className="font-semibold">24/7 Security & Monitoring</span> to ensure goods safety.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}