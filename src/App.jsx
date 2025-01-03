
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from './Layout';
import { About, Home, LoginPage, Register, Product, SinglePage, Cart, Contact} from './pages'

function App() {
  const [cart, setCart] = useState([]);

  

  const addToCart = (product) => {
    
      setCart((prevCart) => {
        const existingProduct = prevCart.find((items) => items.id === product.id);

        if (existingProduct) {
          alert("Already added this product");
          return prevCart.map((cartItems) =>
            cartItems.id === product.id ? { ...cartItems, quantity: cartItems.quantity + 1 } : cartItems
          );
        } else {
          alert("Product added to cart!");
          return [...prevCart, { ...product, quantity: 1 }];
        }
      });
    
  };

  return (
    <>
    
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout cart={cart} />}>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
          <Route path="/product" element={<Product addToCart={addToCart} />} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/product/:id" element={<SinglePage addToCart={addToCart} />} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;