import { NavLink } from "react-router";
import { FaLaptop, FaBars } from "react-icons/fa6";
import { useState } from "react";

export default function Navbar() {
  const base = "transition hover:text-blue-300";
  const active = "text-blue-300 font-bold";

  const [opened, setOpened] = useState(false);

  return (
    <nav className="bg-gray-800">
      <div className="lg:max-w-6xl lg:mx-auto flex justify-between p-4">
        <div className="bg-grey-800 flex gap-2 items-center text-blue-300 font-semibold text-xl">
          <FaLaptop /> The friendly Developer
        </div>
        <div className="hidden md:flex items-center gap-4 text-gray-400">
          <NavLink
            className={({ isActive }) => (isActive ? active : base)}
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? active : base)}
            to={"/about"}
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? active : base)}
            to={"/blog"}
          >
            Blog
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? active : base)}
            to={"/contact"}
          >
            Contact
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? active : base)}
            to={"/projects"}
          >
            Projects
          </NavLink>
        </div>
        <div className="md:hidden cursor-pointer flex items-center text-2xl">
          <FaBars onClick={() => setOpened(!opened)}></FaBars>
        </div>
      </div>
      {opened && (
        <div className="md:hidden flex justify-between items-center bg-gray-800 px-5 py-3">
          <NavLink
            onClick={() => setOpened(false)}
            className={({ isActive }) => (isActive ? active : base)}
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setOpened(false)}
            className={({ isActive }) => (isActive ? active : base)}
            to={"/about"}
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setOpened(false)}
            className={({ isActive }) => (isActive ? active : base)}
            to={"/blog"}
          >
            Blog
          </NavLink>
          <NavLink
            onClick={() => setOpened(false)}
            className={({ isActive }) => (isActive ? active : base)}
            to={"/contact"}
          >
            Contact
          </NavLink>
          <NavLink
            onClick={() => setOpened(false)}
            className={({ isActive }) => (isActive ? active : base)}
            to={"/projects"}
          >
            Projects
          </NavLink>
        </div>
      )}
    </nav>
  );
}
