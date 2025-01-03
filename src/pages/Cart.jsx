import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronRight, Minus, Plus, Trash2 } from 'lucide-react'


function Cart({ cart, setCart }) {

  const navigate = useNavigate();

  const truncateTitle = (title, maxLength) => {
    if (title.length > maxLength) {
      return title.substring(0, maxLength) + '...';
    }
    return title;
  };

  const increment = (id) => {
    setCart((prevCart) => prevCart.map((items) => items.id === id ? { ...items, quantity: items.quantity + 1 } : items))
  }

  const decrement = (id) => {
    setCart((prevCart) =>
      prevCart.map((items) => items.id === id && items.quantity > 1 ? { ...items, quantity: items.quantity - 1 } : items))
  }

  const remove = (id) => {
    setCart((prevCart) => prevCart.filter((items) => items.id !== id))
  }

  const TotalPrice = () => {
    return cart.reduce((total, items) => total + items.price * items.quantity, 0)
  }

  return (
   
      <section className="py-24 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">

          <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">Shopping Cart</h2>

         
          {cart.length === 0 ? (
            <div className="text-center py-6">
              <h3 className="font-semibold text-xl text-gray-500">Your cart is currently empty.</h3>
              <p className="text-gray-400">Add some products to your cart to see them here.</p>
              <button onClick={() => navigate('/product')} className="mt-4 rounded-full py-2 px-4 bg-indigo-600 text-white font-semibold hover:bg-indigo-700">
                Start Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="hidden lg:grid grid-cols-2 py-6">
                <div className="font-normal text-xl leading-8 text-gray-500">Product</div>
                <p className="font-normal text-xl leading-8 text-gray-500 flex items-center justify-between">
                  <span className="w-full max-w-[260px] text-center ml-20">Quantity</span>
                  <span className="w-full max-w-[200px] text-center">Total</span>
                </p>
              </div>

              {cart.map((item, index) => (
                <div key={index} className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6">
                  <div className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
                    <div className="img-box"><img src={item.image} alt="perfume bottle image" className="xl:w-[140px] rounded-xl object-cover" /></div>
                    <div className="pro-data w-full max-w-sm ">
                      <h5 className="font-semibold text-xl leading-8 text-black max-[550px]:text-center">{truncateTitle(item.title, 25)}</h5>
                      <p className="font-normal text-lg leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center">{item.brand}</p>
                      <h6 className="font-medium text-lg leading-8 text-indigo-600  max-[550px]:text-center">${item.price}</h6>
                    </div>
                  </div>
                  <div className="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
                    <div className="flex items-center w-full mx-auto justify-center">
                      <button onClick={() => decrement(item.id)} className="group rounded-l-full px-4 py-[12px] border border-gray-500 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50">
                        <Minus />
                      </button>
                      <input type="text"
                        className="border-y border-gray-500 outline-none text-gray-900 font-semibold text-lg w-full max-w-[100px] min-w-[80px] placeholder:text-gray-900 py-[10px] text-center bg-transparent"
                        placeholder={item.quantity} />
                      <button onClick={() => increment(item.id)} className="group rounded-r-full px-4 py-[12px] border border-gray-500 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50">
                        <Plus />
                      </button>
                    </div>
                    <h6 className="text-indigo-600 font-manrope font-bold text-2xl leading-9 w-full max-w-[176px] text-center">
                      ${(item.price * item.quantity).toFixed(2)}</h6>
                    <button onClick={() => remove(item.id)} className="text-blue-500 font-semibold"><Trash2 className='text-blue-500' /></button>
                  </div>
                </div>
              ))}

              <div className="bg-gray-50 rounded-xl p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto">
                <div className="flex items-center justify-between w-full py-6 border-t-2 border-gray-500">
                  <p className="font-manrope font-medium text-2xl leading-9 text-gray-900">Total</p>
                  <h6 className="font-manrope font-medium text-2xl leading-9 text-indigo-500">${TotalPrice()}</h6>
                </div>
              </div>
              <div className="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8">
                <button onClick={() => navigate('/product')}
                  className="rounded-full py-4 w-full max-w-[280px] flex items-center bg-indigo-50 justify-center transition-all duration-500 hover:bg-indigo-100">
                  <span className="px-2 font-semibold text-lg leading-8 text-indigo-600">Continue Shopping</span>
                  <ChevronRight />
                </button>
                <button
                  className="rounded-full w-full max-w-[280px] py-4 text-center justify-center items-center bg-indigo-600 font-semibold text-lg text-white flex transition-all duration-500 hover:bg-indigo-700">Continue
                  to Payment
                  <ChevronRight className='ml-2' />
                </button>
              </div>
            </>
          )}
        </div>
      </section>
   
  )
}

export default Cart