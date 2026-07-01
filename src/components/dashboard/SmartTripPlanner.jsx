import React, { useState } from 'react';

const SmartTripPlanner = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Basic Info
    destination: '',
    tripType: '',
    travelDates: { start: '', end: '' },
    
    // Travel Style
    travelStyle: '',
    pace: '',
    accommodation: '',
    budget: '',
    
    // Interests & Activities
    interests: [],
    activities: [],
    
    // Safety & Preferences
    safetyPriorities: [],
    dietaryRestrictions: '',
    accessibility: '',
    
    // Companions
    travelCompanions: 'solo',
    meetLocals: false,
    groupActivities: false
  });

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 5));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      if (name.startsWith('interests.')) {
        const interest = name.split('.')[1];
        setFormData(prev => ({
          ...prev,
          interests: checked 
            ? [...prev.interests, interest]
            : prev.interests.filter(i => i !== interest)
        }));
      } else if (name.startsWith('safetyPriorities.')) {
        const priority = name.split('.')[1];
        setFormData(prev => ({
          ...prev,
          safetyPriorities: checked 
            ? [...prev.safetyPriorities, priority]
            : prev.safetyPriorities.filter(p => p !== priority)
        }));
      } else {
        setFormData(prev => ({ ...prev, [name]: checked }));
      }
    } else if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: { ...prev[parent], [child]: value }
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const Step1BasicInfo = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Where to? 🌍</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Let's start with the basics of your adventure</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Dream Destination
          </label>
          <input
            type="text"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            placeholder="Where do you want to go?"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Trip Type
          </label>
          <select
            name="tripType"
            value={formData.tripType}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
          >
            <option value="">Select trip type</option>
            <option value="beach">🏖️ Beach Relaxation</option>
            <option value="mountain">⛰️ Mountain Adventure</option>
            <option value="city">🏙️ City Exploration</option>
            <option value="cultural">🎭 Cultural Immersion</option>
            <option value="spiritual">🕉️ Spiritual Journey</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Start Date
          </label>
          <input
            type="date"
            name="travelDates.start"
            value={formData.travelDates.start}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            End Date
          </label>
          <input
            type="date"
            name="travelDates.end"
            value={formData.travelDates.end}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
          />
        </div>
      </div>
    </div>
  );

  const Step2TravelStyle = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Your Travel Style 🎒</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">How do you like to travel?</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Travel Style
          </label>
          <select
            name="travelStyle"
            value={formData.travelStyle}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
          >
            <option value="">Select your style</option>
            <option value="backpacker">🎒 Backpacker</option>
            <option value="comfort">🛋️ Comfort Seeker</option>
            <option value="luxury">🌟 Luxury Traveler</option>
            <option value="minimalist">🧳 Minimalist</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Travel Pace
          </label>
          <select
            name="pace"
            value={formData.pace}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
          >
            <option value="">Select pace</option>
            <option value="relaxed">😌 Relaxed</option>
            <option value="moderate">🚶 Moderate</option>
            <option value="fast">🏃 Fast-paced</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Accommodation
          </label>
          <select
            name="accommodation"
            value={formData.accommodation}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
          >
            <option value="">Select preference</option>
            <option value="hostel">🏠 Hostel</option>
            <option value="hotel">🏨 Hotel</option>
            <option value="homestay">🏡 Homestay</option>
            <option value="luxury">⭐ Luxury Hotel</option>
            <option value="camping">⛺ Camping</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Daily Budget
          </label>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
          >
            <option value="">Select budget</option>
            <option value="budget">💰 Budget ($20-50)</option>
            <option value="moderate">💵 Moderate ($50-100)</option>
            <option value="comfort">💎 Comfort ($100-200)</option>
            <option value="luxury">✨ Luxury ($200+)</option>
          </select>
        </div>
      </div>
    </div>
  );

  const Step3Interests = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Your Interests ❤️</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">What makes your heart beat faster?</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
          Select Your Interests
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { id: 'nature', label: '🌳 Nature', icon: 'fa-tree' },
            { id: 'history', label: '🏛️ History', icon: 'fa-landmark' },
            { id: 'food', label: '🍜 Food', icon: 'fa-utensils' },
            { id: 'photography', label: '📸 Photography', icon: 'fa-camera' },
            { id: 'adventure', label: '🧗 Adventure', icon: 'fa-mountain' },
            { id: 'shopping', label: '🛍️ Shopping', icon: 'fa-shopping-bag' },
            { id: 'art', label: '🎨 Art & Culture', icon: 'fa-palette' },
            { id: 'wellness', label: '🧘 Wellness', icon: 'fa-spa' },
            { id: 'nightlife', label: '🌃 Nightlife', icon: 'fa-moon' },
          ].map((interest) => (
            <label key={interest.id} className="relative flex cursor-pointer">
              <input
                type="checkbox"
                name={`interests.${interest.id}`}
                checked={formData.interests.includes(interest.id)}
                onChange={handleChange}
                className="sr-only"
              />
              <div className={`
                w-full p-4 border-2 rounded-xl text-center transition-all duration-200
                ${formData.interests.includes(interest.id)
                  ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300'
                  : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:border-indigo-300'
                }
              `}>
                <i className={`fas ${interest.icon} text-lg mb-2 block`}></i>
                <span className="text-sm font-medium">{interest.label}</span>
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  const Step4Safety = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Safety First 🛡️</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Your safety is our priority</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
            Safety Priorities
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { id: 'verified', label: '✅ Verified Accommodations' },
              { id: 'transport', label: '🚗 Safe Transport' },
              { id: 'local', label: '🏠 Local Contacts' },
              { id: 'medical', label: '🏥 Medical Facilities' },
              { id: 'communication', label: '📱 Reliable Communication' },
              { id: 'emergency', label: '🆚 Emergency Support' },
            ].map((priority) => (
              <label key={priority.id} className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name={`safetyPriorities.${priority.id}`}
                  checked={formData.safetyPriorities.includes(priority.id)}
                  onChange={handleChange}
                  className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <span className="text-gray-700 dark:text-gray-300">{priority.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Dietary Restrictions
          </label>
          <select
            name="dietaryRestrictions"
            value={formData.dietaryRestrictions}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
          >
            <option value="">No restrictions</option>
            <option value="vegetarian">🌱 Vegetarian</option>
            <option value="vegan">💚 Vegan</option>
            <option value="gluten">🌾 Gluten-free</option>
            <option value="halal">☪️ Halal</option>
            <option value="kosher">✡️ Kosher</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Accessibility Needs
          </label>
          <select
            name="accessibility"
            value={formData.accessibility}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
          >
            <option value="">No special needs</option>
            <option value="mobility">♿ Mobility assistance</option>
            <option value="visual">👁️ Visual impairment</option>
            <option value="hearing">👂 Hearing impairment</option>
          </select>
        </div>
      </div>
    </div>
  );

  const Step5Social = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Social Preferences 👥</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">How social do you want to be?</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Travel Companions
          </label>
          <select
            name="travelCompanions"
            value={formData.travelCompanions}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
          >
            <option value="solo">🙋 Strictly Solo</option>
            <option value="meet">🤝 Open to meeting</option>
            <option value="group">👥 Prefer groups</option>
          </select>
        </div>

        <div className="space-y-4">
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              name="meetLocals"
              checked={formData.meetLocals}
              onChange={handleChange}
              className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <span className="text-gray-700 dark:text-gray-300">Meet local people</span>
          </label>

          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              name="groupActivities"
              checked={formData.groupActivities}
              onChange={handleChange}
              className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <span className="text-gray-700 dark:text-gray-300">Join group activities</span>
          </label>
        </div>
      </div>

      {/* Generated Trip Bundles Preview */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Your Personalized Trip Bundles</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'Adventure Seeker', type: '🧗 Active & Outdoor', duration: '7 days', price: '$$' },
            { name: 'Cultural Explorer', type: '🎭 Heritage & Arts', duration: '5 days', price: '$$$' },
            { name: 'Relaxation Bundle', type: '😌 Peace & Wellness', duration: '4 days', price: '$$' },
          ].map((bundle, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 border-2 border-indigo-200 dark:border-indigo-800 rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 dark:text-white text-lg">{bundle.name}</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{bundle.type}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-indigo-600 dark:text-indigo-400 font-semibold">{bundle.duration}</span>
                <span className="text-green-600 dark:text-green-400 font-bold">{bundle.price}</span>
              </div>
              <button className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-xl font-medium transition-colors">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          {[1, 2, 3, 4, 5].map((step) => (
            <div key={step} className="flex flex-col items-center">
              <div className={`
                w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                ${currentStep >= step 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-500'
                }
              `}>
                {step}
              </div>
              <span className="text-xs mt-1 text-gray-500 dark:text-gray-400">
                {['Basics', 'Style', 'Interests', 'Safety', 'Social'][step - 1]}
              </span>
            </div>
          ))}
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div 
            className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / 5) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Form Container */}
      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8">
        <form>
          {currentStep === 1 && <Step1BasicInfo />}
          {currentStep === 2 && <Step2TravelStyle />}
          {currentStep === 3 && <Step3Interests />}
          {currentStep === 4 && <Step4Safety />}
          {currentStep === 5 && <Step5Social />}
        </form>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <button
            type="button"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <i className="fas fa-arrow-left mr-2"></i>
            Back
          </button>

          <button
            type="button"
            onClick={currentStep === 5 ? () => console.log('Generate trips') : nextStep}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition-colors flex items-center"
          >
            {currentStep === 5 ? (
              <>
                <i className="fas fa-magic mr-2"></i>
                Generate My Trips
              </>
            ) : (
              <>
                Next
                <i className="fas fa-arrow-right ml-2"></i>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SmartTripPlanner;