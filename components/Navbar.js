import Link from 'next/link'
import React from 'react'
import { BsFillHandbagFill } from 'react-icons/bs';
const Navbar = () => {
  return (
    <div>
      <header className="text-yellow-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-yellow-500 mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Tailblocks</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href={'/'}><a className="mr-5 hover:text-pink-900">Home</a></Link>
            <Link href={'/women'}><a className="mr-5 hover:text-pink-900">Women</a></Link>
            <Link href={'/men'}><a className="mr-5 hover:text-pink-900">Men</a></Link>
            <Link href={'/kids'}><a className="mr-5 hover:text-pink-900">Kids</a></Link>

          </nav>
          <div>
            <button className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-pink-200 rounded text-base mt-4 md:mt-0">
              <BsFillHandbagFill />
            </button>
            
          </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar