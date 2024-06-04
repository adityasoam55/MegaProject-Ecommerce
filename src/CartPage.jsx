import React, { useEffect, useState } from "react";
import { getProductData } from "./api";
import Input from "./Input";
import Loading from "./Loading";
import CartList from "./CartList";

function CartPage({ cart, updateCart }) {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const productsIds = Object.keys(cart);
    const MyProductPromises = productsIds.map(function (id) {
      return getProductData(id);
    });

    Promise.all(MyProductPromises).then(function (products) {
      setProducts(products);
      setLoading(false);
    });
  }, [cart]);


  if (loading) {
    return <Loading />;
  }

  return (
    <div className="p-10">
      <CartList products={products} cart={cart} updateCart={updateCart}/>
    </div>
  );
}

export default CartPage;
