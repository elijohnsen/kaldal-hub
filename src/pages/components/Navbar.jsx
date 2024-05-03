import React, { useState, useContext } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="navbar xl:px-8 2xl:px-10 bg-cyan-300">
      <div className="navbar-start">
        <a
          href="/"
          className=" shadow-sm btn btn-info text-3xl md:text-4xl select-none whitespace-nowrap"
        >
          <h1>MIKKEL KALDAL Photo</h1>
        </a>
      </div>
      <div className="navbar-end">
        <ul className="text-3xl hidden lg:flex menu menu-horizontal">
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="hover:bg-cyan-100  hover:rounded-2xl lg:hidden"
            onClick={toggleDropdown}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-22 w-24 px-4 py-4"
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
            className={`menu menu-sm dropdown-content mt-1 z-[1] p-1 shadow bg-base-100 rounded-box w-64 h-54 right-0 ${
              dropdownOpen ? "" : "hidden" //
            }`}
          >
            <li>
              <a href="/contact" className="text-3xl">
                Contact
              </a>
            </li>
            <li>
              <a className="text-3xl">Portfolio</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
