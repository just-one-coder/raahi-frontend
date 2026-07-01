import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import RaahiLogo from './raahiLogo';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone_number: '',
    date_of_birth: '',
    validation_proof_type: '',
    proof_id_number: '',
    address: '',
    preferences: {
      travel_style: '',
      interests: [],
      budget_range: '',
      accommodation_preference: ''
    }
  });
  
  const [currentStep, setCurrentStep] = useState(1);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Clear error immediately when user starts typing to fix it
    if (error) setError('');
    
    if (name.startsWith('preferences.')) {
      const prefField = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        preferences: {
          ...prev.preferences,
          [prefField]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  // --- NEW: Step-by-Step Validation Logic ---
  const validateStep = (step) => {
    if (step === 1) {
      if (!formData.username.trim()) { setError('Username is required'); return false; }
      if (!formData.email.trim()) { setError('Email is required'); return false; }
      
      // Basic email regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) { setError('Please enter a valid email address'); return false; }
      
      if (formData.password.length < 6) { setError('Password must be at least 6 characters long'); return false; }
      if (formData.password !== formData.confirmPassword) { setError('Passwords do not match'); return false; }
    }
    
    if (step === 2) {
      // Edge Case: Check if one ID field is filled but not the other
      if (formData.validation_proof_type && !formData.proof_id_number.trim()) {
        setError('Please provide the ID number for your selected ID type');
        return false;
      }
      if (!formData.validation_proof_type && formData.proof_id_number.trim()) {
        setError('Please select an ID type for your entered ID number');
        return false;
      }
      
      // Edge case: Prevent future dates for DOB if they entered one
      if (formData.date_of_birth) {
        const selectedDate = new Date(formData.date_of_birth);
        const today = new Date();
        if (selectedDate > today) {
          setError('Date of birth cannot be in the future');
          return false;
        }
      }
    }
    
    setError('');
    return true;
  };

  const nextStep = () => {
    // Only proceed if the current step is perfectly valid
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 3));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Final check just in case
    if (!validateStep(1) || !validateStep(2)) return;
    
    setError('');
    setLoading(true);

    try {
      const result = await signup(formData);
      
      if (result && result.success) {
        navigate('/dashboard');
      } else {
        // Fallback for unexpected backend error structure
        setError(result?.message || 'An error occurred during signup. Please try again.');
      }
    } catch (err) {
      setError('A network error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Step 1: Basic Information
  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Create Your Account</h3>
        <p className="text-gray-600 dark:text-gray-400">Step 1: Basic Information</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Username *
          </label>
          <input
            id="username"
            name="username"
            type="text"
            required
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
            placeholder="Choose a username"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Email Address *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Password *
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
            placeholder="Minimum 6 characters"
          />
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Confirm Password *
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            required
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
            placeholder="Confirm your password"
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          onClick={nextStep}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-medium transition-colors"
        >
          Continue
        </button>
      </div>
    </div>
  );

  // Step 2: Personal Details
  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Personal Details</h3>
        <p className="text-gray-600 dark:text-gray-400">Step 2: Tell us about yourself</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Phone Number
          </label>
          <input
            id="phone_number"
            name="phone_number"
            type="tel"
            value={formData.phone_number}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
            placeholder="+91 1234567890"
          />
        </div>

        <div>
          <label htmlFor="date_of_birth" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Date of Birth
          </label>
          <input
            id="date_of_birth"
            name="date_of_birth"
            type="date"
            value={formData.date_of_birth}
            onChange={handleChange}
            max={new Date().toISOString().split("T")[0]} // Prevents future dates in native HTML
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
          />
        </div>

        <div>
          <label htmlFor="validation_proof_type" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            ID Type
          </label>
          <select
            id="validation_proof_type"
            name="validation_proof_type"
            value={formData.validation_proof_type}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
          >
            <option value="">Select ID Type</option>
            <option value="passport">Passport</option>
            <option value="driving_license">Driving License</option>
            <option value="aadhaar">Aadhaar</option>
            <option value="voter_id">Voter ID</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="proof_id_number" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            ID Number
          </label>
          <input
            id="proof_id_number"
            name="proof_id_number"
            type="text"
            value={formData.proof_id_number}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
            placeholder="Enter your ID number"
          />
        </div>
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={prevStep}
          className="px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          Back
        </button>
        <button
          type="button"
          onClick={nextStep}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-medium transition-colors"
        >
          Continue
        </button>
      </div>
    </div>
  );

  // Step 3: Preferences
  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Travel Preferences</h3>
        <p className="text-gray-600 dark:text-gray-400">Step 3: Help us personalize your experience</p>
      </div>

      <div>
        <label htmlFor="address" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Address
        </label>
        <textarea
          id="address"
          name="address"
          rows="3"
          value={formData.address}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
          placeholder="Your complete address..."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label htmlFor="preferences.travel_style" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Travel Style
          </label>
          <select
            id="preferences.travel_style"
            name="preferences.travel_style"
            value={formData.preferences.travel_style}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
          >
            <option value="">Select Style</option>
            <option value="backpacker">Backpacker</option>
            <option value="luxury">Luxury</option>
            <option value="budget">Budget</option>
            <option value="adventure">Adventure</option>
          </select>
        </div>

        <div>
          <label htmlFor="preferences.budget_range" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Budget Range
          </label>
          <select
            id="preferences.budget_range"
            name="preferences.budget_range"
            value={formData.preferences.budget_range}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
          >
            <option value="">Select Budget</option>
            <option value="budget">Budget ($)</option>
            <option value="moderate">Moderate ($$)</option>
            <option value="luxury">Luxury ($$$)</option>
          </select>
        </div>

        <div>
          <label htmlFor="preferences.accommodation_preference" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Accommodation
          </label>
          <select
            id="preferences.accommodation_preference"
            name="preferences.accommodation_preference"
            value={formData.preferences.accommodation_preference}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
          >
            <option value="">Select Preference</option>
            <option value="hostel">Hostel</option>
            <option value="hotel">Hotel</option>
            <option value="homestay">Homestay</option>
            <option value="luxury_hotel">Luxury Hotel</option>
          </select>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={prevStep}
          className="px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          Back
        </button>
        <button
          type="submit"
          disabled={loading}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Creating Account...' : 'Create Account'}
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center mb-4">
            <RaahiLogo className="h-10 w-12 text-indigo-600 dark:text-indigo-400" />
            <span className="ml-3 text-3xl font-bold text-indigo-600 dark:text-indigo-400">Raahi</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Start Your Journey
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Join thousands of solo travelers exploring the world safely
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">Basic Info</span>
            <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">Personal Details</span>
            <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">Preferences</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div 
              className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 lg:p-10 border border-gray-100 dark:border-gray-700">
          {error && (
            <div className="mb-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 px-4 py-3 rounded-xl transition-all">
              <div className="flex items-center">
                <i className="fas fa-exclamation-triangle mr-2"></i>
                {error}
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            {currentStep === 1 && renderStep1()}
            {currentStep === 2 && renderStep2()}
            {currentStep === 3 && renderStep3()}
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              Already have an account?{' '}
              <Link to="/signin" className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;