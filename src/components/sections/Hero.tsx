"use client";

import React from 'react';
import Image from 'next/image';

export default function Hero() {
  const handleBookNow = () => {
    window.open('https://booking.cojilio.com/clasicobarbershop', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-bg.jpg"
          alt="Clasico Barbershop interior"
          fill
          className="w-full h-full object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6">
            Clasico Barbershop
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience the art of traditional barbering in a modern setting
          </p>
          <button
            onClick={handleBookNow}
            className="bg-gold text-white px-8 py-4 text-lg rounded-md font-medium hover:bg-gold/90 transition-colors duration-300 inline-block"
          >
            Book Your Appointment
          </button>
        </div>
      </div>
    </section>
  );
} 