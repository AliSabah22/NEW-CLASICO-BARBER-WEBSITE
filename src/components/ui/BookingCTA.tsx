'use client';

import { useCallback } from "react";
import { motion } from "framer-motion";
import { scrollToSection } from "../../utils/scroll";

interface BookingCTAProps {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  className?: string;
  targetSection?: string;
}

export default function BookingCTA({
  variant = "primary",
  size = "md",
  className = "",
  targetSection = "booking"
}: BookingCTAProps) {
  const handleClick = useCallback(() => {
    scrollToSection(targetSection);
  }, [targetSection]);

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleClick}
      className={`
        font-display font-medium transition-all duration-300
        ${variant === "primary" ? "bg-gold text-black hover:bg-gold/90" : "bg-transparent border-2 border-gold text-gold hover:bg-gold/10"}
        ${size === "sm" ? "px-4 py-2 text-sm rounded-lg" : size === "md" ? "px-6 py-3 text-base rounded-xl" : "px-8 py-4 text-lg rounded-2xl"}
        ${className}
      `}
    >
      Book Your Appointment
    </motion.button>
  );
} 