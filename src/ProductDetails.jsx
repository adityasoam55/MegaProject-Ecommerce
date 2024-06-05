import React, { useEffect, useState } from 'react';
import { getProductData } from './api';
import { Link, useParams } from 'react-router-dom';
import Loading from './Loading';
import NotFound from './NotFound';

function ProductDetails({ onAddToCart }) {
    const id = +(useParams().id);
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true);
    const [count, setCount] = useState(1);

    useEffect(function () {
        const p = getProductData(id);

        p.then(function (product) {
            setProduct(product);
            setLoading(false);
        }).catch(function () {
            console.log("Error, Product not found...");
            setLoading(false);
        })
    }, [id])

    function handleCountChange(e) {
        setCount(+e.target.value);
    }

    function handleButtonClick() {
        onAddToCart(id, count);
    }

    if (loading) {
        return <Loading />
    }

    if (!product) {
        return <NotFound />
    }

    return (
        <div className='flex flex-col items-center justify-center py-12 h-full'>
            <Link to="/" className='text-blue-500 mr-2'>Go back</Link>
            <div className='bg-white m-1 px-2 py-1 rounded-md w-80 flex flex-col items-center'>
                <div className='w-full h-60 '>
                    <img src={product.thumbnail} alt="product photo" className='w-full h-full rounded-md' />
                </div>
                <div>
                    <h3>{product.title}</h3>
                    <p className='text-sm'>{product.category}</p>
                    <p className='text-sm text-blue-500'>${product.price}</p>
                    <p>{product.description}</p>
                </div>
                <div className='self-start'>
                    <input className='w-10 rounded outline-none px-1 mx-2'
                        type="number"
                        value={count}
                        onChange={handleCountChange}
                    />
                    <button className='border border-black px-2 rounded-md outline-none bg-red-400 text-white'
                        onClick={handleButtonClick}
                    >Add</button>
                </div>
            </div>

            <div className='flex gap-5'>
                {id > 1 && <Link to={"/products/" + (id - 1)} className='text-blue-500'>Prev</Link>}
                {id < 100 && <Link to={"/products/" + (id + 1)} className='text-blue-500'>Next</Link>}
            </div>
        </div>
    );
}

export default ProductDetails;


