import React, { useState } from 'react';
import { Search, User, ShoppingCart, Globe, ChevronDown, Menu, X } from 'lucide-react';

export default function NergSolarNavbar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="w-full max-w-[100vw] overflow-x-hidden">
      {/* Top Bar */}
      <div className="bg-gray-50 border-b border-gray-200 px-4 md:px-6 lg:px-10 py-2 flex justify-between items-center text-xs overflow-hidden">
        <div className="text-gray-700 truncate max-w-[60%] sm:max-w-none">
          Drivex Energy 24X7 Agent & Pre-sales Support Mon-Fri 6AM to 5PM +234 (818) 363 6919
          <a href="#" className="underline ml-1 hover:text-blue-500 hidden sm:inline">
            Contact Us
          </a>
        </div>

        <div className="flex items-center gap-2 cursor-pointer text-gray-700 hover:text-blue-500 flex-shrink-0">
          <Globe size={16} />
          <span className="whitespace-nowrap hidden sm:inline">Nigeria (English)</span>
          <span className="whitespace-nowrap sm:hidden">NG</span>
          <ChevronDown size={12} />
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white border-b border-gray-200 px-4 md:px-6 lg:px-10 py-4 relative z-50 overflow-hidden">

        {/* MOBILE NAVBAR */}
        <div className="flex justify-between items-center md:hidden">
          <button 
            className="p-2 z-50 relative flex-shrink-0" 
            onClick={() => setOpenMenu(!openMenu)}
            aria-label="Toggle menu"
          >
            {openMenu ? (
              <X size={26} className="text-gray-800 transition-transform duration-300" />
            ) : (
              <Menu size={26} className="text-gray-800 transition-transform duration-300" />
            )}
          </button>

          {/* Mobile Logo + Text */}
          <a href="/" className="flex items-center gap-2 flex-shrink min-w-0">
            <img
              src="/images/header_logo.png"
              alt="Drivex Energy Logo"
              className="h-8 w-auto object-contain flex-shrink-0"
            />

            <div className="leading-tight min-w-0">
              <div className="text-xs font-bold text-gray-800 whitespace-nowrap truncate">
                DRIVEX ENERGY
              </div>
              <div className="text-[9px] text-gray-500 whitespace-nowrap truncate">
                Solar Powered Solutions
              </div>
            </div>
          </a>

          {/* Mobile Icons */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <Search size={20} />
            <User size={20} />
            <ShoppingCart size={20} />
          </div>
        </div>

        {/* DESKTOP NAVBAR */}
        <div className="hidden md:flex justify-between items-center gap-4">

          {/* Desktop Logo + Text */}
          <a href="/" className="flex items-center gap-3 flex-shrink-0">
            <img
              src="/images/header_logo.png"
              alt="Drivex Energy Logo"
              className="h-12 w-auto object-contain"
            />

            <div className="leading-tight">
              <div className="text-lg font-bold text-gray-800 whitespace-nowrap">
                DRIVEX ENERGY
              </div>
              <div className="text-xs text-gray-500 whitespace-nowrap">
                Solar Powered Solutions
              </div>
            </div>
          </a>

          {/* Navigation Links */}
          <ul className="flex gap-4 lg:gap-6 xl:gap-9 list-none overflow-x-auto flex-shrink min-w-0">
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
          <div className="flex items-center gap-3 flex-shrink-0">
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

      </nav>

      {/* MOBILE MENU OVERLAY - Full Screen */}
      <div
        className={`
          md:hidden fixed inset-0 z-[60] transition-all duration-300 ease-in-out bg-white
          ${openMenu ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
        `}
      >
        {/* Close Button - Top Right */}
        <button
          onClick={() => setOpenMenu(false)}
          className="absolute top-4 right-4 p-2 z-[70]"
          aria-label="Close menu"
        >
          <X size={28} className="text-gray-800" />
        </button>

        {/* Centered Menu Content */}
        <div className="h-full w-full flex flex-col items-center justify-center px-8">
          {/* Menu Items */}
          <ul className="space-y-6 text-center">
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
                  ${openMenu ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}
                `}
                style={{ transitionDelay: openMenu ? `${i * 60}ms` : '0ms' }}
              >
                <a
                  href={
                    item === 'Products'
                      ? '/products/all'
                      : `#${item.toLowerCase().replace(' ', '-')}`
                  }
                  className="block text-gray-800 text-2xl font-medium hover:text-cyan-500 transition-all py-2"
                  onClick={() => setOpenMenu(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Footer */}
          <div className="absolute bottom-8 left-0 right-0 text-center">
            <div className="text-xs text-gray-500 mt-5">
              © 2026 Drivex Energy
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}