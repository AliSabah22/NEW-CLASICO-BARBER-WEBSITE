'use client';

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const galleryImages = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/images/gallery4.jpg",
  "/images/gallery5.jpg",
  "/images/gallery6.jpg",
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="gallery" className="py-16 sm:py-20 md:py-24 bg-black">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display mb-4 md:mb-6 text-white">
            Our Gallery
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-4 md:px-0">
            Take a look at our work and the atmosphere of our barbershop.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          {galleryImages.map((src, index) => (
            <motion.div
              key={src}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative aspect-square rounded-lg sm:rounded-xl overflow-hidden shadow-lg cursor-pointer touch-manipulation group"
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                priority={index < 3} // Prioritize first 3 images
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Mobile overlay for better touch feedback */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Image number indicator */}
              <div className="absolute top-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {index + 1}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile-optimized CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-xl md:text-2xl font-display text-white mb-4">
              See More of Our Work
            </h3>
            <p className="text-white/70 text-sm md:text-base mb-6">
              Visit our full gallery to see more examples of our craftsmanship
            </p>
            <button 
              onClick={() => window.open('/gallery', '_blank')}
              className="btn-primary w-full sm:w-auto touch-manipulation"
            >
              View Full Gallery
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
