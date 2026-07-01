import React from 'react';

const QuickActions = ({ onNavigate }) => {
  const actions = [
    {
      id: 'trip-planner',
      title: 'Plan New Trip',
      description: 'Create a personalized itinerary',
      icon: 'fa-map-marked-alt',
      color: 'bg-blue-500',
      action: () => onNavigate('trip-planner'),
    },
    {
      id: 'safety',
      title: 'Safety Check',
      description: 'Check travel advisories',
      icon: 'fa-shield-alt',
      color: 'bg-green-500',
      action: () => onNavigate('safety'),
    },
    {
      id: 'community',
      title: 'Find Travel Buddies',
      description: 'Connect with other travelers',
      icon: 'fa-users',
      color: 'bg-purple-500',
      action: () => onNavigate('community'),
    },
    {
      id: 'map',
      title: 'Explore Map',
      description: 'Discover nearby places',
      icon: 'fa-globe-asia',
      color: 'bg-indigo-500',
      action: () => onNavigate('map'),
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Quick Actions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {actions.map((action) => (
          <button
            key={action.id}
            onClick={action.action}
            className="flex items-center p-4 text-left bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-xl transition-colors"
          >
            <div className={`w-12 h-12 ${action.color} rounded-xl flex items-center justify-center mr-4`}>
              <i className={`fas ${action.icon} text-white text-lg`}></i>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">{action.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{action.description}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;