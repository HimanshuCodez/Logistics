import React from "react";
import { Mail, Phone } from "lucide-react";

const stats = [
  { label: "Shipments Delivered", value: "50,000+" },
  { label: "Countries Served", value: "10+" },
  { label: "Years in Business", value: "20+" },
  { label: "Clients Served", value: "5,000+" },
];

const knowMoreLinks = [
  { name: "Blog", href: "#" },
  { name: "About", href: "#" },
  { name: "Contact Us", href: "#" },
  { name: "Resources", href: "#" },
];

const legalLinks = [
  { name: "Terms & Conditions", href: "#" },
  { name: "Privacy Policy", href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-900 to-black text-white">
      {/* Stats Bar */}

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Newsletter & Locations */}
          <div className="col-span-1 space-y-8">
            <div>
              <h3 className="text-lg font-semibold">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-blue-300 mt-1 text-sm">
                Get the latest logistics news & updates in your inbox.
              </p>
              <form className="mt-4 flex">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-2 rounded-l-md text-gray-800"
                />
                <button
                  type="submit"
                  className="bg-yellow-500 text-blue-900 px-4 py-2 rounded-r-md font-semibold"
                >
                  Subscribe
                </button>
              </form>
            </div>
            <div className="grid grid-cols-1 gap-4 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Our Office</h4>
                <ul className="space-y-1 text-blue-300">
                  <li>
                    Office No:-26,Ground Floor,Citi Tower
                    Plot no:-55,Sec-15, CBD Belapur, Navi Mumbai-400614
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
                    9930213444
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
                  <a
                    href={link.href}
                    className="text-blue-300 hover:text-yellow-400"
                  >
                    {link.name}
                  </a>
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
                  <a
                    href={link.href}
                    className="text-blue-300 hover:text-yellow-400"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            {/* Social media icons can go here */}
          </div>
        </div>

        {/* Disclaimer */}

        {/* Backed by */}
      </div>
    </footer>
  );
};

export default Footer;
