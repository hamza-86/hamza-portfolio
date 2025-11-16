import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll"; // Import Link from react-scroll
import { Link } from "react-router-dom";
import menuIcon from "../assets/menu.svg";
import closeIcon from "../assets/close.svg";

// Navigation links
const navLinks = [
  { id: "about", title: "About" },
  { id: "project", title: "Project" },
  { id: "contact", title: "Contact" },
  {id: "home", title: "Home"}

];


const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="fixed top-0 z-20 w-full bg-primary py-5 shadow-lg">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive(""); 
            window.scrollTo(0, 0);
          }}
        >
          <p className="cursor-pointer text-[18px] font-bold text-white">
            Mohd Hamza
          </p>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden sm:flex gap-10">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <ScrollLink
                to={nav.id}
                smooth={true}
                duration={500}
                offset={-50} // Adjust for fixed navbar
                className={`cursor-pointer text-[18px] font-medium transition duration-300 ${
                  active === nav.id ? "text-white" : "text-secondary hover:text-white"
                }`}
                onClick={() => setActive(nav.id)}
              >
                {nav.title}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="sm:hidden">
          <img
            src={toggle ? closeIcon : menuIcon}
            alt="menu"
            className="h-7 w-7 cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          {/* Mobile Dropdown Menu */}
          <div
            className={`absolute right-4 top-16 z-10 w-40 rounded-lg bg-richblack-800 p-4 transition-all duration-300 ${
              toggle ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((nav) => (
                <li key={nav.id}>
                  <ScrollLink
                    to={nav.id}
                    smooth={true}
                    duration={500}
                    offset={-50}
                    className="cursor-pointer text-[16px] font-medium text-white hover:text-gray-400"
                    onClick={() => {
                      setActive(nav.id);
                      setToggle(false); // Close menu after selection
                    }}
                  >
                    {nav.title}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
