import React from "react";
import { RxCross2 } from "react-icons/rx";

function CartRow({ product, quantity, onQuantityChange, updateCart, cart }) {
  
  function handleChange(e) {
    onQuantityChange(product.id, +e.target.value);
  }

  function handleRemove(productId) {
    console.log("product to be removed", productId);

    const newCart = { ...cart };
    delete newCart[productId];
    updateCart(newCart);
    console.log("cart after", newCart);
  }

  return (
    <div className="flex space-x-4 border border-gray-300 items-center px-4 py-2">
      <button
        className="w-6 text-red-500 text-xl flex justify-center items-center"
        onClick={() => {
          handleRemove(product.id);
        }}
      >
        <RxCross2 />
      </button>
      <div className="w-12 h-12">
        <img className="w-full h-full object-cover " src={product.thumbnail} />
      </div>
      <span className="grow text-center">{product.title}</span>
      <span className="w-14">{product.price}</span>
      <input
        className="w-10 border border-black pl-2 outline-none"
        type="number"
        value={quantity}
        onChange={handleChange}
      />
      <span className="w-14">${product.price * quantity}</span>
    </div>
  );
}

export default CartRow;
