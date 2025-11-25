import React from 'react';
import { motion } from 'framer-motion';

const Terms = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  const sections = [
    {
      title: '1. Introduction',
      content:
        'Welcome to AD LOGISTICS. By using our transportation, shipping, warehousing, or any other logistics services, you agree to comply with the following Terms & Conditions. These terms apply to all clients, vendors, and partners associated with AD LOGISTICS.',
    },
    {
      title: '2. Services Offered',
      content: [
        'Transportation & cargo movement',
        'Last-mile delivery',
        'Warehousing & storage',
        'Freight forwarding',
        'Parcel & courier services',
        'Supply chain management',
      ],
      note: 'AD LOGISTICS reserves the right to modify, suspend, or discontinue any service at any time.',
    },
    {
      title: '3. Booking & Order Confirmation',
      content: [
        'All bookings must be made through our official platform, email, or registered contact number.',
        'A booking is considered confirmed only after written acknowledgment from AD LOGISTICS.',
        'Clients must provide accurate shipment details (weight, dimensions, value, category, etc.).',
      ],
    },
    {
      title: '4. Shipment Packaging',
      content: [
        'Customers are responsible for proper and secure packaging of goods.',
        'AD LOGISTICS is not liable for damage caused due to poor/inadequate packaging.',
        'Hazardous, illegal, or restricted items are strictly prohibited.',
      ],
    },
    {
      title: '5. Delivery & Transit Time',
      content: [
        'Estimated delivery dates are approximate and may vary due to traffic, weather, customs, government checks, or operational issues.',
        'AD LOGISTICS will not be responsible for delays beyond its control.',
      ],
    },
    {
      title: '6. Liability & Claims',
      content: [
        'AD LOGISTICS’ liability is limited to the declared value or the maximum liability allowed under applicable law.',
        'Claims must be reported within 24–48 hours of delivery with complete proof (photos, videos, invoice).',
        'No claims will be accepted for:',
      ],
      subItems: ['Improper packaging', 'Natural disasters (Force Majeure)', 'Delays caused by third-party agencies'],
    },
    {
      title: '7. Payment Terms',
      content: [
        'Payment must be made through approved modes (UPI, Bank Transfer, Cash, Invoice).',
        'For credit clients, payment is due as per the agreed billing cycle.',
        'Late payments may include interest or suspension of services.',
      ],
    },
    {
      title: '8. Cancellation & Refunds',
      content: [
        'Orders can be canceled before dispatch. Once shipped, cancellation is not possible.',
        'Refunds (if applicable) will be processed via the original payment mode within 7–14 working days.',
        'Refunds are not applicable for:',
      ],
      subItems: ['Delays caused by external factors', 'Incorrect shipment details provided by the customer'],
    },
    {
      title: '9. Customer Responsibilities',
      content: ['Customers must:'],
      subItems: [
        'Provide correct pickup/delivery addresses',
        'Ensure legal compliance for shipped items',
        'Cooperate with delivery staff for verification',
        'Pay all applicable charges, taxes, and duties',
      ],
    },
    {
      title: '10. Confidentiality',
      content: 'AD LOGISTICS respects client privacy and ensures all shipment-related information is kept confidential, except when required by law enforcement or government authorities.',
    },
    {
      title: '11. Force Majeure',
      content: 'AD LOGISTICS is not liable for failure or delay caused by events beyond control, including:',
      subItems: ['Natural disasters', 'Strikes', 'Accidents', 'Government restrictions', 'War or riots'],
    },
    {
      title: '12. Governing Law',
      content: 'These Terms & Conditions are governed by the laws of India. Any disputes will be settled under the jurisdiction of the local courts where AD LOGISTICS operates.',
    },
    {
      title: '13. Amendments',
      content: 'AD LOGISTICS reserves the right to update or modify these Terms & Conditions at any time without prior notice.',
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 tracking-tight">
            TERMS & CONDITIONS
          </h1>
          <p className="mt-2 text-lg text-gray-500">Welcome to AD LOGISTICS</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white shadow-xl rounded-2xl overflow-hidden"
        >
          {sections.map((section, index) => (
            <motion.section
              key={index}
              variants={itemVariants}
              className={`p-6 md:p-8 ${index < sections.length - 1 ? 'border-b border-gray-200' : ''}`}
            >
              <h2 className="text-2xl font-semibold text-blue-700 mb-4">{section.title}</h2>
              {Array.isArray(section.content) ? (
                <>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {section.content.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  {section.subItems && (
                    <ul className="list-circle list-inside ml-6 mt-2 space-y-1 text-gray-500">
                      {section.subItems.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {section.note && <p className="text-gray-600 mt-4 italic">{section.note}</p>}
                </>
              ) : (
                <p className="text-gray-600 leading-relaxed">{section.content}</p>
              )}
            </motion.section>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;
