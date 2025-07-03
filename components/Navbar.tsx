'use client'; // if you're using the App Router

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#75c014] px-4 sm:px-6 py-4 shadow font-serif">
      <div className="flex justify-between items-center">
        {/* Brand */}
        <div className="text-xl font-bold text-black">
          <Link href="/">Quiz App</Link>
        </div>

        {/* Hamburger toggle for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black text-2xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link
              href="/random-question"
              className="inline-block px-4 py-2 text-black hover:bg-amber-200 rounded-3xl transition duration-200"
            >
              Random Question Mode
            </Link>
          </li>
          <li>
            <Link
              href="/categories"
              className="inline-block px-4 py-2 text-black hover:bg-amber-200 rounded-3xl transition duration-200"
            >
              Categories
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="mt-4 md:hidden space-y-3">
          <li>
            <Link
              href="/random-question"
              className="block px-4 py-2 text-black hover:bg-amber-200 rounded-3xl transition duration-200"
              onClick={() => setIsOpen(false)}
            >
              Random Question Mode
            </Link>
          </li>
          <li>
            <Link
              href="/categories"
              className="block px-4 py-2 text-black hover:bg-amber-200 rounded-3xl transition duration-200"
              onClick={() => setIsOpen(false)}
            >
              Categories
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
