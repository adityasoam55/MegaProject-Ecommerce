import React from 'react';
import { RxReload } from 'react-icons/rx';


function Loading() {
  return (
    <div className='h-full flex justify-center items-center gap-2 grow text-3xl' >
        <h2>Loading</h2>
      <h1 className='animate-spin'><RxReload /></h1>
    </div>
  )
}

export default Loading;
