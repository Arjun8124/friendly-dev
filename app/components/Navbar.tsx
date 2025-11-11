import { NavLink } from "react-router";
import { FaLaptop } from "react-icons/fa6";

export default function Navbar() {
  const base = "transition hover:text-blue-300";
  const active = "text-blue-300 font-bold";

  return (
    <nav>
      <div className="flex justify-between bg-gray-800 p-4">
        <div className="bg-grey-800 flex gap-2 items-center text-blue-300 font-semibold">
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
      </div>
    </nav>
  );
}
