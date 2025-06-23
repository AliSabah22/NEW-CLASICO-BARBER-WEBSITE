"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import PrimaryButton from "../ui/PrimaryButton";
import OptimizedImage from "../ui/OptimizedImage";
import BookingCTA from "../ui/BookingCTA";
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Star } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  price: string;
  duration: string;
  image: string;
  features: string[];
}

const services: Service[] = [
  {
    title: "Platinum Package",
    description: "Our most exclusive package offering 6 premium haircuts and 6 beard trims with blade/shaver precision. Valid for 7 months.",
    price: "$254.99",
    duration: "45 min per visit",
    image: "/images/services/platinum-package.jpg",
    features: [
      "6 Premium Haircuts",
      "6 Beard Trim Line-ups (Blade/Shaver)",
      "Valid for 6 months",
      "45 minutes per visit"
    ]
  },
  {
    title: "Gold Package",
    description: "Premium grooming package with 3 haircuts and 3 beard trims using blade/shaver for precise results. Valid for 4 months.",
    price: "$135",
    duration: "45 min per visit",
    image: "/images/services/gold-package.jpg",
    features: [
      "3 Premium Haircuts",
      "3 Beard Trim Line-ups (Blade/Shaver)",
      "Valid for 3 months",
      "45 minutes per visit"
    ]
  },
  {
    title: "Silver Package",
    description: "Classic grooming package featuring 3 haircuts and 3 beard trims with machine precision. Valid for 3 months.",
    price: "$134.85",
    duration: "45 min per visit",
    image: "/images/services/silver-package.jpg",
    features: [
      "3 Premium Haircuts",
      "3 Beard Trim Line-ups (Machine)",
      "Valid for 3 months",
      "45 minutes per visit"
    ]
  }
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="services" className="section-padding bg-black relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black/90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent opacity-50" />
      
      <div className="container-custom relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display mb-6 text-gold">
            Premium Packages
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Choose from our exclusive membership packages, designed to provide the ultimate grooming experience.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end relative"
        >
          {/* Silver Package - Left */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-gray-800 rounded-2xl shadow-2xl flex flex-col justify-between p-8 border border-gold/20 hover:border-gold/40 transition-all duration-500 transform md:translate-y-12 relative group min-h-[600px]"
          >
            <div className="flex justify-center items-center mb-4" style={{ marginTop: '-48px' }}>
              <div className="w-24 h-24 rounded-full bg-gradient-to-b from-gray-400 to-gray-300 p-1 shadow-lg flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-black/90 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/packages/Silver.png"
                    alt="Silver Package"
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-between mt-4">
              <div className="p-4 pt-0">
                <h3 className="text-2xl font-display text-white mb-4 text-center">
                  {services[2].title}
                </h3>
                <p className="text-white/80 mb-8 text-center">
                  {services[2].description}
                </p>
                <ul className="space-y-3 mb-8">
                  {services[2].features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-white/80">
                      <svg className="w-5 h-5 mr-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-between items-center border-t border-gold/20 pt-6 mt-auto">
                <span className="text-2xl font-medium text-white">
                  {services[2].price}
                </span>
                <span className="text-white/50">
                  {services[2].duration}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Gold Package - Center (Elevated) */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.03, y: -8 }}
            className="bg-[#B8860B] rounded-2xl shadow-2xl flex flex-col justify-between p-8 border-2 border-gold hover:border-gold/80 transition-all duration-500 transform md:-translate-y-8 relative z-10 group min-h-[650px]"
          >
            {/* Most Popular Badge */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
              <span className="inline-block bg-gradient-to-b from-gold to-yellow-400 text-black text-xs font-bold px-3 py-2 rounded-full shadow-lg border border-gold/80 uppercase tracking-wide rotate-[-90deg] whitespace-nowrap">
                Most Popular
              </span>
            </div>
            <div className="flex justify-center items-center mb-4" style={{ marginTop: '-64px' }}>
              <div className="w-32 h-32 rounded-full bg-gradient-to-b from-gold to-yellow-400 p-1.5 shadow-lg flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-black/90 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/packages/Gold.png"
                    alt="Gold Package"
                    width={96}
                    height={96}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-between mt-4">
              <div className="p-4 pt-0">
                <h3 className="text-3xl font-display text-black mb-4 text-center">
                  {services[1].title}
                </h3>
                <p className="text-black/80 mb-8 text-center">
                  {services[1].description}
                </p>
                <ul className="space-y-3 mb-8">
                  {services[1].features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-black/80">
                      <svg className="w-5 h-5 mr-3 text-yellow-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-between items-center border-t border-gold/30 pt-6 mt-auto">
                <span className="text-3xl font-medium text-black">
                  {services[1].price}
                </span>
                <span className="text-black/60">
                  {services[1].duration}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Platinum Package - Right */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-gradient-to-b from-gray-500 via-gray-500 to-gray-600 rounded-2xl shadow-2xl flex flex-col justify-between p-8 border border-gold/20 hover:border-gold/40 transition-all duration-500 transform md:translate-y-12 relative group min-h-[600px]"
          >
            <div className="flex justify-center items-center mb-4" style={{ marginTop: '-48px' }}>
              <div className="w-24 h-24 rounded-full bg-gradient-to-b from-gray-300 to-white p-1 shadow-lg flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-black/90 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/packages/Platinum.png"
                    alt="Platinum Package"
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-between mt-4">
              <div className="p-4 pt-0">
                <h3 className="text-2xl font-display text-gray-900 mb-4 text-center">
                  {services[0].title}
                </h3>
                <p className="text-gray-800 mb-8 text-center">
                  {services[0].description}
                </p>
                <ul className="space-y-3 mb-8">
                  {services[0].features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-800">
                      <svg className="w-5 h-5 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-between items-center border-t border-gold/20 pt-6 mt-auto">
                <span className="text-2xl font-medium text-gray-900">
                  {services[0].price}
                </span>
                <span className="text-gray-600">
                  {services[0].duration}
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-16"
        >
          <BookingCTA
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto"
            targetSection="booking"
          />
        </motion.div>
      </div>
    </section>
  );
} 