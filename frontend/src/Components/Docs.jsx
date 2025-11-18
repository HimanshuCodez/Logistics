import { FileText, Package, FileCheck, Shield, ClipboardList } from "lucide-react";

const documents = [
  {
    title: "Bill of Entry",
    desc: "Main import document filed with Indian Customs. Without it, goods can't be cleared.",
    icon: <FileText size={30} className="text-red-500" />
  },
  {
    title: "Commercial Invoice",
    desc: "Shows value, quantity, and seller details. Used to calculate duties and taxes.",
    icon: <ClipboardList size={30} className="text-red-500" />
  },
  {
    title: "Packing List",
    desc: "Lists what's inside each package—helps with checking and unloading the shipment.",
    icon: <Package size={30} className="text-red-500" />
  },
  {
    title: "Bill of Lading / Airway Bill",
    desc: "Issued by the carrier. Acts as proof that goods were shipped and by whom.",
    icon: <FileCheck size={30} className="text-red-500" />
  },
  {
    title: "Import License (If applicable)",
    desc: "Needed if you’re importing restricted items as per Indian trade laws.",
    icon: <FileText size={30} className="text-red-500" />
  },
  {
    title: "Insurance Certificate",
    desc: "Confirms the shipment was insured during transit; covers loss or damage.",
    icon: <Shield size={30} className="text-red-500" />
  }
];

export default function ImportDocsComponent() {
  return (
    <div className="w-full px-4 py-6">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">
        Customs Clearance Documents For Import
      </h1>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {documents.map((doc, index) => (
          <div
            key={index}
            className="p-4 border rounded-xl shadow-sm bg-white hover:shadow-md transition-all cursor-pointer"
          >
            <div className="mb-3">{doc.icon}</div>

            <h2 className="text-lg font-semibold text-gray-900">{doc.title}</h2>
            <p className="text-sm text-gray-600 mt-1 leading-relaxed">
              {doc.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
