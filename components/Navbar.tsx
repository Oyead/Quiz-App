import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
   <nav className="bg-[#75c014] px-8 py-4 shadow font-serif">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold text-black">
          <Link href="/"> Quiz App</Link>
        </div>

        <ul className="flex space-x-6">
              <li >
            <Link href="/random-question" className="inline-block px-4 py-2 text-black hover:bg-amber-200 rounded-3xl transition-colors duration-200">
              Random Question Mode
            </Link>
          </li>
                 <li>
            <Link href="/categories" className="inline-block px-4 py-2 text-black hover:bg-amber-200 rounded-3xl transition-colors duration-200">
              Categories
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar