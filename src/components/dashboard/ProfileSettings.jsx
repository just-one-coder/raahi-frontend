import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

const ProfileSettings = () => {
  const { currentUser, updateProfile } = useAuth();
  const [formData, setFormData] = useState({
    username: currentUser?.username || '',
    email: currentUser?.email || '',
    bio: currentUser?.bio || '',
    location: currentUser?.location || '',
    dateOfBirth: currentUser?.dateOfBirth || '',
    // Static preferences for personality
    travelPersonality: currentUser?.travelPersonality || [],
    dietaryPreference: currentUser?.dietaryPreference || '',
    accommodationPreference: currentUser?.accommodationPreference || '',
    pacePreference: currentUser?.pacePreference || '',
    socialPreference: currentUser?.socialPreference || '',
    adventureLevel: currentUser?.adventureLevel || 3,
    comfortZone: currentUser?.comfortZone || 3,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      // For travelPersonality which is an array
      if (name === 'travelPersonality') {
        const updatedPersonality = checked
          ? [...formData.travelPersonality, value]
          : formData.travelPersonality.filter(item => item !== value);
        setFormData(prev => ({ ...prev, travelPersonality: updatedPersonality }));
      } else {
        setFormData(prev => ({ ...prev, [name]: checked }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(formData);
    // Show success message
    alert('Profile updated successfully!');
  };

  const travelPersonalityOptions = [
    { id: 'adventurer', label: '🧗 Adventurer', description: 'Love thrill and challenges' },
    { id: 'culture', label: '🎭 Culture Enthusiast', description: 'Enjoy history and local traditions' },
    { id: 'foodie', label: '🍜 Foodie', description: 'Travel to try new cuisines' },
    { id: 'relaxer', label: '😌 Relaxer', description: 'Prefer calm and peaceful trips' },
    { id: 'photographer', label: '📸 Photographer', description: 'Focus on capturing moments' },
    { id: 'social', label: '👥 Social Butterfly', description: 'Love meeting new people' },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Profile & Preferences</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Tell us about yourself and your travel style</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Basic Information */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Basic Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                placeholder="Where are you based?"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Date of Birth
              </label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Bio
              </label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                placeholder="Tell us a bit about yourself..."
              />
            </div>
          </div>
        </div>

        {/* Travel Personality */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Travel Personality</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">Select all that describe your travel style</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {travelPersonalityOptions.map((option) => (
              <label key={option.id} className="relative flex cursor-pointer">
                <input
                  type="checkbox"
                  name="travelPersonality"
                  value={option.id}
                  checked={formData.travelPersonality.includes(option.id)}
                  onChange={handleChange}
                  className="sr-only"
                />
                <div className={`
                  w-full p-4 border-2 rounded-xl transition-all duration-200
                  ${formData.travelPersonality.includes(option.id)
                    ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300'
                    : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:border-indigo-300'
                  }
                `}>
                  <div className="font-medium text-lg mb-1">{option.label}</div>
                  <div className="text-sm opacity-75">{option.description}</div>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Travel Preferences */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Travel Preferences</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Dietary Preference
              </label>
              <select
                name="dietaryPreference"
                value={formData.dietaryPreference}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              >
                <option value="">No preference</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="vegan">Vegan</option>
                <option value="gluten-free">Gluten-free</option>
                <option value="halal">Halal</option>
                <option value="kosher">Kosher</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Accommodation Preference
              </label>
              <select
                name="accommodationPreference"
                value={formData.accommodationPreference}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              >
                <option value="">No preference</option>
                <option value="hostel">Hostel</option>
                <option value="hotel">Hotel</option>
                <option value="apartment">Apartment</option>
                <option value="luxury">Luxury</option>
                <option value="camping">Camping</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Pace Preference
              </label>
              <select
                name="pacePreference"
                value={formData.pacePreference}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              >
                <option value="">No preference</option>
                <option value="relaxed">Relaxed</option>
                <option value="moderate">Moderate</option>
                <option value="fast">Fast-paced</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Social Preference
              </label>
              <select
                name="socialPreference"
                value={formData.socialPreference}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              >
                <option value="">No preference</option>
                <option value="solo">Solo</option>
                <option value="small-group">Small Group</option>
                <option value="large-group">Large Group</option>
                <option value="mix">Mix of both</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Adventure Level: {formData.adventureLevel}
              </label>
              <input
                type="range"
                name="adventureLevel"
                min="1"
                max="5"
                value={formData.adventureLevel}
                onChange={handleChange}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              />
              <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>Low</span>
                <span>Medium</span>
                <span>High</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Comfort Zone: {formData.comfortZone}
              </label>
              <input
                type="range"
                name="comfortZone"
                min="1"
                max="5"
                value={formData.comfortZone}
                onChange={handleChange}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              />
              <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>Inside</span>
                <span>Moderate</span>
                <span>Outside</span>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition-colors"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileSettings;