import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className='w-full h-full flex flex-col relative items-center justify-center'>
            <Link to="/" className='bg-blue-600 rounded-lg absolute px-2 py-0.5 top-16'>Back to Home</Link>
            <img className="w-full h-full object-cover" src="https://sitechecker.pro/wp-content/uploads/2023/06/404-status-code.png" alt="Page not found" />
        </div>
    );
}

export default NotFound;
