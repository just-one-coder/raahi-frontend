import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import SmartTripPlanner from './dashboard/SmartTripPlanner';
import InteractiveMap from './dashboard/InteractiveMap';
import ProfileSettings from './dashboard/ProfileSettings';
import TripHistory from './dashboard/TripHistory';
import Community from './dashboard/Community';
import SafetyCenter from './dashboard/SafetyCenter';
import Notifications from './dashboard/Notifications';
import QuickActions from './dashboard/QuickActions';

const Dashboard = () => {
  const { currentUser } = useAuth();
  const [activeSection, setActiveSection] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return <DashboardOverview />;
      case 'trip-planner':
        return <SmartTripPlanner />;
      case 'map':
        return <InteractiveMap />;
      case 'profile':
        return <ProfileSettings />;
      case 'trips':
        return <TripHistory />;
      case 'community':
        return <Community />;
      case 'safety':
        return <SafetyCenter />;
      default:
        return <DashboardOverview />;
    }
  };

  const DashboardOverview = () => (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">
          Welcome back, {currentUser?.username}! 👋
        </h1>
        <p className="text-indigo-100 text-lg">
          Ready for your next solo adventure? Let's make it safe and memorable.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mr-4">
              <i className="fas fa-map-marked-alt text-green-600 text-xl"></i>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">3</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Planned Trips</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mr-4">
              <i className="fas fa-users text-blue-600 text-xl"></i>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">12</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Travel Friends</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-2xl flex items-center justify-center mr-4">
              <i className="fas fa-shield-alt text-yellow-600 text-xl"></i>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">95%</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Safety Score</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mr-4">
              <i className="fas fa-star text-purple-600 text-xl"></i>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">8</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Badges Earned</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions & Notifications */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <QuickActions onNavigate={setActiveSection} />
        </div>
        <div>
          <Notifications />
        </div>
      </div>

      {/* Upcoming Trips */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Upcoming Trips</h2>
          <button 
            onClick={() => setActiveSection('trips')}
            className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 text-sm font-medium"
          >
            View All
          </button>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Bali Adventure</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Aug 15 - Aug 25, 2024</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-2 py-1 rounded-full text-xs font-medium">
                Confirmed
              </span>
              <button className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700">
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Goa Beach Trip</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Sep 10 - Sep 15, 2024</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 px-2 py-1 rounded-full text-xs font-medium">
                Planning
              </span>
              <button className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700">
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Mobile Sidebar Toggle */}
      <div className="lg:hidden bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4">
        <button 
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <i className="fas fa-bars text-xl"></i>
        </button>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className={`
          fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">Raahi</h1>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Solo Travel Companion</p>
          </div>

          <nav className="p-4 space-y-2">
            {[
              { id: 'overview', label: 'Dashboard', icon: 'fa-home', color: 'text-gray-600' },
              { id: 'trip-planner', label: 'Trip Planner', icon: 'fa-map-marked-alt', color: 'text-blue-600' },
              { id: 'map', label: 'Interactive Map', icon: 'fa-globe-asia', color: 'text-green-600' },
              { id: 'trips', label: 'My Trips', icon: 'fa-suitcase', color: 'text-purple-600' },
              { id: 'community', label: 'Community', icon: 'fa-users', color: 'text-pink-600' },
              { id: 'safety', label: 'Safety Center', icon: 'fa-shield-alt', color: 'text-red-600' },
              { id: 'profile', label: 'Profile & Settings', icon: 'fa-user-cog', color: 'text-indigo-600' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center px-4 py-3 rounded-xl transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 border-r-2 border-indigo-600'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                <i className={`fas ${item.icon} ${item.color} mr-3 text-lg`}></i>
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* User Profile Section */}
          <div className="absolute bottom-0 w-64 p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">
                  {currentUser?.username?.charAt(0).toUpperCase()}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                  {currentUser?.username}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                  {currentUser?.email}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 lg:ml-0">
          <div className="p-6 lg:p-8">
            {renderContent()}
          </div>
        </div>
      </div>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Dashboard;