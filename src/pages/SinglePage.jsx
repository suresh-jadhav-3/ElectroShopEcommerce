
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {Loader} from '../components';
import { Star } from 'lucide-react';

function SinglePage({ addToCart }) {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.in/api/products/${id}`);
        setProduct(response.data.product);
        console.log(response.data);
      } catch (err) {
        setError('Error fetching product details');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <div className="text-center text-red-500">{error}</div>;
  if (!product) return <div className="text-center">Product not found</div>;

  return (
    <div className="bg-gray-100">
      <div className="mx-auto px-4 py-8">
        <div className="flex md:flex-row flex-col justify-around  -mx-4">
          <div className="w-full px-4 mb-8">
            <img
              src={product.image}
              alt="Product"
              className="w-[500px] h-auto rounded-lg shadow-md mb-4"
            />
          </div>
          <div className="w-full  px-4">
            <h2 className="text-3xl font-bold mb-2">{product.title}</h2>
            <p className="text-gray-600 mb-4">{product.model}</p>
            <div className="mb-4">
              <span className="text-2xl font-bold mr-2">${product.price}</span>
            </div>
            <div className="flex items-center mb-4">
              <div className='flex gap-1'>
                <Star fill="#FFD700" stroke="#FFD700" />
                <Star fill="#FFD700" stroke="#FFD700" />
                <Star fill="#FFD700" stroke="#FFD700" />
                <Star fill="#FFD700" stroke="#FFD700" />
                <div className="relative w-6 h-6">
                  <Star className="absolute "   />
                  <div className="absolute overflow-hidden" style={{ width: '50%' }}>
                    <Star className="text-yellow-500" fill="#FFD700" stroke="#FFD700" />
                  </div>
                </div>
              </div>
              <span className="ml-2 text-gray-600">4.5 (120 reviews)</span>
            </div>

            <p className='text-gray-700 mb-6'>{product.description}</p>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Color:</h3>
              <div className="bg-gray-200 rounded-md w-16 h-6 text-center">
                {product.color}
              </div>
            </div>
            <div className="flex space-x-4 mb-6">
              <button
              onClick={() => addToCart(product)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Add to Cart
            </button>
              <button className="bg-gray-200 flex gap-2 items-center text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                Wishlist
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;


