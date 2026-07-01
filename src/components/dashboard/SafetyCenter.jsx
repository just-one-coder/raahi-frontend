import React, { useState } from 'react';

const SafetyCenter = () => {
  const [emergencyContacts, setEmergencyContacts] = useState([
    { id: 1, name: 'Police', number: '100', type: 'police' },
    { id: 2, name: 'Ambulance', number: '102', type: 'ambulance' },
    { id: 3, name: 'Fire', number: '101', type: 'fire' },
    { id: 4, name: 'Mom', number: '+91 9876543210', type: 'personal' },
  ]);

  const [safetyChecklist, setSafetyChecklist] = useState([
    { id: 1, task: 'Share itinerary with family', completed: true },
    { id: 2, task: 'Save emergency contacts', completed: true },
    { id: 3, task: 'Download offline maps', completed: false },
    { id: 4, task: 'Check travel advisories', completed: false },
    { id: 5, task: 'Register with embassy', completed: false },
  ]);

  const toggleChecklistItem = (id) => {
    setSafetyChecklist(prev =>
      prev.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const shareLocation = () => {
    if (navigator.share) {
      navigator.share({
        title: 'My Current Location',
        text: 'Sharing my current location for safety',
        url: window.location.href,
      });
    } else {
      alert('Location sharing not supported in this browser');
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Safety Center</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Your safety is our top priority</p>
      </div>

      {/* Emergency Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <button className="bg-red-600 hover:bg-red-700 text-white rounded-2xl p-6 text-center transition-colors">
          <i className="fas fa-bell text-2xl mb-3"></i>
          <h3 className="font-bold text-lg">Emergency Alert</h3>
          <p className="text-sm opacity-90">Send immediate help request</p>
        </button>

        <button 
          onClick={shareLocation}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-2xl p-6 text-center transition-colors"
        >
          <i className="fas fa-share-alt text-2xl mb-3"></i>
          <h3 className="font-bold text-lg">Share Location</h3>
          <p className="text-sm opacity-90">With trusted contacts</p>
        </button>

        <button className="bg-green-600 hover:bg-green-700 text-white rounded-2xl p-6 text-center transition-colors">
          <i className="fas fa-shield-alt text-2xl mb-3"></i>
          <h3 className="font-bold text-lg">Safety Check</h3>
          <p className="text-sm opacity-90">Verify your safety status</p>
        </button>
      </div>

      {/* Emergency Contacts */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Emergency Contacts</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {emergencyContacts.map((contact) => (
            <div key={contact.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  contact.type === 'police' ? 'bg-blue-500' :
                  contact.type === 'ambulance' ? 'bg-red-500' :
                  contact.type === 'fire' ? 'bg-orange-500' : 'bg-green-500'
                }`}>
                  <i className={`fas ${
                    contact.type === 'police' ? 'fa-shield-alt' :
                    contact.type === 'ambulance' ? 'fa-ambulance' :
                    contact.type === 'fire' ? 'fa-fire' : 'fa-user'
                  } text-white`}></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{contact.name}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{contact.number}</p>
                </div>
              </div>
              <a 
                href={`tel:${contact.number}`}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-medium transition-colors"
              >
                Call
              </a>
            </div>
          ))}
        </div>
        <button className="w-full mt-4 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl py-4 text-gray-500 dark:text-gray-400 hover:border-indigo-300 hover:text-indigo-500 transition-colors">
          <i className="fas fa-plus mr-2"></i>
          Add Emergency Contact
        </button>
      </div>

      {/* Safety Checklist */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Pre-Trip Safety Checklist</h3>
        <div className="space-y-3">
          {safetyChecklist.map((item) => (
            <label key={item.id} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => toggleChecklistItem(item.id)}
                className="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <span className={`flex-1 ${item.completed ? 'line-through text-gray-500' : 'text-gray-900 dark:text-white'}`}>
                {item.task}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Safety Tips */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-3">
            <i className="fas fa-exclamation-triangle mr-2"></i>
            Important Tips
          </h3>
          <ul className="text-yellow-700 dark:text-yellow-300 text-sm space-y-2">
            <li>• Always share your itinerary with someone</li>
            <li>• Keep emergency numbers handy</li>
            <li>• Be aware of local customs and laws</li>
            <li>• Trust your instincts</li>
          </ul>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-3">
            <i className="fas fa-info-circle mr-2"></i>
            Quick Facts
          </h3>
          <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-2">
            <li>• Your safety score: 95/100</li>
            <li>• Last safety check: Today</li>
            <li>• Emergency contacts: 4 saved</li>
            <li>• Location sharing: Active</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SafetyCenter;