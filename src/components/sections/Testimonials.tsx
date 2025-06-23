"use client";

import { motion } from 'framer-motion';
import OptimizedImage from '../ui/OptimizedImage';

const testimonials = [
  {
    id: 1,
    name: 'John Smith',
    role: 'Regular Customer',
    image: '/images/testimonials/client1.jpg',
    content: 'The best barbershop in Mississauga. The attention to detail and professionalism is unmatched.',
  },
  {
    id: 2,
    name: 'Michael Johnson',
    role: 'Business Owner',
    image: '/images/testimonials/client2.jpg',
    content: 'I\'ve been coming here for years. The atmosphere and service are consistently excellent.',
  },
  {
    id: 3,
    name: 'David Wilson',
    role: 'Fitness Trainer',
    image: '/images/testimonials/client3.jpg',
    content: 'The barbers here are true artists. Every cut is perfect and the experience is always top-notch.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-black">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-display text-white text-center mb-16">
          What Our Clients Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 rounded-lg p-6"
            >
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <OptimizedImage
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{testimonial.name}</h3>
                  <p className="text-white/60 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-white/80">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 