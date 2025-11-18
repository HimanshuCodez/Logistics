import { FileText } from "lucide-react";

export default function CustomsClearanceDocs() {
  const docs = [
    {
      title: "Commercial Invoice",
      desc: "Lists product details, quantity, value, and buyer-seller info. It's the base document for export.",
    },
    {
      title: "Packing List",
      desc: "Describes how goods are packed, total number of packages, weight, and dimensions.",
    },
    {
      title: "Shipping Bill",
      desc: "Main document filed with Indian Customs. Required to export goods and generated through ICEGATE.",
    },
    {
      title: "Export License (if required)",
      desc: "Needed if you're shipping restricted or controlled goods as per Indian trade laws.",
    },
    {
      title: "Certificate of Origin",
      desc: "Proves where the goods were made. Needed to meet import country rules or duty benefits.",
    },
    {
      title: "Insurance Certificate",
      desc: "Shows the cargo is insured during transport, covering loss or damage in transit.",
    },
    {
      title: "Letter of Credit / Purchase Order",
      desc: "Confirms buyer's order and payment agreement. Key for verifying the trade deal.",
    },
    {
      title: "GST Invoice",
      desc: "Required for export tax compliance under GST rules. Shows zero-rated tax for most exports.",
    },
    {
      title: "Supporting Certificates",
      desc: "Includes fumigation, phytosanitary, or quality certificates depending on what you're exporting.",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
        Customs Clearance Documents For Export
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {docs.map((item, index) => (
          <div
            key={index}
            className="p-4 border rounded-xl shadow-sm bg-white hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-2 mb-2 text-blue-600 font-semibold">
              <FileText className="w-5 h-5" /> {item.title}
            </div>
            <p className="text-gray-700 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}