import React from 'react';
import { PiBagLight } from 'react-icons/pi';
import { Link } from 'react-router-dom';


function NavBar({ productCount }) {
    return (
        <div className='flex justify-between items-center text-center bg-tomato-default w-full py-2 px-4'>
            <h2 className='font-semibold'>MyEasyCart</h2>
            <div className='w-full flex justify-center gap-5 font-medium max-md:text-sm'>
                <Link  className="hover:underline underline-offset-8" to="/">Home</Link>
                <span>Categoery</span>
                <Link className="hover:underline underline-offset-8" to="/login">Login</Link>
            </div>
            <div className='relative flex justify-center'>
                <Link to="/cartpage" className='text-white text-4xl z-10'><PiBagLight /></Link>
                <span className='absolute top-2'>{productCount}</span>
            </div>
        </div>
    )
}

export default NavBar
