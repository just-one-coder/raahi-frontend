import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Traveled to Thailand",
      image: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "As a female solo traveler from India, my parents were extremely worried. Raahi's safety features gave them peace of mind, and I had the adventure of a lifetime!"
    },
    {
      name: "Rahul Kumar",
      location: "Explored Europe",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      text: "The gamified experience made my solo trip so much fun! I completed challenges, met amazing people, and never felt lonely. Planning was a breeze with the Smart itinerary builder."
    },
    {
      name: "Anjali Patel",
      location: "Backpacked across Japan",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      text: "I used to spend weeks planning my trips. With Raahi, I had a perfect itinerary in minutes. The emergency alert system made me feel secure throughout my journey."
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Traveler Stories</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Hear from solo travelers who've explored the world with confidence
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md testimonial-card border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover mr-4" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.location}</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {testimonial.text}
              </p>
              <div className="mt-4 flex text-yellow-400">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;