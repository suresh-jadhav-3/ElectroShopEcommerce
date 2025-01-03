import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loader from './Loader'

function PopularProduct({ addToCart }) {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const trendingRes = await axios("https://fakestoreapi.in/api/products?limit=50");
                const shuffledProducts = shuffleArray(trendingRes.data.products);
                setProduct(shuffledProducts.slice(0, 4));
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

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

    return (
        <div className="min-h-screen bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                        Trending products
                    </h2>
                    <Link
                        to="/product"
                        className="flex items-center text-lg font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                        Shop the collection
                    </Link>
                </div>

                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-center">
                        {loading ? (
                            <div className="flex justify-center items-center">
                                <Loader />
                            </div>
                        ) : (
                            product.map((value, index) =>
                                 (
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
                            ))
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default PopularProduct;