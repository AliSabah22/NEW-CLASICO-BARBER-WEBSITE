import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    title: "Classic Cut",
    description: "Traditional barbering techniques for a timeless look",
    price: "$45",
    icon: "✂️",
  },
  {
    title: "Beard Trim",
    description: "Precision shaping and styling for your facial hair",
    price: "$30",
    icon: "🧔",
  },
  {
    title: "Hot Towel Shave",
    description: "Traditional straight razor shave with hot towel treatment",
    price: "$55",
    icon: "🪒",
  },
  {
    title: "Hair & Beard Combo",
    description: "Complete grooming package for hair and beard",
    price: "$70",
    icon: "✨",
  },
  {
    title: "Kids Cut",
    description: "Special attention for our younger clients",
    price: "$35",
    icon: "👶",
  },
  {
    title: "VIP Experience",
    description: "Premium service with complimentary refreshments",
    price: "$100",
    icon: "👑",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleBookNow = () => {
    window.open('https://booking.cojilio.com/clasicobarbershop', '_blank');
  };

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-display mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Experience the art of grooming with our premium services, delivered by master barbers
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card group hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-display mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-accent font-medium">{service.price}</span>
                <button className="text-primary hover:text-accent transition-colors duration-300" onClick={handleBookNow}>
                  Book Now →
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 