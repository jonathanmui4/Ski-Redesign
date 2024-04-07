import React, { useState } from 'react';
// import { ChevronDownIcon } from '@heroicons/react/solid'; // Make sure heroicons are installed

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle dropdown open/close
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-blue-900 text-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <img src="/path-to-your-logo.png" alt="SkiResort Logo" className="h-8 w-auto" />
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">All Ski Resorts</a>
            <a href="#" className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">Test Reports</a>
            <a href="#" className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">Comparison</a>
            <a href="#" className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">Weather</a>
            <a href="#" className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">Ski Lifts</a>
            <a href="#" className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">Accommodations</a>
            <a href="#" className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">About Us</a>
          </div>
          <div className="flex items-center">
            <button onClick={toggleDropdown} className="bg-blue-700 hover:bg-blue-800 text-white px-3 py-2 rounded-md text-sm font-medium flex items-center">
              Austria
              {/* <ChevronDownIcon className="ml-1 w-4 h-4" /> */}
            </button>
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 z-50">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 1</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 2</a>
                {/* ... more options ... */}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;