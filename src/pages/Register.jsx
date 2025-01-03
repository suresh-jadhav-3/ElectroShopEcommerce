
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";


function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    alert("Form is not competed")
  };

  return (

    <div className="p-10 mx-auto ">
      <h1 className="mb-8 font-extrabold text-4xl">Register</h1>
      <div className="grid grid-cols-1 mx-auto max-w-[500px] justify-center items-center gap-8">
        <form onSubmit={handleRegister}>
          <div>
            <label className="block font-semibold" htmlFor="name">Name</label>
            <input className="p-4 shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              name="name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}

              required="required" autoFocus="autofocus" />
          </div>

          <div className="mt-4">
            <label className="block font-semibold" htmlFor="email">Email</label>
            <input className="p-4 shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email" required="required" />
          </div>

          <div className="mt-4">
            <label className="block font-semibold" htmlFor="password">Password</label>
            <div className="relative">
              <input className="p-4 shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type={showPassword ? "text" : "password"} name="password" required="required" autoComplete="new-password" value={password}
                onChange={(e) => setPassword(e.target.value)} />
              <button type="button" onClick={togglePasswordVisibility} className="absolute inset-y-0 right-0 flex items-center pr-3">
                {showPassword ? <FaRegEyeSlash className="h-5 w-5 text-gray-500" /> : <FaRegEye className="h-5 w-5 text-gray-500" />}

              </button>
            </div>
          </div>

          <div className="flex items-center justify-between mt-8">
            <button type="submit" className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">Register</button>
            <Link to='/login' className='text-blue-500 hover:text-blue-800'>Already registered?</Link>
          </div>
        </form>

        <aside className="">
          <div className="bg-gray-100 p-8 rounded">
            <h2 className="font-bold text-2xl">Instructions</h2>
            <ul className="list-disc mt-4 list-inside">
              <li>All users must provide a valid email address and password to create an account.</li>
              <li>Users must not use offensive, vulgar, or otherwise inappropriate language in their username or profile information.</li>
              <li>Users must not create multiple accounts for the same person.</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>

  );
}

export default Register;



