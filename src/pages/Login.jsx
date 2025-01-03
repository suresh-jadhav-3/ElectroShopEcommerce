
import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [focusedInput, setFocusedInput] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setLoading(true);
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields.');
      setLoading(false);
      return;
    }

    setTimeout(() => {
      console.log('Form validated successfully!');
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-8">
        <div className="mb-6 sm:mb-8 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Welcome back</h1>
          <p className="text-sm sm:text-base text-gray-600">Please enter your details to sign in</p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-600 rounded-lg text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setFocusedInput('email')}
              onBlur={() => setFocusedInput(null)}
              className="block w-full pl-10 pr-3 py-2 sm:py-3 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className={`absolute left-10 transition-all duration-200 pointer-events-none
                ${
                  focusedInput === 'email' || email
                    ? '-top-3 text-sm text-blue-500 bg-white px-2'
                    : 'top-2 sm:top-3 text-gray-500'
                }`}
            >
              Email address
            </label>
          </div>

         
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <input
             type={showPassword ? "text" : "password"}
             id="password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             onFocus={() => setFocusedInput('password')}
             onBlur={() => setFocusedInput(null)}
             className="block w-full pl-10 pr-3 py-2 sm:py-3 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
             placeholder=" "
             required
            />
            <label
              htmlFor="password"
              className={`absolute left-10 transition-all duration-200 pointer-events-none
                ${
                  focusedInput === 'password' || password
                    ? '-top-3 text-sm text-blue-500 bg-white px-2'
                    : 'top-2 sm:top-3 text-gray-500'
                }`}
            >
              Password
            </label>
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
         </div>

         <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-blue-500 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-sm text-blue-500 hover:text-blue-600">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 sm:py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium"
          >
            Sign in
          </button>

          <p className="text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/register" className="text-blue-500 hover:text-blue-600 font-medium">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
