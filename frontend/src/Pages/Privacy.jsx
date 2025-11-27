import React from 'react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const Privacy = () => {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  const policies = [
    {
      title: '1. Privacy Policy',
      sections: [
        {
          subtitle: '1.1 Data Collection',
          details: 'AD LOGISTICS collects:',
          points: [
            'Name, phone number, email',
            'Pickup and delivery address',
            'Shipment details (weight, value, type)',
            'Payment details',
            'Device/IP information for security',
          ],
        },
        {
          subtitle: '1.2 Use of Information',
          details: 'Customer data is used for:',
          points: [
            'Booking & shipment processing',
            'Delivery updates',
            'Customer support',
            'Service improvement',
            'Compliance with legal requirements',
          ],
        },
        {
          subtitle: '1.3 Data Protection',
          points: [
            'All information is kept confidential.',
            'We do NOT sell or rent customer data.',
            'Data is shared only when required for operational purposes.',
          ],
        },
        {
          subtitle: '1.4 Data Sharing',
          details: 'May be shared with:',
          points: [
            'Delivery partners',
            'Warehousing partners',
            'Payment systems',
            'Government agencies (only when required)',
          ],
        },
        {
          subtitle: '1.5 Cookies',
          details: 'Used for:',
          points: ['Website performance', 'User experience', 'Analytics (Customers may disable cookies.)'],
        },
        {
          subtitle: '1.6 User Rights',
          details: 'Users may request:',
          points: ['Data deletion', 'Correction of information', 'Opt-out from promotions'],
        },
      ],
    },
    {
      title: '2. Shipping & Delivery Policy',
      sections: [
        {
          subtitle: '2.1 Order Processing',
          points: ['Orders are processed after verification.', 'Pickup arrangements depend on availability and route.'],
        },
        {
          subtitle: '2.2 Transit Time',
          details: 'Delivery time depends on:',
          points: ['Distance', 'Traffic & weather', 'Local checks or restrictions'],
          note: 'Delays caused by external factors are not the responsibility of AD LOGISTICS.',
        },
        {
          subtitle: '2.3 Packaging Rules',
          points: [
            'Customer must ensure secure packaging.',
            'AD LOGISTICS is not liable for damage due to improper packaging.',
          ],
        },
        {
          subtitle: '2.4 Restricted Goods',
          details: 'We do not transport:',
          points: [
            'Illegal goods',
            'Explosives',
            'Hazardous chemicals',
            'Drugs/Narcotics',
            'Perishable goods (unless specifically agreed)',
          ],
        },
      ],
    },
    {
      title: '3. Cancellation Policy',
      sections: [
        {
          subtitle: '3.1 Before Pickup',
          points: ['Cancellation is allowed before pickup is completed.', 'No cancellation fee before pickup.'],
        },
        {
          subtitle: '3.2 After Pickup',
          points: ['Once the shipment is picked up, cancellation is not allowed.'],
        },
      ],
    },
    {
      title: '4. Liability Policy',
      sections: [
        {
          subtitle: '4.1 Limited Liability',
          details: 'AD LOGISTICS’ liability is limited to:',
          points: ['Declared value of shipment or', 'Maximum limit allowed by law (Whichever is lower.)'],
        },
        {
          subtitle: '4.2 Claim Process',
          details: 'Claims must be filed within 24–48 hours with:',
          points: ['Photos', 'Videos', 'Invoice copy'],
          note: 'No claims accepted for: Natural disasters, Delays caused by external agencies, Poor packaging by customer.',
        },
      ],
    },
    {
      title: '5. Force Majeure Policy',
      details: 'AD LOGISTICS is not responsible for delays or losses caused by:',
      points: ['Natural disasters', 'Strikes', 'Riots', 'War', 'Government restrictions', 'Accidents beyond control'],
    },
    {
      title: '6. Communication Policy',
      sections: [
        {
          subtitle: '6.1 Support',
          details: 'We provide support through:',
          points: ['Phone', 'WhatsApp', 'Email', 'Chat (if applicable)'],
        },
        {
          subtitle: '6.2 Service Notifications',
          details: 'Customers may receive:',
          points: ['Delivery updates', 'Pickup confirmations', 'Service alerts', 'Verification messages'],
          note: 'Promotional messages are optional.',
        },
      ],
    },
    {
      title: '7. Amendments',
      details: 'AD LOGISTICS may update these policies at any time. Changes take effect immediately once published.',
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
            COMPANY POLICIES
          </h1>
          <p className="mt-2 text-lg text-gray-500">Your Privacy and Our Commitment</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {policies.map((policy, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white shadow-xl rounded-2xl overflow-hidden p-6 md:p-8"
            >
              <h2 className="text-3xl font-bold text-blue-700 mb-6 border-b-2 border-blue-200 pb-3">
                {policy.title}
              </h2>
              {policy.details && <p className="text-gray-600 mb-4">{policy.details}</p>}
              {policy.points && (
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {policy.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
              {policy.sections && (
                <div className="space-y-6">
                  {policy.sections.map((section, i) => (
                    <div key={i}>
                      <h3 className="text-xl font-semibold text-blue-600 mb-2">{section.subtitle}</h3>
                      {section.details && <p className="text-gray-600 mb-2">{section.details}</p>}
                      <ul className="list-disc list-inside ml-4 space-y-1 text-gray-600">
                        {section.points && section.points.map((point, pIndex) => <li key={pIndex}>{point}</li>)}
                      </ul>
                      {section.note && <p className="text-gray-500 italic mt-3">{section.note}</p>}
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;
