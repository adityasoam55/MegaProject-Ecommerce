import React, { useCallback, useEffect, useMemo, useState } from 'react';
import ProductList from './ProductList';
import { getProductList } from './api';
import { withUser } from "./withProvider";
import { range } from 'lodash';
import { Link, useSearchParams } from 'react-router-dom';

function ProductListPage({ setUser }) {

  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("default")
  const [productList, setProductList] = useState([]);
  const [pages, setPages] = useState(0);
  
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSkip = +(searchParams.get("skip") || 0);
  const [skip, setSkip] = useState(initialSkip);

  let page = Math.ceil(skip / 30);

  useEffect(function () {
    let sortBy;

    if (sort == "title") {
      sortBy = "title";
    } else if (sort == "price") {
      sortBy = "price";
    }

    getProductList(sortBy, skip).then(function (body) {
      let p = Math.ceil(body.total / 30);
      setPages(p);
      setProductList(body.products);
    })
  }, [sort, skip])

  useEffect(() => {
   const newSkip = +(searchParams.get("skip") || 0);
   setSkip(newSkip);
  }, [searchParams]);

  const newData = useMemo(() => {
    return productList.filter((item) => {
      const title = item.title.toLowerCase();
      // return title.indexOf(query) != -1;
      return title.includes(query);
    })
  }, [productList, query])

  function handleSearch(e) {
    setQuery(e.target.value.toLowerCase());
  }


  function handleSort(e) {
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

      <div className="w-full flex justify-center gap-2 pt-2 pb-3">
        {range(0, pages).map((pageNo) => (
          <Link
            key={pageNo}
            to={"?skip=" + (pageNo * 30)}
            className={"px-2 border border-black " + (pageNo == page ? "bg-orange-400" : "bg-indigo-400")}
            onClick={() => {
              setSkip(pageNo * 30);
            }}
          >
            {pageNo + 1}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default withUser(ProductListPage);
