import React, { useState } from 'react';
import { Search, User, ShoppingCart, Globe, ChevronDown, Menu } from 'lucide-react';

export default function NergSolarNavbar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="w-full overflow-x-hidden">
      {/* Top Bar */}
      <div className="bg-gray-50 border-b border-gray-200 px-4 md:px-10 py-2 flex justify-between items-center text-xs">
        <div className="text-gray-700 truncate">
          Drivex Energy 24X7 Agent & Pre-sales Support Mon-Fri 6AM to 5PM +234 (818) 363 6919
          <a href="#" className="underline ml-1 hover:text-blue-500">
            Contact Us
          </a>
        </div>

        <div className="flex items-center gap-2 cursor-pointer text-gray-700 hover:text-blue-500 flex-shrink-0">
          <Globe size={16} />
          <span className="whitespace-nowrap">Nigeria (English)</span>
          <ChevronDown size={12} />
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white border-b border-gray-200 px-4 md:px-10 py-4">

        {/* MOBILE NAVBAR */}
        <div className="flex justify-between items-center md:hidden">
          <button className="p-2" onClick={() => setOpenMenu(!openMenu)}>
            <Menu size={26} className="text-gray-800" />
          </button>

          {/* Mobile Logo + Text */}
          <a href="/" className="flex items-center gap-3 flex-shrink-0">
            <img
              src="/images/header_logo.png"
              alt="Drivex Energy Logo"
              className="h-10 w-auto object-contain"
            />

            <div className="leading-tight">
              <div className="text-sm font-bold text-gray-800 whitespace-nowrap">
                DRIVEX ENERGY
              </div>
              <div className="text-[10px] text-gray-500 whitespace-nowrap">
                Solar Powered Solutions
              </div>
            </div>
          </a>

          {/* Mobile Icons */}
          <div className="flex items-center gap-3">
            <Search size={22} />
            <User size={22} />
            <ShoppingCart size={22} />
          </div>
        </div>

        {/* DESKTOP NAVBAR */}
        <div className="hidden md:flex justify-between items-center">

          {/* Desktop Logo + Text */}
          <a href="/" className="flex items-center gap-3 flex-shrink-0">
            <img
              src="/images/header_logo.png"
              alt="Drivex Energy Logo"
              className="h-12 w-auto object-contain"
            />

            <div className="leading-tight">
              <div className="text-lg font-bold text-gray-800">
                DRIVEX ENERGY
              </div>
              <div className="text-xs text-gray-500">
                Solar Powered Solutions
              </div>
            </div>
          </a>

          {/* Navigation Links */}
          <ul className="flex gap-6 md:gap-9 list-none overflow-x-auto">
            {[
              'Sale',
              'New Release',
              'Products',
              'Scenarios',
              'Explore',
              'Education',
              'Support',
            ].map((item) => (
              <li key={item} className="flex-shrink-0">
                <a
                  href={
                    item === 'Products'
                      ? '/products/all'
                      : `#${item.toLowerCase().replace(' ', '-')}`
                  }
                  className="text-gray-800 text-sm font-medium hover:text-cyan-500 transition-colors whitespace-nowrap"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Icons */}
          <div className="flex items-center gap-3 md:gap-5 flex-shrink-0">
            <button className="p-2 hover:text-cyan-500">
              <Search size={22} />
            </button>
            <button className="p-2 hover:text-cyan-500">
              <User size={22} />
            </button>
            <button className="p-2 hover:text-cyan-500">
              <ShoppingCart size={22} />
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`
            md:hidden overflow-hidden transition-all duration-300
            ${openMenu ? 'max-h-[400px] opacity-100 mt-4' : 'max-h-0 opacity-0'}
          `}
        >
          <ul className="bg-white border rounded-lg shadow p-4 space-y-4">
            {[
              'Sale',
              'New Release',
              'Products',
              'Scenarios',
              'Explore',
              'Education',
              'Support',
            ].map((item, i) => (
              <li
                key={item}
                className={`
                  transform transition-all duration-300
                  ${openMenu ? 'translate-x-0 opacity-100' : 'translate-x-5 opacity-0'}
                `}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <a
                  href={
                    item === 'Products'
                      ? '/products/all'
                      : `#${item.toLowerCase().replace(' ', '-')}`
                  }
                  className="text-gray-800 text-sm font-medium hover:text-cyan-500"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </nav>
    </div>
  );
}