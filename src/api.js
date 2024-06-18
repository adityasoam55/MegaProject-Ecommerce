import axios from "axios";

export function getProductList(q, sortBy, skip, order) {
  let params = {};

  if (q) {
    params.q = q;
  }

  if (sortBy) {
    params.sortBy = sortBy;
    params.order = order;
  }

  if (skip) {
    params.skip = skip;
  }

  return axios
    .get("https://dummyjson.com/products/search", {
      params,
    })
    .then(function (response) {
      return response.data;
    });
}

export function getProductData(id) {
  return axios
    .get("https://dummyjson.com/products/" + id)
    .then(function (response) {
      return response.data;
    });
}
