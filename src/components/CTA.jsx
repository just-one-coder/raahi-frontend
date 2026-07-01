import React from 'react';

const CTA = () => {
  return (
    <section className="py-16 bg-indigo-600 dark:bg-indigo-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready to Start Your Solo Adventure?
        </h2>
        <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
          Join thousands of solo travelers exploring the world safely and making unforgettable memories.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#" className="bg-white text-indigo-600 hover:bg-gray-100 px-6 py-3 rounded-lg text-lg font-semibold transition-colors duration-300 shadow-lg">Sign Up Now</a>
          <a href="#" className="border border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg text-lg font-semibold transition-colors duration-300">Download App</a>
        </div>
      </div>
    </section>
  );
};

export default CTA;