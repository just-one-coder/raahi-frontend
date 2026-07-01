import React from 'react';
import { useAuth } from '../context/AuthContext'; // ADDED: Import useAuth
import { useDarkMode } from '../context/DarkModeContext';
import { Link } from 'react-router-dom'; // ADDED: Import Link
import RaahiLogo from './raahiLogo';

const Header = () => {
  const { currentUser, logout } = useAuth(); // ADDED: Get auth state
  const { isDark, toggleDarkMode } = useDarkMode();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center"> {/* CHANGED: Wrap in Link */}
              <RaahiLogo className="h-8 w-12 mr-1 text-indigo-600 dark:text-indigo-400" />
              <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">Raahi</span>
            </Link>
          </div>
          
          {/* Navigation Links - Conditionally show based on auth */}
          {!currentUser && ( // Only show navigation when not logged in
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button 
                  onClick={() => scrollToSection('features')}
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  Features
                </button>
                <button 
                  onClick={() => scrollToSection('how-it-works')}
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  How It Works
                </button>
                <button 
                  onClick={() => scrollToSection('safety')}
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  Safety
                </button>
                <button 
                  onClick={() => scrollToSection('testimonials')}
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  Testimonials
                </button>
              </div>
            </div>
          )}
          
          {/* Right side: Dark mode toggle and Auth buttons */}
          <div className="flex items-center">
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              {isDark ? (
                <i className="fas fa-sun"></i>
              ) : (
                <i className="fas fa-moon"></i>
              )}
            </button>
            
            {/* Conditional rendering based on auth state */}
            {currentUser ? (
              <div className="ml-4 flex items-center space-x-2">
                <span className="text-gray-600 dark:text-gray-300 text-sm">
                  Welcome, {currentUser.username}
                </span>
                <Link 
                  to="/dashboard"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  Dashboard
                </Link>
                <button 
                  onClick={logout}
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="ml-4 flex items-center space-x-2">
                <Link 
                  to="/signin" 
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  Sign In
                </Link>
                <Link 
                  to="/signup" 
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;