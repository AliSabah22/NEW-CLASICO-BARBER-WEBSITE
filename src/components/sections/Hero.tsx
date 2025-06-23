"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { scrollToSection } from '../../utils/scroll';
import OptimizedImage from '../ui/OptimizedImage';

export default function Hero() {
  const handleBookNow = () => {
    scrollToSection('booking');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <OptimizedImage
          src="/images/hero/hero-bg.jpg"
          alt="Clasico Barbershop interior"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6">
            Clasico Barbershop
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience the art of traditional barbering in a modern setting
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleBookNow}
            className="bg-gold text-black hover:bg-gold/90 px-8 py-4 text-lg rounded-2xl font-display font-medium transition-all duration-300 w-full sm:w-auto"
          >
            Book Your Appointment
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 