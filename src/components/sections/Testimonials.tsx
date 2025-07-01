"use client";

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
    <section className="py-16 sm:py-20 md:py-24 bg-black">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-white mb-4 md:mb-6">
          What Our Clients Say
        </h2>
          <p className="text-white/70 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4 md:px-0">
            Hear from our valued clients about their experiences at Clasico Barbershop
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden mr-3 md:mr-4 flex-shrink-0">
                  <OptimizedImage
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-white font-semibold text-sm md:text-base truncate">{testimonial.name}</h3>
                  <p className="text-white/60 text-xs md:text-sm truncate">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-white/80 text-sm md:text-base leading-relaxed">{testimonial.content}</p>
              
              {/* Star Rating */}
              <div className="flex items-center mt-4 md:mt-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 md:w-5 md:h-5 text-gold fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
            </div>
            </div>
          ))}
        </div>

        {/* Mobile-optimized CTA */}
        <div className="text-center mt-12 md:mt-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-xl md:text-2xl font-display text-white mb-4">
              Ready to Experience Excellence?
            </h3>
            <p className="text-white/70 text-sm md:text-base mb-6">
              Join our satisfied clients and discover the Clasico difference
            </p>
            <button 
              onClick={() => window.open('https://booking.cojilio.com/clasicobarbershop', '_blank')}
              className="btn-primary w-full sm:w-auto touch-manipulation"
            >
              Book Your Appointment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 