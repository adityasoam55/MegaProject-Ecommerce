import React, { useCallback, useEffect, useMemo, useState } from 'react';
import ProductList from './ProductList';
import { getProductList } from './api';
import { withUser } from "./withProvider";

function ProductListPage({ setUser }) {

  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("default")
  const [productList, setProductList] = useState([]);
  const [skip, setSkip] = useState(0);

  useEffect(function () {
    let sortBy;

    if(sort == "title"){
      sortBy = "title";
    } else if(sort == "price"){
      sortBy = "price";
    }

    getProductList(sortBy, skip).then(function (products) {
      setProductList(products);
    })
  }, [sort, skip])

  let newData = productList.filter(function (item) {
    const title = item.title.toLowerCase();

    return title.indexOf(query) != -1;
  })


  // if (sort == "price") {
  //   newData.sort(function (x, y) {
  //     return x.price - y.price;
  //   })
  // } else if (sort == "name") {
  //   newData.sort(function (x, y) {
  //     return x.title < y.title ? -1 : 1;
  //   })
  // }


  // const handleSearch = useCallback(
  //   function (e) {
  //     console.log("handle search running");
  //     const newQuery = e.target.value.toLowerCase();
  //     setQuery(newQuery);
  //   }, [query]
  // );

  function handleSearch(e) {
    // console.log("handle search running");
    const newQuery = e.target.value.toLowerCase();
    setQuery(newQuery);
  }

  // const handleSort = useCallback(
  //   function (e) {
  //     console.log("sorting running");
  //     setSort(e.target.value);
  //   }, [sort]
  // );

  function handleSort(e) {
    // console.log("sorting running");
    setSort(e.target.value);
  }

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("my-cart")
    setUser(undefined);
  }

  return (
    <div >
      <div className='flex flex-wrap justify-center gap-3 py-2'>
        <input className='border border-black rounded-sm pl-3 outline-none'
          type="text"
          placeholder='search'
          value={query}
          onChange={handleSearch}
        />
        <select className='border border-black rounded-sm outline-none'
          name="sort"
          id="select"
          onChange={handleSort}
        >
          <option value="default">Default sort</option>
          <option value="price">Sort by Price</option>
          <option value="title">Sort by Title</option>
        </select>
        <button className='bg-tomato-default px-0.5 rounded-md outline-none'
          onClick={handleLogout}
        >LogOut</button>
      </div>
      <ProductList products={newData} />

      <div className="w-full flex justify-center gap-2">
        <button
          className="bg-orange-400 px-2 border border-black"
          onClick={() => setSkip(0)}
        >
          1
        </button>
        <button
          className="bg-orange-400 px-2 border border-black"
          onClick={() => setSkip(30)}
        >
          2
        </button>
        <button
          className="bg-orange-400 px-2 border border-black"
          onClick={() => setSkip(60)}
        >
          3
        </button>
        <button
          className="bg-orange-400 px-2 border border-black"
          onClick={() => setSkip(90)}
        >
          4
        </button>
        <button
          className="bg-orange-400 px-2 border border-black"
          onClick={() => setSkip(120)}
        >
          5
        </button>
      </div>
    </div>
  )
}

export default withUser(ProductListPage);
