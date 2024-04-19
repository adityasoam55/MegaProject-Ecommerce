import React, { useState } from 'react';
import ProductListPage from './ProductListPage';
import { Routes, Route } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import NotFound from './NotFound';
import NavBar from './NavBar';

function App() {
  const path = window.location.pathname;

  const savedDataString = localStorage.getItem("my-cart") || "{}";
  const savedData = JSON.parse(savedDataString);

  const [cart, setCart] = useState(savedData);

  function handleAddToCart(productId, count) {
    const oldCount = cart[productId] || 0;

    const newCart = ({ ...cart, [productId]: oldCount + count });
    setCart(newCart);
    const cartString = JSON.stringify(newCart);
    localStorage.setItem("my-cart", cartString);
  }

  const totalCount = Object.keys(cart).reduce(function (previous, current) {
    return previous + cart[current];
  }, 0);
  console.log("cart is", cart);

  return (
    <div className='h-screen w-screen overflow-scroll flex flex-col'>
      <NavBar productCount={totalCount} />
      <div className='grow'>
        <Routes>
          <Route path='/' element={<ProductListPage />} ></Route>
          <Route path="/products/:id/" element={<ProductDetails onAddToCart={handleAddToCart} />} ></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App
