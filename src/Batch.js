import React, { useState } from 'react';

const Dropdown = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <button
        className="inline-flex justify-center w-full font-medium relative hover:font-bold font-helvetica underline"
        aria-haspopup="true"
        aria-expanded={isActive}
      >
        Batch
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="-ml-0.5 mr-2 mt-0.5 h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isActive && (
        <div className="absolute w-28 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a
              href="/2019-2024"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              2019-2024
            </a>
            <a
              href="/2020-2025"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              2020-2025
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
