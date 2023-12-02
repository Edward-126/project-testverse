import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`bg-background p-5 sm:px-10 transition-all duration-300 ${
        isOpen ? "h-auto" : "h-15"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-text">
          <a
            href="#"
            className=" font-kalam text-3xl
          "
          >
            TAILWIND NAVBAR
          </a>
        </div>

        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-text focus:outline-none"
          >
            <svg fill="currentColor" viewBox="0 0 20 20" className="h-6 w-6">
              <path
                fillRule="evenodd"
                d="M3 9a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <div className="hidden lg:flex lg:items-center lg:w-auto">
          <ul className="lg:flex space-x-4">
            <li>
              <a href="#" className="text-text mx-3">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-text mx-3">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-text mx-3">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-text mx-3">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden">
          <ul className="bg-background text-text">
            <li>
              <a href="#" className="block p-2">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block p-2">
                About
              </a>
            </li>
            <li>
              <a href="#" className="block p-2">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="block p-2">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
