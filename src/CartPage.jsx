import React, { useEffect, useState } from "react";
import { getProductData } from "./api";
import Input from "./Input";
import { RxCross2 } from "react-icons/rx";
import Loading from "./Loading";

function CartPage({ cart, updateCart }) {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const productsIds = Object.keys(cart);

  useEffect(() => {
    const MyProductPromises = productsIds.map(function (id) {
      return getProductData(id);
    });

    Promise.all(MyProductPromises).then(function (products) {
      setProducts(products);
      setLoading(false);
    });
  }, [cart]);

  function handleChange() {
    console.log("handle change called");
  }

  function handleRemove(event) {
    const productId = event.currentTarget.getAttribute("productid");
    console.log("Item to be removed", productId);

    const newCart = { ...cart };
    delete newCart[productId];
    console.log("after", newCart);
    updateCart(newCart);
    setLoading(true);
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="p-5">
      {products.map(function (p) {
        return (
          <div key={p.id} className="flex gap-2 p-2 items-center">
            <div>{p.title}</div>
            <Input
              className=" w-10 px-1 "
              value={cart[p.id]}
              type="number"
              onChange={handleChange}
            />
            <button productid={p.id} onClick={handleRemove}>
              <RxCross2 />
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default CartPage;
