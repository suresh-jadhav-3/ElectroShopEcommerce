import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">About Us</h1>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Welcome to ElectroShop</h2>
          <p className="text-gray-600 leading-relaxed">
            At ElectroShop, we are passionate about bringing you the latest and greatest in electronics. Whether you're looking for cutting-edge smartphones, high-performance laptops, immersive audio systems, or smart home appliances, we've got you covered. Our mission is to make technology accessible and affordable for everyone.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to provide our customers with the best shopping experience by offering a wide range of high-quality electronics at competitive prices. We strive to stay ahead of the curve by constantly updating our inventory with the latest innovations in technology.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose ElectroShop?</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Wide selection of products from top brands.</li>
            <li>Competitive pricing and exclusive deals.</li>
            <li>Fast and reliable shipping across the country.</li>
            <li>Exceptional customer service and support.</li>
            <li>Secure and hassle-free payment options.</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Product Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {['Mobile Phones', 'Laptops', 'Televisions', 'Audio Systems', 'Home Appliances', 'Gaming Consoles', 'Accessories'].map((category, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg text-center hover:bg-gray-200 transition-colors">
                <h3 className="text-lg font-medium text-gray-800">{category}</h3>
              </div>
            ))}
          </div>
        </div>


        <div className="text-center mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Join Us Today!</h2>
          <p className="text-gray-600 mb-4">
            Explore our extensive range of electronics and find the perfect device for your needs. 
            Sign up for our newsletter to stay updated on the latest products and exclusive offers!
          </p>
          <Link to="/login" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
            Sign Up Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;