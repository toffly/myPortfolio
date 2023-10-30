import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="logo" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-white hover:text-cyan-500 transition border-b-2 border-slate-900 hover:border-green-600 `}
          >
            <a href={`#${nav.id}`}> {nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 absolute top-20 right-0 my-2 w-full mx-4 rounded-xl bg-slate-900 z-10`}
        >
            <ul className="list-none flex flex-col justify-end items-center flex-1">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] ${
                    index === navLinks.length - 1 ? "mr-0" : "mb-4"
                  } flex justify-center items-center w-full text-white my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded transition`}
                >
                  <a href={`#${nav.id}`}> {nav.title}</a>
                </li>
              ))}
            </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
