import React, { useState, useContext } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="navbar border-b-2 px-2 md:px-6 lg:px-12  bg-black">
      <div className="navbar-start">
        <a
          href="/"
          className="hover:bg-cyan-800 p-2 text-white rounded-2xl font-bold  text-2xl md:text-4xl xl:text-5xl select-none whitespace-nowrap"
        >
          <h1>MIKKEL KALDAL Photo</h1>
        </a>
      </div>
      <div className="navbar-end">
        <ul className="bg-rose-600 text-white rounded-xl text-3xl hidden md:flex menu menu-horizontal">
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="hover:bg-cyan-100  hover:rounded-2xl md:hidden"
            onClick={toggleDropdown}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-14 w-18 px-4 py-4"
              fill="none"
              viewBox="0 0 28 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className={`shadow-inner-2xl menu menu-sm dropdown-content mt-1 z-[1]  shadow-xl bg-base-100 pr-10 right-1 ${
              dropdownOpen ? "" : "hidden" //
            }`}
          >
            <li>
              <a href="/contact" className="p-4 text-3xl">
                Contact
              </a>
            </li>
            <li>
              <a href="/" className="p-4 text-3xl">
                Home
              </a>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
