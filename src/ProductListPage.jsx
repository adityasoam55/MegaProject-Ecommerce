import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import { getProductList } from "./api";
import { withUser } from "./withProvider";
import { range } from "lodash";
import { Link, useSearchParams } from "react-router-dom";

function ProductListPage({ setUser }) {
  // const [q, setQ] = useState("");
  // const [sort, setSort] = useState("default");
  const [productList, setProductList] = useState([]);
  const [pages, setPages] = useState(0);

  const [searchParams, setSearchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams]);
  let { q, sort, skip } = params;

  q = q || "";
  sort = sort || "default";
  skip = skip || 0;

  // const initialSkip = +(searchParams.get("skip") || 0);
  // const [skip, setSkip] = useState(initialSkip);

  let page = Math.ceil(skip / 30);

  useEffect(
    function () {
      let sortBy;
      let order;

      if (sort == "title") {
        sortBy = "title";
      } else if (sort == "lowToHigh") {
        sortBy = "price";
      } else if (sort == "highToLow") {
        sortBy = "price";
        order = "desc";
      }

      getProductList(q, sortBy, skip, order).then(function (body) {
        let p = Math.ceil(body.total / 30);
        setPages(p);
        setProductList(body.products);
      });
    },
    [sort, skip, q],
  );

  useEffect(() => {
    const newSkip = +(searchParams.get("skip") || 0);
    // setSkip(newSkip);
    skip = newSkip;
  }, [searchParams]);

  function handleSearch(e) {
    setSearchParams(
      { ...params, q: e.target.value.toLowerCase(), skip: 0 },
      { replace: false },
    );
  }

  function handleSort(e) {
    setSearchParams({ ...params, sort: e.target.value }, { replace: false });
  }

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("my-cart");
    setUser(undefined);
  }

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3 py-2">
        <input
          className="border border-black rounded-sm pl-3 outline-none"
          type="text"
          placeholder="search"
          value={q}
          onChange={handleSearch}
        />
        <select
          className="border border-black rounded-sm outline-none"
          name="sort"
          id="select"
          onChange={handleSort}
        >
          <option value="default">Default sort</option>
          <option value="title">Sort by Title</option>
          <option value="lowToHigh">Price:LowToHigh</option>
          <option value="highToLow">Price:HighToLow</option>
        </select>
        <button
          className="bg-tomato-default rounded-md outline-none border border-black px-1"
          onClick={handleLogout}
        >
          LogOut
        </button>
      </div>
      <ProductList products={productList} />

      <div className="w-full flex justify-center gap-2 pt-2 pb-3">
        {range(0, pages).map((pageNo) => (
          <Link
            key={pageNo}
            to={"?" + new URLSearchParams({ ...params, skip: pageNo * 30 })}
            className={
              "px-2 border border-black " +
              (pageNo == page ? "bg-orange-400" : "bg-indigo-400")
            }
            onClick={() => {
              setSkip(pageNo * 30);
            }}
          >
            {pageNo + 1}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default withUser(ProductListPage);
