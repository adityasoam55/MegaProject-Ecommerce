import React, { useState, useEffect } from "react";
import CartRow from "./CartRow";

function CartList({ products, cart, updateCart }) {
  const [localCart, setLocalCart] = useState(cart);

  useEffect(
    function () {
      setLocalCart(cart);
    },
    [cart],
  );

  function handleQuantityChange(productId, newValue) {
    const newLocalCart = { ...localCart, [productId]: newValue };
    setLocalCart(newLocalCart);
  }

  function handleUpdateCartClick() {
    updateCart(localCart);
  }

  return (
    <div className="bg-white">
      <div className="flex space-x-4 px-4 py-2">
        <span className="pl-24 grow text-center">Products</span>
        <span>Price</span>
        <span className="w-14">Quantity</span>
        <span className="w-14">SubTotal</span>
      </div>
      {products.map(function (p) {
        return <CartRow
          key={p.id}
          product={p}
          quantity={localCart[p.id]}
          onQuantityChange={handleQuantityChange}
          updateCart={updateCart}
          cart={cart}
        />;
      })}
      <div className="px-4 py-2 flex justify-end">
        <button
          className="bg-orange-500 hover:bg-orange-400 text-white px-2 rounded-md"
          onClick={handleUpdateCartClick}
        >
          Update Cart
        </button>
      </div>
    </div>
  );
}

export default CartList;
