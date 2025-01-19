import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { useClerk } from '@clerk/clerk-react'

const Navbar = () => {
  const {openSignIn} = useClerk()
  return (
    <div className='flex items-center justify-between mx-4 py-3 lg:mx-44'>
      <Link to={'/'}>
        <img className='w-32 sm:w-44 ' src={assets.logo}/>
      </Link>
      <button onClick={()=>openSignIn({})} className='bg-zinc-800 text-white flex items-center gap-4 px-4 py-2 sm:px-8 sm:py-3 text-sm rounded-full hover:scale-105 transition-all duration-700'>
        Get Started <img className='w-3 sm:w-4' src={assets.arrow_icon}/>
      </button>
    </div>
  )
}

export default Navbar
