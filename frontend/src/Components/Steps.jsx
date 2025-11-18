import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, CheckCircle2 } from "lucide-react";

export default function CustomsClearanceSteps() {
  const steps = [
    {
      title: "Shipment Arrives and Documents Are Submitted",
      desc:
        "Once your goods arrive at port or airport, key papers like invoices, packing lists, and permits are submitted for clearance.",
    },
    {
      title: "Customs Reviews the Documents",
      desc:
        "Authorities check your paperwork to make sure everything matches the goods and follows the import-export rules.",
    },
    {
      title: "Duty and Tax Are Assessed",
      desc:
        "Customs calculates the duties, GST, and other taxes you need to pay based on the shipment type and value.",
    },
    {
      title: "Shipment May Be Inspected",
      desc:
        "Some shipments are picked for inspection. Goods are checked physically to confirm what’s written in the documents.",
    },
    {
      title: "Payment of Duties and Taxes",
      desc:
        "After review, you pay all applicable charges. Your agent usually takes care of this on your behalf.",
    },
    {
      title: "Clearance Is Granted",
      desc:
        "Once payment is done and checks are clear, customs gives the green signal. Your goods are officially cleared.",
    },
    {
      title: "Goods Are Delivered",
      desc:
        "After clearance, goods are moved from the port or CFS and handed over for final delivery.",
    },
  ];

  return (
    <div className="w-full flex justify-center bg-gray-100 py-10 px-4">
      <div className="w-full max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 text-center mb-10 uppercase">
          Customs Clearance Process
        </h2>

        <div className="space-y-10">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white w-full p-6 md:p-8 rounded-2xl shadow-lg border border-blue-100"
              >
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle2 className="text-blue-600 w-7 h-7" />
                  <h3 className="text-xl md:text-2xl font-bold text-black">
                    {index + 1}. {step.title}
                  </h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">{step.desc}</p>
              </motion.div>

              {index !== steps.length - 1 && (
                <ArrowDown className="w-8 h-8 text-blue-600 my-4 animate-bounce" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
