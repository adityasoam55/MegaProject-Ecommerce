import React from 'react';
import Products from './Products';
import Loading from './Loading';

function ProductList({ products }) {

  return (
    <div className='grid grid-cols-3 max-w-6xl mx-auto'>
      {
        products.map(function (item) {
          return (

            <Products
              key={item.id}
              id={item.id}
              img={item.thumbnail}
              title={item.title}
              price={item.price}
              category={item.category}
            />

          );
        })
      }
    </div>
  )
}

export default ProductList;
