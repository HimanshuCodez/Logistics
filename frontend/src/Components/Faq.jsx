import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqData = {
    "General Logistics": [
        {
            question: "What is A.D. Logistics and what services do you provide?",
            answer: "A.D. Logistics is a leading provider of integrated logistics solutions in India, specializing in custom clearance, freight forwarding, and supply chain management."
        },
        {
            question: "How can I track my shipment?",
            answer: "You can track your shipment in real-time using the tracking number provided on our website's tracking portal or by contacting our customer service team."
        }
    ],
    "Freight Services": [
        {
            question: "What types of freight services do you offer?",
            answer: "We offer a comprehensive range of freight services, including Air Freight, Sea Freight, and Road Transport, to meet all your shipping needs."
        },
        {
            question: "Do you handle oversized or special cargo?",
            answer: "Yes, we have extensive experience in handling project cargo, oversized machinery, and other special shipments. Our team will work with you to create a custom solution."
        }
    ],
    "Customs & Clearance": [
        {
            question: "How do you handle customs clearance?",
            answer: "Our team of experts manages all aspects of customs documentation and compliance to ensure your shipments clear customs smoothly and without delay."
        },
        {
            question: "What documents are required for international shipping?",
            answer: "Required documents typically include a commercial invoice, packing list, bill of lading or air waybill, and any specific permits or licenses. Our team will guide you through the entire process."
        }
    ]
};

const Faq = () => {
    const [activeTab, setActiveTab] = useState('General Logistics');
    const [activeIndex, setActiveIndex] = useState(0);

    const handleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="bg-white py-16 sm:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title */}
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-blue-900">Frequently Asked Logistics Questions</h2>
                    <p className="mt-4 text-lg text-gray-600">Find answers to common questions about our logistics services.</p>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Tabs */}
                    <div className="col-span-1">
                        <ul className="space-y-2">
                            {Object.keys(faqData).map((tab) => (
                                <li key={tab}>
                                    <button
                                        onClick={() => { setActiveTab(tab); setActiveIndex(0); }}
                                        className={`w-full text-left px-4 py-3 rounded-lg font-semibold text-lg transition ${activeTab === tab ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-100'}`}
                                    >
                                        {tab}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Accordion */}
                    <div className="col-span-2">
                        <div className="space-y-4">
                            {faqData[activeTab].map((item, index) => (
                                <div key={index} className="border-b border-gray-200 pb-4">
                                    <button
                                        className="w-full flex justify-between items-center text-left"
                                        onClick={() => handleAccordion(index)}
                                    >
                                        <span className="text-lg font-semibold text-blue-900">{item.question}</span>
                                        {activeIndex === index ? <Minus className="text-blue-600" /> : <Plus className="text-gray-500" />}
                                    </button>
                                    <AnimatePresence>
                                        {activeIndex === index && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="mt-4 text-gray-600 overflow-hidden"
                                            >
                                                {item.answer}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
