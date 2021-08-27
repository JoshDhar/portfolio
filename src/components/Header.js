import React, { useState } from "react";
import { MenuIcon } from "@heroicons/react/solid";
import { FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 z-50 bg-dark">
      <nav className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="w-full justify-between flex items-center">
            <a className="flex-shrink-0" href="/">
              <img className="h-10 w-10" src="/logo.svg" alt="logo" />
            </a>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a className="px-3 font-medium hover:text-alt" href="#home">
                  Home
                </a>
                <a className="px-3 font-medium hover:text-alt" href="#about">
                  About
                </a>
                <a className="px-3 font-medium hover:text-alt" href="#skills">
                  Portfolio
                </a>
                <a className="px-3 font-medium hover:text-alt" href="#contact">
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="items-center justify-center focus:outline-none"
            >
              {isOpen ? (
                <FaTimes className="text-white h-6 w-6" />
              ) : (
                <MenuIcon className="text-white h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Menu */}
      <div className={`md:hidden z-10 ${isOpen ? null : "hidden"}`}>
        <div className="flex flex-col items-center divide-y px-2 py-2 sm:px-3">
          <a
            className="py-4 text-base font-medium"
            href="#home"
            onClick={() => setIsOpen(!isOpen)}
          >
            Home
          </a>
          <a
            className="py-4 text-base font-medium"
            href="#about"
            onClick={() => setIsOpen(!isOpen)}
          >
            About
          </a>
          <a
            className="py-4 text-base font-medium"
            href="#skills"
            onClick={() => setIsOpen(!isOpen)}
          >
            Portfolio
          </a>
          <a
            className="py-4 text-base font-medium"
            href="#contact"
            onClick={() => setIsOpen(!isOpen)}
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
