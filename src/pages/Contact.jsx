import { LocateIcon, Mail, MapPin, Phone } from 'lucide-react';
import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredMethod: 'email',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRadioChange = (e) => {
    setFormData({
      ...formData,
      preferredMethod: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form Data Submitted:', formData);
  };

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div className="lg:mb-0 mb-10">
            <div className="group w-full h-full">
              <div className="relative h-full">
                <img
                  src="https://pagedone.io/asset/uploads/1696488602.png"
                  alt="ContactUs tailwind section"
                  className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-indigo-700 object-cover"
                />
                <h1 className="font-manrope text-white text-4xl font-bold leading-10 absolute top-11 left-11">
                  Contact us
                </h1>
                <div className="absolute bottom-0 w-full lg:p-11 p-5">
                  <div className="bg-white rounded-lg p-6 block">
                    <a href="#" className="flex items-center mb-6">
                      <Phone stroke="#4F46E5" />
                      <h5 className="text-black text-base font-normal leading-6 ml-5">470-601-1911</h5>
                    </a>
                    <a href="#" className="flex items-center mb-6">
                      <Mail stroke="#4F46E5" />
                      <h5 className="text-black text-base font-normal leading-6 ml-5">abcd1234@gmail.com</h5>
                    </a>
                    <a href="javascript:;" className="flex items-center">

                      <MapPin stroke="#4F46E5" />
                      <h5 className="text-black text-base font-normal leading-6 ml-5">India</h5>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
            <h2 className="text-indigo-600 font-manrope text-4xl font-semibold leading-10 mb-11">Send Us A Message</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
                placeholder="Name"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
                placeholder="Email"
                required
              />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
                placeholder="Phone"
                required
              />
              <div className="mb-10">
                <h4 className="text-gray-500 text-lg font-normal leading-7 mb-4">Preferred method of communication</h4>
                <div className="flex">
                  <div className="flex items-center mr-11">
                    <input
                      id="radio-group-1"
                      type="radio"
                      name="preferredMethod"
                      value="email"
                      checked={formData.preferredMethod === 'email'}
                      onChange={handleRadioChange}
                      className="hidden checked:bg-no-repeat checked:bg-center checked:border-black checked:bg-black"
                    />
                    <label htmlFor="radio-group-1" className="flex items-center cursor-pointer text-gray-500 text-base font-normal leading-6">
                      <span className={`border border-gray-300 rounded-full mr-2 w-4 h-4 ml-2 ${formData.preferredMethod === 'email' ? 'bg-black border-black' : ''}`}></span> Email
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="radio-group-2"
                      type="radio"
                      name="preferredMethod"
                      value="phone"
                      checked={formData.preferredMethod === 'phone'}
                      onChange={handleRadioChange}
                      className="hidden checked:bg-no-repeat checked:bg-center checked:border-black checked:bg-black"
                    />
                    <label htmlFor="radio-group-2" className="flex items-center cursor-pointer text-gray-500 text-base font-normal leading-6">
                      <span className={`border border-gray-300 rounded-full mr-2 w-4 h-4 ml-2 ${formData.preferredMethod === 'phone' ? 'bg-black border-black' : ''}`}></span> Phone
                    </label>
                  </div>
                </div>
              </div>
              <input
                type="text"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full h-12 text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
                placeholder="Message"
                required
              />
              <button type="submit" className="w-full h-12 text-white text-base font-semibold leading-6 rounded-full transition-all duration-700 hover:bg-indigo-800 bg-indigo-600 shadow-sm">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;