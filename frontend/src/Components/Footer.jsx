import React from "react";
import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { label: "Shipments Delivered", value: "50,000+" },
  { label: "Countries Served", value: "10+" },
  { label: "Years in Business", value: "20+" },
  { label: "Clients Served", value: "5,000+" },
];

const knowMoreLinks = [
  
  { name: "Home", Link: "/" },
  { name: "About", Link: "#" },
  { name: "Contact Us", Link: "/contact" },
];

const legalLinks = [
  { name: "Terms & Conditions", Link: "/terms" },
  { name: "Privacy Policy", Link: "/privacy" },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-900 to-black text-white">
      {/* Stats Bar */}
      <div className="bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <p className="text-4xl font-bold text-yellow-400">
                  {stat.value}
                </p>
                <p className="mt-1 text-blue-100 text-sm uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Newsletter & Locations */}
          <div className="col-span-1 space-y-8">
           <div className="col-span-1">
  <div className="flex items-center gap-4">
    <img
      src="/Logo.jpg"
      alt="AD Logistics Logo"
      className="h-24 w-auto"
    />

    <p className="text-blue-300 text-sm">
      Delivering trusted logistics, freight forwarding, and customs clearance services since 2011.
      We move goods with precision, reliability, and speed — anywhere, anytime.
    </p>
  </div>
</div>

            <div className="grid grid-cols-1 gap-4 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Our Office</h4>
                <ul className="space-y-1 text-blue-300">
                  <li>
                   Office number 412 A wings Citi tower sector 15 CBD Belapur Navi Mumbai Maharashtra 400614
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Contact</h4>
                <div className="space-y-2 text-blue-300">
                
                  <a
                    href="tel:9930213444"
                    className="flex items-center hover:text-yellow-400"
                  >
                    <Phone size={16} className="mr-2" />
                    9930213444, 9987444773
                  </a>
                  <a
                    href="mailto:sales@adlogistics.co.in"
                    className="flex items-center hover:text-yellow-400"
                  >
                    <Mail size={16} className="mr-2" />
                    sales@adlogistics.co.in
                  </a>
                  <a
                    href="mailto:info@adlogistics.co.in"
                    className="flex items-center hover:text-yellow-400"
                  >
                    <Mail size={16} className="mr-2" />
                    info@adlogistics.co.in
                  </a>
                </div>
                <div className="mt-4">
                  <a
                    href="https://www.adlogistics.co.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-300 hover:text-yellow-400"
                  >
                    www.adlogistics.co.in
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {knowMoreLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.Link}
                    className="text-blue-300 hover:text-yellow-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.Link}
                    className="text-blue-300 hover:text-yellow-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Social media icons can go here */}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-blue-800 pt-8 text-center text-sm text-blue-300">
          <p>© 2011–2025 AD Logistics Clearance Pvt. Ltd. | All Rights Reserved</p>
        </div>

        {/* Disclaimer */}

        {/* Backed by */}
      </div>
    </footer>
  );
};

export default Footer;
