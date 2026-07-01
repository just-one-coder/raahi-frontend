import React from 'react';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">How It Works</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Getting started with your solo adventure is simple and straightforward
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-indigo-500 text-2xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Create Your Profile</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Set up your travel preferences, safety contacts, and personal requirements.
            </p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-indigo-500 text-2xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Plan Your Trip</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Use our Smart planner & choose from community-vetted itineraries.
            </p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-indigo-500 text-2xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Travel & Connect</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Embark on your journey with safety features active and connect with other travelers.
            </p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <a href="#" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-colors duration-300 shadow-lg">Start Your Adventure</a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;