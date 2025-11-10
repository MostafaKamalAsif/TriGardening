import React, { useState, useCallback } from 'react';
import { Facebook, Chrome } from 'lucide-react';
import Image from 'next/image';

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



  return (
  <>   // Full screen container for centering

      
    
        <div className=" bg-[#FFFFFF] drop-shadow-[0_4px_7.7px_rgba(0,0,0,0.11)] pt-[121px]  pr-[162px] w-[765px] h-[921px] rounded-[15px]">
          {/* Header/Title Section */}
          <header className="text-center pl-[156px] mb-10">
            <h1 className={`text-[40px] font-semibold text-[#2D5016] mb-1`}>
              Login to your Account
            </h1>
            <p className="text-[#2D5016] text-[26px] pb-[95px]">
              To Write Review
            </p>
          </header>

          {/* Form Section */}
          <form onSubmit={handleLogin} className="space-y-6 pl-[156px]">
            
            {/* Phone Number Field */}
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-[18px] font-medium text-[#2D5016] mb-3">
                Phone Number
              </label>
              <input
                id="phone"
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter your phone number"
                className="w-full placeholder:text-[#B7B7B7] pl-[35px] py-5 border text-black text-[18px] border-[#B7B7B7] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#357731] transition duration-200 mb-8"
                required
              />
            </div>

            {/* Password Field */}
            <div className="flex flex-col">
              <label htmlFor="password" className="text-[18px] font-medium text-[#2D5016] mb-3">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full placeholder:text-[#B7B7B7] text-black text-[18px] pl-[35px] py-5 border border-[#B7B7B7] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#357731] transition duration-200 "
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
                <span className="text-[18px] font-medium text-[#2D5016]">Remember Me</span>
              </label>
              <a href="#" className={`text-[18px] font-medium text-[#2D5016]`}>
                Forgot Password?
              </a>
            </div>

            {/* Message/Error Display */}
            {message && (
              <p className={`text-center text-sm font-medium ${message.includes('successful') ? 'text-green-600' : 'text-red-600'}`}>
                {message}
              </p>
            )}
            <div className="flex gap-x-4 items-center ">

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-[244px] py-4  text-[22px]  text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out
                bg-[#2D5016] hover:brightness-110 disabled:opacity-70 flex justify-center items-center space-x-2`}
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
                     {/* Social Login Buttons */}
          
            
            {/* Facebook Button */}
            <Image src={'/FacebookLogin.svg'} alt='facebook ' width={83} height={66} onClick={() => handleSocialLogin('Facebook')}/>
            

            {/* Google Button */}
            <Image src={'/Google.svg'} alt='google ' width={83} height={66} onClick={() => handleSocialLogin('Google')}/>
            
          
</div>
          </form>

 
          {/* Register Link */}
          <p className="text-center text-sm text-[#2D5016] mt-4.5 pb-[54px] ">
            Don't have an account?{' '}
           
              Register?
            
          </p>
{/* Footer Accent Bar (to mimic the design's bottom green section) */}
        <div className={`h-[60px] w-[767px] bg-[#7A9B57] rounded-b-[15px]  drop-shadow-[0_4px_7.7px_rgba(0,0,0,0.11)] `}></div>
        </div>

        
  
  
   
   </>
  );
};

export default Login;