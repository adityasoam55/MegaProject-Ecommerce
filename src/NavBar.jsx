import React from 'react';
import { PiBagLight } from 'react-icons/pi';
import { Link } from 'react-router-dom';


function NavBar({ productCount }) {
    return (
        <div className='flex justify-between items-center text-center bg-tomato-default w-full py-2 px-4'>
            <h2>AMAZON.ORG</h2>
            <div className='w-full flex justify-center gap-5 font-medium '>
                <Link to="/">Home</Link>
                <span>Categoery</span>
                <Link to="/login">Login</Link>
            </div>
            <div className='relative flex justify-center'>
                <span className='text-white text-4xl'><PiBagLight /></span>
                <span className='absolute top-2'>{productCount}</span>
            </div>
        </div>
    )
}

export default NavBar
