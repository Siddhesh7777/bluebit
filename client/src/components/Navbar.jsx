import React from 'react'
import {Link} from 'react-router-dom'
import {RxAvatar} from 'react-icons/rx'

const Navbar = () => {

  

  return (
    <div className='bg-gray-300 flex justify-between align-middle p-4 z-[100] absolute w-full'>
      <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>MessMitra</h1>
          

      <div className='flex justify-center align-middle rounded text-white bg-black px-4 py-1'>
      <Link to='/login'>
      <button className='pr-4 cursor-pointer p-2'>Sign In</button>
      </Link>
      <button className='cursor-pointer h-full w-11 border-l pl-2'><RxAvatar className='h-full w-full'/></button>
      </div>
    </div>
  )
}

export default Navbar
