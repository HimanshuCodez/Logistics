import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function EnquiryForm() {
  return (
    <div className="w-full max-w-md md:max-w-xl lg:max-w-2xl mx-auto p-4 md:p-8 bg-green-700 rounded-2xl shadow-lg text-white">
      <h2 className="text-2xl font-bold mb-4">Enquiry Form</h2>

      <form className="space-y-4">
        <div>
          <label className="text-sm font-semibold">Your Name:</label>
          <input
            type="text"
            placeholder="First Name"
            className="w-full mt-1 p-3 rounded-lg bg-white text-black focus:outline-none"
          />
        </div>

        <div>
          <label className="text-sm font-semibold">Your Phone:</label>
          <input
            type="text"
            placeholder="Phone"
            className="w-full mt-1 p-3 rounded-lg bg-white text-black focus:outline-none"
          />
        </div>

        <div>
          <label className="text-sm font-semibold">Company Name:</label>
          <input
            type="text"
            placeholder="Company Name"
            className="w-full mt-1 p-3 rounded-lg bg-white text-black focus:outline-none"
          />
        </div>

        <div>
          <label className="text-sm font-semibold">Your Email:</label>
          <input
            type="email"
            placeholder="Email"
            className="w-full mt-1 p-3 rounded-lg bg-white text-black focus:outline-none"
          />
        </div>

        <div>
          <label className="text-sm font-semibold">Services:</label>
          <select className="w-full mt-1 p-3 rounded-lg bg-white text-black focus:outline-none">
            <option>Select</option>
            <option>Consulting</option>
            <option>Documentation</option>
            <option>Custom Services</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-semibold">Requirements:</label>
          <textarea
            placeholder="Requirements"
            className="w-full mt-1 p-3 rounded-lg bg-white text-black h-24 focus:outline-none"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full flex items-center justify-center gap-2 bg-white text-green-700 font-semibold p-3 rounded-lg shadow-md"
        >
          <Send className="w-5 h-5" /> Submit
        </motion.button>
      </form>
    </div>
  );
}
