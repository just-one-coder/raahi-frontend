import React, { useState } from 'react';

const Community = () => {
  const [activeTab, setActiveTab] = useState('travelers');

  const travelers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'New York, USA',
      mutualInterests: 5,
      avatar: 'SJ',
      isOnline: true,
      currentTrip: 'Exploring Bali'
    },
    {
      id: 2,
      name: 'Mike Chen',
      location: 'Toronto, Canada',
      mutualInterests: 3,
      avatar: 'MC',
      isOnline: false,
      currentTrip: 'Backpacking Europe'
    },
    {
      id: 3,
      name: 'Priya Sharma',
      location: 'Mumbai, India',
      mutualInterests: 7,
      avatar: 'PS',
      isOnline: true,
      currentTrip: 'Goa beaches'
    }
  ];

  const groups = [
    {
      id: 1,
      name: 'Solo Travelers India',
      members: 1247,
      description: 'Community for solo travelers exploring India',
      isJoined: true
    },
    {
      id: 2,
      name: 'Female Solo Travel',
      members: 892,
      description: 'Safe space for women traveling alone',
      isJoined: false
    },
    {
      id: 3,
      name: 'Adventure Seekers',
      members: 567,
      description: 'For those who love outdoor adventures',
      isJoined: true
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Travel Community</h2>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition-colors">
            <i className="fas fa-search mr-2"></i>
            Find Travelers
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'travelers', label: 'Travelers Nearby', icon: 'fa-users' },
            { id: 'groups', label: 'Groups', icon: 'fa-user-friends' },
            { id: 'meetups', label: 'Meetups', icon: 'fa-calendar' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${
                activeTab === tab.id
                  ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              <i className={`fas ${tab.icon} mr-2`}></i>
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Content based on active tab */}
      {activeTab === 'travelers' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {travelers.map((traveler) => (
            <div key={traveler.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {traveler.avatar}
                  </div>
                  {traveler.isOnline && (
                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white">{traveler.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{traveler.location}</p>
                  <p className="text-indigo-600 dark:text-indigo-400 text-sm">{traveler.currentTrip}</p>
                </div>
              </div>
              
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {traveler.mutualInterests} mutual interests
                </span>
                <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-medium transition-colors">
                  Connect
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'groups' && (
        <div className="space-y-4">
          {groups.map((group) => (
            <div key={group.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center text-white">
                    <i className="fas fa-users"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{group.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{group.members} members</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{group.description}</p>
                  </div>
                </div>
                <button
                  className={`px-4 py-2 rounded-xl font-medium transition-colors ${
                    group.isJoined
                      ? 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                  }`}
                >
                  {group.isJoined ? 'Joined' : 'Join Group'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'meetups' && (
        <div className="text-center py-12">
          <i className="fas fa-calendar text-4xl text-gray-400 dark:text-gray-600 mb-4"></i>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">No Upcoming Meetups</h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Check back later for travel meetups in your area
          </p>
        </div>
      )}
    </div>
  );
};

export default Community;