"use client";

import React from 'react';

export default function Booking() {
  const handleBookNow = () => {
    window.open('https://booking.cojilio.com/clasicobarbershop', '_blank');
  };

  return (
    <section className="py-16 md:py-24 bg-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Book Your Appointment?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Experience the best grooming service in town. Book your appointment today and transform your look.
        </p>
        <button
          onClick={handleBookNow}
          className="bg-white text-gold px-8 py-4 text-lg rounded-md font-medium hover:bg-gray-100 transition-colors duration-300 inline-block"
        >
          Book Now
        </button>
      </div>
    </section>
  );
} 