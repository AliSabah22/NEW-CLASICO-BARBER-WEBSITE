"use client";

const services = [
  {
    title: "Classic Cut",
    description: "Traditional barbering techniques for a timeless look",
    price: "$30",
    icon: "✂️",
  },
  {
    title: "Beard Trim",
    description: "Precision shaping and styling for your facial hair",
    price: "$25",
    icon: "🧔",
  },
  {
    title: "Hot Towel Shave",
    description: "Traditional straight razor shave with hot towel treatment",
    price: "$35",
    icon: "🪒",
  },
  {
    title: "Hair & Beard Combo",
    description: "Complete grooming package for hair and beard",
    price: "$50",
    icon: "✨",
  },
  {
    title: "Kids Cut",
    description: "Special attention for our younger clients",
    price: "$25",
    icon: "👶",
  },
];

export default function Services() {
  const handleBookNow = () => {
    window.open('https://booking.cojilio.com/clasicobarbershop', '_blank');
  };

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the art of grooming with our premium services, delivered by master barbers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card group hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-display mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-accent font-medium">{service.price}</span>
                <button 
                  className="text-primary hover:text-accent transition-colors duration-300" 
                  onClick={handleBookNow}
                >
                  Book Now →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 