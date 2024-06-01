import React, { useEffect, useState } from 'react'
import { getProductData } from './api'
import Loading from './Loading';

function CartPage({ cart }) {
    const [products, setProducts] = useState([]);
    const productIds = Object.keys(cart);

    useEffect(function () {
        const myProductPromises = productIds.map(function (id) {
            return getProductData(id);
        })

        Promise.all(myProductPromises).then(function (products) {
            setProducts(products)
        })
    }, [])

    if(!products){
        return (
            <Loading />
        );
    }

    return (
        <div>
            {products.map(function(item){
                return(
                    <h2 key={item.id}>{item.title}</h2>
                );
            })

            }
        </div>
    )
}

export default CartPage
