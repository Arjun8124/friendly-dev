import { NavLink } from "react-router";
export default function Hero() {
  return (
    <div className="bg-gray-800 rounded-lg ">
      <div className="flex gap-3 justify-center items-center flex-col min-h-70 max-w-6xl px-4">
        <h1 className="text-3xl font-bold">Hello i am Arjun! 👋</h1>
        <p className="text-xl text-center">
          I build Friendly Websites using HTML,CSS,Javascript and React!
        </p>
        <div className="flex gap-5">
          <NavLink to={"/projects"}>
            <button className="cursor-pointer bg-blue-500 text-white px-4 py-3 rounded-lg font-semibold">
              View My Projects!
            </button>
          </NavLink>
          <NavLink to={"/contact"}>
            <button className="cursor-pointer border border-blue-500 text-blue-500 px-4 py-3 rounded-lg font-semibold transition hover:bg-blue-500 hover:text-white">
              Contact Me!
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
