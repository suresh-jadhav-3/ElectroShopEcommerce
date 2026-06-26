import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ShimmerEffect from "../components/ShimmerEffect";
import Loader from "../components/Loader";

function Product({ addToCart }) {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingCategory, setLoadingCategory] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [displayCount, setDisplayCount] = useState(8);
  const [error, setError] = useState(null);

  const allowedCategories = [
    "smartphones",
    "laptops",
    "tablets",
    "mobile-accessories",
  ];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        // Fetch Categories
        const categoryRes = await axios.get(
          "https://dummyjson.com/products/categories"
        );

        const filteredCategories = categoryRes.data.filter((cat) =>
          allowedCategories.includes(cat.slug)
        );

        setCategories(filteredCategories);

        // Fetch Products from all allowed categories
        const responses = await Promise.all(
          allowedCategories.map((category) =>
            axios.get(
              `https://dummyjson.com/products/category/${category}`
            )
          )
        );

        const allProducts = responses.flatMap(
          (res) => res.data.products
        );

        setProducts(allProducts);
      } catch (err) {
        console.log(err);
        setError("Failed to load products.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const fetchProductsByCategory = async (category) => {
    setLoadingCategory(true);

    try {
      const res = await axios.get(
        `https://dummyjson.com/products/category/${category}`
      );

      setProducts(res.data.products);
      setDisplayCount(8);
    } catch (err) {
      console.log(err);
    } finally {
      setLoadingCategory(false);
    }
  };

  const loadMoreProducts = () => {
    setLoadingMore(true);

    setTimeout(() => {
      setDisplayCount((prev) => prev + 8);
      setLoadingMore(false);
    }, 800);
  };

  const truncateTitle = (title, length) => {
    return title.length > length
      ? title.substring(0, length) + "..."
      : title;
  };

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    addToCart(product);
  };

  if (error) {
    return (
      <div className="text-center py-10 text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen">

      {/* Categories */}

      <div className="py-10">
        <h1 className="text-4xl font-bold text-center mb-10">
          Categories
        </h1>

        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 px-4">
          {categories.map((category) => (
            <div
              key={category.slug}
              onClick={() =>
                fetchProductsByCategory(category.slug)
              }
              className="bg-gray-200 rounded-lg p-3 cursor-pointer hover:bg-blue-600 hover:text-white transition"
            >
              <h3 className="text-center font-semibold">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {loadingCategory && <ShimmerEffect />}

      {/* Products */}

      <section className="max-w-7xl mx-auto px-4 py-8">

        {loading ? (
          <ShimmerEffect />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {products
              .slice(0, displayCount)
              .map((product) => (

                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow hover:shadow-lg transition"
                >
                  <Link to={`/product/${product.id}`}>

                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="w-full h-56 object-contain p-4"
                    />

                    <div className="p-4">

                      <h2 className="font-bold text-sm mb-2">
                        {truncateTitle(product.title, 30)}
                      </h2>

                      <p className="font-bold text-lg mb-3">
                        ${product.price}
                      </p>

                      <button
                        onClick={(e) =>
                          handleAddToCart(e, product)
                        }
                        className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
                      >
                        Add to Cart
                      </button>

                    </div>

                  </Link>
                </div>

              ))}

          </div>
        )}

      </section>

      {/* Load More */}

      {displayCount < products.length && (
        <div className="text-center mb-10">

          <button
            onClick={loadMoreProducts}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            {loadingMore ? <Loader /> : "Load More"}
          </button>

        </div>
      )}

    </div>
  );
}

export default Product;