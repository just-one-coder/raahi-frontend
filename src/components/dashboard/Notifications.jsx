import React from 'react';

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      type: 'safety',
      title: 'Weather Alert',
      message: 'Heavy rain expected in Bali tomorrow',
      time: '2 hours ago',
      unread: true,
    },
    {
      id: 2,
      type: 'trip',
      title: 'Trip Reminder',
      message: 'Your Goa trip starts in 3 days',
      time: '5 hours ago',
      unread: true,
    },
    {
      id: 3,
      type: 'community',
      title: 'New Connection',
      message: 'John Smith wants to connect',
      time: '1 day ago',
      unread: false,
    },
  ];

  const getIcon = (type) => {
    switch (type) {
      case 'safety':
        return 'fa-exclamation-triangle text-yellow-500';
      case 'trip':
        return 'fa-suitcase text-indigo-500';
      case 'community':
        return 'fa-users text-green-500';
      default:
        return 'fa-bell text-gray-500';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Notifications</h2>
        <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 text-xs font-medium px-2.5 py-0.5 rounded-full">
          {notifications.filter(n => n.unread).length} new
        </span>
      </div>
      
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 rounded-xl border transition-colors ${
              notification.unread
                ? 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-800'
                : 'bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600'
            }`}
          >
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <i className={`fas ${getIcon(notification.type)} text-lg mt-1`}></i>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                  {notification.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                  {notification.message}
                </p>
                <p className="text-gray-500 dark:text-gray-500 text-xs mt-2">
                  {notification.time}
                </p>
              </div>
              {notification.unread && (
                <div className="flex-shrink-0">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 text-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 text-sm font-medium py-2">
        View All Notifications
      </button>
    </div>
  );
};

export default Notifications;