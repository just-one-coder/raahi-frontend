import React from 'react';

const TripHistory = () => {
  const trips = [
    {
      id: 1,
      destination: 'Goa, India',
      date: 'Jan 15-20, 2024',
      status: 'completed',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      rating: 4.5
    },
    {
      id: 2,
      destination: 'Manali, Himachal',
      date: 'Mar 10-15, 2024',
      status: 'completed',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      rating: 4.8
    },
    {
      id: 3,
      destination: 'Bali, Indonesia',
      date: 'Aug 15-25, 2024',
      status: 'upcoming',
      image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      rating: null
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">My Trips</h2>
        <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition-colors">
          <i className="fas fa-plus mr-2"></i>
          New Trip
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trips.map((trip) => (
          <div key={trip.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="h-48 bg-gray-300 dark:bg-gray-600 relative">
              {/* You can add actual images here */}
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  trip.status === 'completed' 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                    : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                }`}>
                  {trip.status === 'completed' ? 'Completed' : 'Upcoming'}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="font-bold text-gray-900 dark:text-white text-lg">{trip.destination}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{trip.date}</p>
              
              {trip.rating && (
                <div className="flex items-center mt-3">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className={`fas fa-star ${i < Math.floor(trip.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                      ></i>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">{trip.rating}</span>
                </div>
              )}
              
              <div className="flex space-x-3 mt-4">
                <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-xl text-sm font-medium transition-colors">
                  View Details
                </button>
                <button className="w-10 h-10 border border-gray-300 dark:border-gray-600 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700">
                  <i className="fas fa-ellipsis-h"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TripHistory;