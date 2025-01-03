
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ShimmerEffect from '../components/ShimmerEffect'
import Loader from '../components/Loader';

function Product({ addToCart }) {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [displayCount, setDisplayCount] = useState(10);
  const [loadingMore, setLoadingMore] = useState(false);
  const [loadingCategory, setLoadingCategory] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const categoryRes = await axios("https://fakestoreapi.in/api/products/category");
        setCategories(categoryRes.data.categories);
        const productRes = await axios("https://fakestoreapi.in/api/products");
        setProducts(productRes.data.products);
      } catch (error) {
        setError("Error fetching data");
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);


  const loadMoreProducts = async () => {
    setLoadingMore(true);
    setTimeout(() => {
      setDisplayCount(prevCount => prevCount + 10);
      setLoadingMore(false);
    }, 1000);
  };

  const fetchProductsByCategory = async (category) => {
    setLoadingCategory(true);
    try {
      const productRes = await axios(`https://fakestoreapi.in/api/products/category?type=${category}`);
      setProducts(productRes.data.products);
    } catch (error) {
      setError("Error fetching products");
      console.error("Error fetching products:", error);
    } finally {
      setLoadingCategory(false);
    }
  };

  const truncateTitle = (title, maxLength) => {
    if (title.length > maxLength) {
      return title.substring(0, maxLength) + '...';
    }
    return title;
  };

  const handleAddToCart = (event, product) => {
    event.preventDefault();
    addToCart(product); 
  };


  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="min-h-screen">
      {/* Categories Section */}
      <div className="min-h-24 py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Categories</h1>
        </div>
        <div className="max-w-6xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-4">
          {categories.map((category, index) => (
            <div key={index} className="bg-gray-300 rounded-lg shadow-md p-2 flex items-center justify-center transition-shadow hover:shadow-lg cursor-pointer" onClick={() => fetchProductsByCategory(category)}>
              <h3 className="font-medium text-gray-900 uppercase text-center tracking-wider">{category}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Products Section */}
      {loadingCategory && <ShimmerEffect/>}
      <section className="max-w-7xl mx-auto px-4 sm:px- 6 lg:px-8 py-8">
        {loading ? <ShimmerEffect /> : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 items-center">
            {products.slice(0, displayCount).map((value, index) => (
              <div key={index} className="h-auto bg-white flex flex-col rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.01] transition-all">
                <Link to={`/product/${value.id}`}>
                  <div className="w-full">
                    <img src={value.image} alt="Product" className="w-full h-auto object-cover p-4" />
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <div className="flex-1">
                      <h5 className="text-sm sm:text-base font-bold text-gray-800 line-clamp-2">
                        {truncateTitle(value.title, 30)}
                      </h5>
                      <div className="mt-2 flex items-center flex-wrap gap-2">
                        <h6 className="text-sm sm:text-base font-bold text-gray-800">${value.price}</h6>
                        <div className="bg-gray-100 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer ml-auto" title="Wishlist">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-800 inline-block" viewBox="0 0 64 64">
                            <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={(event) => handleAddToCart(event, value)}
                      className="mt-2 p-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500"
                    >
                      Add to cart
                    </button>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Load More Button */}
      <div className="text-center mb-10">
        <button onClick={loadMoreProducts} className="px-4 py-2 rounded transition duration-200">
          {loadingMore ? <Loader /> : <span className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Load More</span>}
        </button>
      </div>
    </div>
  );
}

export default Product;