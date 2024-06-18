import axios from "axios";

export function getProductList(sortBy, skip, order) {

let params = {};
let limit = 30;

if(sortBy){
  params.sortBy = sortBy;
  params.order = order;
}

if(skip){
  params.skip = skip;
}

if(limit){
  params.limit = limit;
}

  return axios
  .get("https://dummyjson.com/products", {
    params,
  })
  .then(function(response){
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
