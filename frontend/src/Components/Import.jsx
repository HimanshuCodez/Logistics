import { FileText, PackageCheck, FileSpreadsheet, FileSignature, ShieldCheck } from "lucide-react";

export default function CustomsImportDocs() {
  const docs = [
    {
      title: "Bill of Entry",
      desc: "Main import document filed with Indian Customs. Without it, goods can't be cleared.",
      icon: FileSpreadsheet,
    },
    {
      title: "Commercial Invoice",
      desc: "Shows value, quantity and seller details. Used to calculate duties and taxes.",
      icon: FileText,
    },
    {
      title: "Packing List",
      desc: "Lists what's inside each package—helps with checking and unloading the shipment.",
      icon: PackageCheck,
    },
    {
      title: "Bill of Lading / Airway Bill",
      desc: "Issued by the carrier. Acts as proof that goods were shipped and by whom.",
      icon: FileSignature,
    },
    {
      title: "Import License (if applicable)",
      desc: "Needed if you're importing restricted items as per DGFT norms.",
      icon: FileText,
    },
    {
      title: "Insurance Certificate",
      desc: "Confirms the shipment is insured—protects against loss or damage in transit.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
        Customs Clearance Documents For Import
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {docs.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="p-4 border rounded-xl shadow-sm bg-white hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-2 mb-2 text-blue-600 font-semibold">
                <Icon className="w-5 h-5" /> {item.title}
              </div>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}