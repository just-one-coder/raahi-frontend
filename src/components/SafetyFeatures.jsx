import React from 'react';

const SafetyFeatures = () => {
  return (
    <section id="safety" className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Safety That Parents Trust</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Features designed to give peace of mind to both travelers and their families
          </p>
        </div>

        {/* Safety Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <i className="fas fa-map-marker-alt text-white text-2xl"></i>
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 text-center">Live Location Sharing</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm text-center leading-relaxed">
              Share your real-time location with trusted contacts during your journey
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <i className="fas fa-bell text-white text-2xl"></i>
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 text-center">Emergency Alerts</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm text-center leading-relaxed">
              One-tap emergency alerts that notify your contacts and local authorities if needed
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <i className="fas fa-check-circle text-white text-2xl"></i>
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 text-center">Verified Accommodations</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm text-center leading-relaxed">
              All stays are verified for safety with reviews from fellow solo travelers
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <i className="fas fa-headset text-white text-2xl"></i>
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 text-center">24/7 Support</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm text-center leading-relaxed">
              Round-the-clock customer support for any issues or concerns during your trip
            </p>
          </div>
        </div>

        {/* Enhanced App Showcase Section */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0">
            {/* Content Side */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <span className="inline-block bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Platform Exclusive
                </span>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Safety Features That Work For You
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  Once you create your Raahi profile, you'll have access to our comprehensive safety system designed specifically for solo travelers:
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center p-3 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-check text-white text-sm"></i>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Automatic location sharing with trusted contacts</span>
                </div>
                
                <div className="flex items-center p-3 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-check text-white text-sm"></i>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">One-tap emergency alerts with exact location</span>
                </div>
                
                <div className="flex items-center p-3 rounded-xl bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-check text-white text-sm"></i>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Scheduled safety check-ins during trips</span>
                </div>
                
                <div className="flex items-center p-3 rounded-xl bg-orange-50 dark:bg-orange-900/20 border border-orange-100 dark:border-orange-800">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-check text-white text-sm"></i>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Verified accommodation and activity partners</span>
                </div>
              </div>
            </div>
            
            {/* App Mockup Side */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 lg:p-12 flex items-center justify-center relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
              </div>
              
              <div className="relative bg-gray-800 rounded-3xl p-6 shadow-2xl max-w-xs w-full border-8 border-gray-700">
                {/* Mock Phone Header */}
                <div className="flex justify-between items-center mb-6">
                  <div className="text-white font-bold text-lg">Raahi</div>
                  <div className="flex space-x-1">
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  </div>
                </div>
                
                {/* App Content */}
                <div className="space-y-5">
                  {/* User Profile */}
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-sm">U</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Welcome back!</div>
                      <div className="text-gray-400 text-xs">Ready for your adventure?</div>
                    </div>
                  </div>
                  
                  {/* Current Trip */}
                  <div className="bg-gray-700 rounded-xl p-3 border border-gray-600">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="text-white font-semibold text-sm">Bali Trip</div>
                        <div className="text-gray-400 text-xs">Aug 15 - Aug 25, 2024</div>
                      </div>
                      <div className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">Active</div>
                    </div>
                    <div className="flex justify-between text-xs">
                      <div className="text-gray-400">3 days completed</div>
                      <div className="text-indigo-400">View Details</div>
                    </div>
                  </div>
                  
                  {/* Safety Check-in - Enhanced */}
                  <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl p-4 text-white shadow-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-bold text-sm">Safety Check-in</div>
                      <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                        <i className="fas fa-shield-alt text-xs"></i>
                      </div>
                    </div>
                    <p className="text-indigo-100 text-xs mb-3">
                      Let your emergency contacts know you're safe
                    </p>
                    <div className="flex space-x-2">
                      <button className="bg-white text-indigo-600 hover:bg-gray-100 flex-1 py-2 rounded-lg font-semibold text-xs transition-colors flex items-center justify-center shadow">
                        <i className="fas fa-check mr-1"></i>
                        I'm Safe
                      </button>
                      <button className="bg-red-500 hover:bg-red-600 text-white flex-1 py-2 rounded-lg font-semibold text-xs transition-colors flex items-center justify-center shadow">
                        <i className="fas fa-life-ring mr-1"></i>
                        Help
                      </button>
                    </div>
                  </div>
                  
                  {/* Quick Actions */}
                  <div className="grid grid-cols-3 gap-2">
                    {['Map', 'Connect', 'Settings'].map((item, index) => (
                      <button key={item} className="bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg transition-colors text-xs flex flex-col items-center">
                        <i className={`fas fa-${index === 0 ? 'map-marker-alt' : index === 1 ? 'users' : 'cog'} mb-1`}></i>
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Mock Navigation */}
                <div className="flex justify-around mt-6 pt-4 border-t border-gray-700">
                  {['home', 'compass', 'bell', 'user'].map((icon, index) => (
                    <button key={icon} className={`${index === 0 ? 'text-indigo-400' : 'text-gray-400'} text-sm`}>
                      <i className={`fas fa-${icon}`}></i>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyFeatures;