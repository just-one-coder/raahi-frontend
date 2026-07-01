import React from 'react';

const Features = () => {
  return (
    <section id="features" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">Our Solution " Raahi "</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive platform that addresses every concern of solo travelers
          </p>
        </div>
        
        {/* Main Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div className="group p-6 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 border border-transparent hover:border-gray-200 dark:hover:border-gray-700">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                  <i className="fas fa-shield-alt text-white text-lg"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Safety First Approach</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Real-time location sharing with trusted contacts, emergency alerts, verified accommodations, and safety-rated locations.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="group p-6 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 border border-transparent hover:border-gray-200 dark:hover:border-gray-700">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                  <i className="fas fa-robot text-white text-lg"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Quick Itinerary-Based Trip Planning</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Our intelligent system creates personalized itineraries based on your preferences, budget, and safety requirements.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="group p-6 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 border border-transparent hover:border-gray-200 dark:hover:border-gray-700">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                  <i className="fas fa-gamepad text-white text-lg"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Gamified Social Experience</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Connect with fellow travelers, complete challenges, earn badges, and discover hidden gems together.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Visual Element */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl opacity-10 blur-lg"></div>
            <img 
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Traveler using Raahi app" 
              className="relative rounded-2xl shadow-2xl border-8 border-white dark:border-gray-800"
            />
            {/* Floating Stats */}
            <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">95%</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Safety Score</div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">24/7</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Feature Cards */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/10 dark:to-purple-900/10 rounded-3xl"></div>
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-map-marked-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Smart Itinerary Builder</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Stress-free & seamless planning that considers safety ratings, travel time, and your personal preferences to create perfect daily schedules.
              </p>
              <div className="mt-4 flex items-center text-indigo-600 dark:text-indigo-400 font-medium">
                <span>Learn more</span>
                <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-users text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Travel Community</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Connect with verified solo travelers nearby, join group activities, and share experiences in real-time.
              </p>
              <div className="mt-4 flex items-center text-green-600 dark:text-green-400 font-medium">
                <span>Join community</span>
                <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-shield-heart text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Safety Network</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Automatic check-ins, emergency contacts, and local support network to ensure you're never alone in unfamiliar places.
              </p>
              <div className="mt-4 flex items-center text-red-600 dark:text-red-400 font-medium">
                <span>Explore safety</span>
                <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;