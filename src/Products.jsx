import React from 'react'
import { Link } from 'react-router-dom';

function Products({ title, price, category, img, id }) {
  return (
    <div className='bg-gray-300 p-2 rounded-md m-2 max-w-xs'>
      <div className='w-full aspect-square '>
        <img src={img} alt="product photo" className='w-full h-full rounded-md' />
      </div>
      <h3>{title}</h3>
      <p className='text-sm'>{category}</p>
      <p className='text-sm text-blue-500'>${price}</p>
      <Link to={"/products/" + id} className='text-sm font-md text-white'>view details</Link>
    </div>
  )
}

export default Products;
