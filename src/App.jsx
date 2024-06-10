import React, { useState } from 'react';
import ProductListPage from './ProductListPage';
import { Routes, Route } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import NotFound from './NotFound';
import NavBar from './NavBar';
import Login from './Login';
import Signup from './SignUp';
import PasswrodReset from './PasswordReset';
import CartPage from './CartPage';
import Test from './Test';

function App() {
const [user, setUser] = useState();
console.log("Logged in user is", user);

  const path = window.location.pathname;

  const savedDataString = localStorage.getItem("my-cart") || "{}";
  const savedData = JSON.parse(savedDataString);

  const [cart, setCart] = useState(savedData);

  function handleAddToCart(productId, count) {
    const oldCount = cart[productId] || 0;

    const newCart = ({ ...cart, [productId]: oldCount + count });
 
    updateCart(newCart);
  }

  function updateCart(newCart){
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
      <div className='grow bg-gray-100'>
        <Routes>
          <Route path='/' element={<ProductListPage />} ></Route>
          <Route path="/cartpage/" element={<CartPage cart={cart} updateCart={updateCart} />}></Route>
          <Route path="/products/:id/" element={<ProductDetails onAddToCart={handleAddToCart} />} ></Route>
          <Route path="*" element={<NotFound />} />
          <Route path="/signup/" element={<Signup />}></Route>
          <Route path="/login/" element={<Login setUser={setUser}/>}></Route>
          <Route path='/passwordreset' element={<PasswrodReset />}></Route>
          {/* <Route path="test" element={<Test />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
