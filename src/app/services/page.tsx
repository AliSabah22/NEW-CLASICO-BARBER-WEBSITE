"use client";

import React from "react";
import { Scissors, Clock } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      name: "Classic Haircut",
      description: "Traditional barbering techniques for a timeless look",
      duration: "30 min",
      price: "$25",
      icon: Scissors,
    },
    {
      name: "Fade & Style",
      description: "Modern fade techniques with precision styling",
      duration: "45 min",
      price: "$35",
      icon: Scissors,
    },
    {
      name: "Beard Trim",
      description: "Professional beard grooming and shaping",
      duration: "20 min",
      price: "$20",
      icon: Scissors,
    },
    {
      name: "Hot Shave",
      description: "Traditional straight razor shave with hot towels",
      duration: "30 min",
      price: "$30",
      icon: Scissors,
  },
  {
      name: "Kids Haircut",
      description: "Gentle and fun haircuts for children",
      duration: "25 min",
      price: "$20",
      icon: Scissors,
    },
    {
      name: "Hair & Beard Combo",
      description: "Complete grooming package for the modern man",
      duration: "60 min",
      price: "$45",
      icon: Scissors,
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Our Services
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in">
              Professional grooming services tailored to your style
            </p>
        </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.name}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gold rounded-full mb-6 mx-auto">
                  <service.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-4">{service.name}</h3>
                <p className="text-gray-600 text-center mb-6">{service.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {service.duration}
                  </div>
                  <div className="text-2xl font-bold text-gold">{service.price}</div>
                </div>
                <button className="w-full bg-black text-white hover:bg-gray-800 px-6 py-3 rounded-md font-semibold transition-colors">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 