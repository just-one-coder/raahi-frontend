import React from 'react';

const ProblemStatement = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">The Problems We Solve</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Solo travel is a dream for many, but these challenges often hold people back
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md feature-card border border-gray-200 dark:border-gray-700">
            <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-exclamation-triangle text-red-500 text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Safety Concerns</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Constant worry about personal safety, especially for female travelers, and difficulty convincing parents or family members.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md feature-card border border-gray-200 dark:border-gray-700">
            <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-tasks text-blue-500 text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Planning Fatigue</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Overwhelming process of planning every detail alone, taking weeks or months to feel confident about the trip.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md feature-card border border-gray-200 dark:border-gray-700">
            <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-user-friends text-purple-500 text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Loneliness & Boredom</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Feeling isolated or overwhelmed when traveling alone, missing the shared experiences that make travel memorable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;