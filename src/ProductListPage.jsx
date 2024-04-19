import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';
import { getProductList } from './api';

function ProductListPage() {
 
    const [query, setQuery] = useState("");
  const [sort, setSort] = useState("default")
  const [productList, setProductList] = useState([]);

  useEffect(function(){
    const xyz = getProductList();

    xyz.then(function(products){
      setProductList(products);
    })
  },[])
   
 let newData = productList.filter(function (item) {
    const title = item.title.toLowerCase();

    return title.indexOf(query) != -1;
  })

  if (sort == "price") {
    newData.sort(function (x, y) {
      return x.price - y.price;
    })
  } else if(sort == "name"){
    newData.sort(function(x,y){
      return x.title < y.title ? -1 : 1;
    })
  }

  function handleSearch(e) {
    const newQuery = e.target.value.toLowerCase();
    setQuery(newQuery);
  }

  function handleSort(e) {
    setSort(e.target.value);
  }

  return (
    <div>
      <div className='flex justify-center gap-3 py-2'>
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
          <option value="name">Sort by Name</option>
        </select>
      </div>
      <ProductList products={newData} />
    </div>
  )
}

export default ProductListPage;
