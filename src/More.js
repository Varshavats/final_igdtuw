import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dropdown2 = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <button
        className="inline-flex justify-center w-full font-medium relative hover:font-bold font-helvetica mx-1 underline"
        aria-haspopup="true"
        aria-expanded={isActive}
      >
        More
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="-ml-0.5 mr-2 mt-0.5 h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isActive && (
        <div className="absolute w-28 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 center">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <Link
              to="/faculty"
              className="block py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Faculty Directory
            </Link>
            <Link
              to="/pastrecruiters"
              className="block  py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Past Recruiters
            </Link>
            <Link
              to="/achieve"
              className="block  py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
             T&P Brochure 
            </Link>
            <Link
              to="/studentcoordinator"
              className="block  py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Student Coordinators
            </Link>
            {/* You can add more links as needed */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown2;
