import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants/index";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="HooBank logo" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 ">
        {navLinks.map(({ id, title }, index, array) => (
          <li
            key={id}
            className={`font-poppins font-normal cursor-pointer text-[16px]  text-white ${
              array.length - 1 === index ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`#${id}`} className="">
              {title}
            </a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px]"
          onClick={handleToggle}
        />
      </div>
      <div
        className={`${
          toggle ? "flex" : "hidden"
        } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
      >
        <ul className="list-none flex flex-col justify-end items-center flex-1 ">
          {navLinks.map(({ id, title }, index, array) => (
            <li
              key={id}
              className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                array.length - 1 === index ? "mb-0" : "mb-4"
              }`}
            >
              <a href={`#${id}`}>{title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
