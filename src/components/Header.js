import React from "react";

const Header = () => {
  return (
    <header className="bg-darkAcc">
      <nav className="container mx-auto flex items-center px-4 sm:px-8">
        <img src="./logo.svg" alt="logo" />
        <ul className="hidden flex-1 sm:flex justify-end items-center gap-16 font-display">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Work</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
        {/* hamburger menu */}
        <div className="flex sm:hidden flex-1 justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </nav>
    </header>
  );
};

export default Header;
