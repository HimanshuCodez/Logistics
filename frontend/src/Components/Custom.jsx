import { CheckCircle } from "lucide-react";

export default function CustomConsultancy() {
  const items = [
    "Obtaining IEC number",
    "Attending DGFT related matters",
    "Arranging chartered engineers for customs valuation",
    "Appeal related matters",
    "Completion of Drawback and refund",
    "SVB Registration and finalization",
    "Project import registration, reconciliation and finalization",
    "Declaration of correct HSN",
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold text-blue-500 mb-4 text-center">Custom Consultancy Highlights</h2>

      <div className="space-y-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-3 p-3 border rounded-xl hover:shadow transition-all bg-gray-50"
          >
            <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0" />
            <p className="text-black text-base">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
