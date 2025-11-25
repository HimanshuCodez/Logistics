import { Send } from "lucide-react";
import React, { useState } from "react";

export default function EnquiryForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("Select");
  const [requirements, setRequirements] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Enquiry from ${name}`;
    const body = `
      Name: ${name}
      Phone: ${phone}
      Company: ${company}
      Email: ${email}
      Service: ${service}
      Requirements: ${requirements}
    `;

    const mailtoLink = `mailto:info@adlogistics.co.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label className="text-sm font-semibold">Your Phone:</label>
          <input
            type="text"
            placeholder="Phone"
            className="w-full mt-1 p-3 rounded-lg bg-white text-black focus:outline-none"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div>
          <label className="text-sm font-semibold">Company Name:</label>
          <input
            type="text"
            placeholder="Company Name"
            className="w-full mt-1 p-3 rounded-lg bg-white text-black focus:outline-none"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>

        <div>
          <label className="text-sm font-semibold">Your Email:</label>
          <input
            type="email"
            placeholder="Email"
            className="w-full mt-1 p-3 rounded-lg bg-white text-black focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className="text-sm font-semibold">Services:</label>
          <select
            className="w-full mt-1 p-3 rounded-lg bg-white text-black focus:outline-none"
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
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
            value={requirements}
            onChange={(e) => setRequirements(e.target.value)}
          />
        </div>

        <button
          className="w-full flex items-center justify-center gap-2 bg-white text-green-700 font-semibold p-3 rounded-lg shadow-md"
          onClick={handleSubmit}
        >
          <Send className="w-5 h-5" /> Submit
        </button>
      </form>
    </div>
  );
}
