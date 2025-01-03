import React from 'react';
import { Truck, DollarSign, Headphones } from 'lucide-react';

const Features = () => {
  return (
    <div className="py-12 border-y">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex items-center gap-4 border-b md:border-b-0 md:border-r ">
            <Truck size={40} />
            <div>
              <h3 className="font-bold text-lg">FREE SHIPPING & RETURN</h3>
              <p className="text-gray-300">Free shipping on all orders over $49</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 border-b md:border-b-0 md:border-r ">
            <DollarSign size={40} />
            <div>
              <h3 className="font-bold text-lg">MONEY BACK GUARANTEE</h3>
              <p className="text-gray-300">100% money back guarantee</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 border-b md:border-b-0  " >
            <Headphones size={40} />
            <div>
              <h3 className="font-bold text-lg">ONLINE SUPPORT 24/7</h3>
              <p className="text-gray-300">Awesome Support for 24/7 Days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features

