import React from "react";

export default function MaharashtraMap() {
  return (
    <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
      <iframe
        title="Maharashtra Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d976547.148080464!2d72.71989884154379!3d19.418889564971065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bf1ecb3780fd%3A0x6f7b79b78a2c01f7!2sMaharashtra!5e0!3m2!1sen!2sin!4v1708173847609!5m2!1sen!2sin"
        width="100%"
        height="100%"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
