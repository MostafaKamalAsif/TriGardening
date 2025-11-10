import React, { useState, useCallback } from 'react';
import { Facebook, Chrome } from 'lucide-react';

/**
 * A responsive login card component mirroring the provided design.
 * It uses Tailwind CSS for styling and functional components for state management.
 */
const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Main login handler
  const handleLogin = useCallback(async (e) => {
    e.preventDefault();
    setMessage('');
    setLoading(true);

    // Mock API call simulation
    await new Promise(resolve => setTimeout(resolve, 1500));

    if (phoneNumber.length > 5 && password.length >= 6) {
      setMessage(`Login successful! Welcome back.`);
    } else {
      setMessage('Invalid credentials. Please check your Phone Number and Password.');
    }
    setLoading(false);
  }, [phoneNumber, password]);

  // Social login mock
  const handleSocialLogin = (platform) => {
    setMessage(`Initiating login via ${platform}... (Not implemented)`);
  };

  // Define the core green color used throughout the design
  const PRIMARY_GREEN = 'bg-[#357731]';
  const TEXT_GREEN = 'text-[#357731]';
  const BORDER_GREEN = 'border-[#357731]';

  return (
    // Full screen container for centering
    <div className=" flex items-center justify-center p-4">
      
      {/* Login Card Container */}
      <div className=" max-w-sm md:max-w-md bg-white rounded-xl shadow-2xl overflow-hidden
                    border-4 border-b-[30px] border-solid border-gray-100/50"
           style={{ borderColor: 'rgba(53, 119, 49, 0.15)' }} // Subtle green shadow/border
      >
        <div className="p-8 sm:p-10">
          {/* Header/Title Section */}
          <header className="text-center mb-10">
            <h1 className={`text-3xl font-bold ${TEXT_GREEN} mb-1`}>
              Login to your Account
            </h1>
            <p className="text-gray-600 text-base font-medium">
              To Write Review
            </p>
          </header>

          {/* Form Section */}
          <form onSubmit={handleLogin} className="space-y-6">
            
            {/* Phone Number Field */}
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                id="phone"
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter your phone number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#357731] transition duration-200"
                required
              />
            </div>

            {/* Password Field */}
            <div className="flex flex-col">
              <label htmlFor="password" className="text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#357731] transition duration-200"
                required
              />
            </div>

            {/* Remember Me / Forgot Password Row */}
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className={`form-checkbox h-4 w-4 rounded text-[#357731] focus:ring-[#357731] border-gray-300`}
                />
                <span className="text-gray-600">Remember Me</span>
              </label>
              <a href="#" className={`font-medium ${TEXT_GREEN} hover:underline`}>
                Forgot Password?
              </a>
            </div>

            {/* Message/Error Display */}
            {message && (
              <p className={`text-center text-sm font-medium ${message.includes('successful') ? 'text-green-600' : 'text-red-600'}`}>
                {message}
              </p>
            )}

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 mt-4 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out
                ${PRIMARY_GREEN} hover:brightness-110 disabled:opacity-70 flex justify-center items-center space-x-2`}
            >
              {loading ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                <span>Login</span>
              )}
            </button>
          </form>

          {/* Social Login Buttons */}
          <div className="flex space-x-4 mt-6">
            
            {/* Facebook Button */}
            <button
              onClick={() => handleSocialLogin('Facebook')}
              className="flex-1 py-3 bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition duration-200
                         flex justify-center items-center space-x-2 text-blue-600 hover:bg-gray-50"
            >
              <Facebook className="h-5 w-5 fill-blue-600" />
            </button>

            {/* Google Button */}
            <button
              onClick={() => handleSocialLogin('Google')}
              className="flex-1 py-3 bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition duration-200
                         flex justify-center items-center space-x-2 text-red-500 hover:bg-gray-50"
            >
              <Chrome className="h-5 w-5" />
            </button>
          </div>

          {/* Register Link */}
          <p className="text-center text-sm text-gray-600 mt-8">
            Don't have an account?{' '}
            <a href="#" className={`font-semibold ${TEXT_GREEN} hover:underline`}>
              Register?
            </a>
          </p>

        </div>

        {/* Footer Accent Bar (to mimic the design's bottom green section) */}
        <div className={`h-4 ${PRIMARY_GREEN} rounded-b-xl`}></div>
      </div>
    </div>
  );
};

export default Login;