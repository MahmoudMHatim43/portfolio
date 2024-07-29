import { NavLink } from "react-router-dom";
import "./navbar.css";
import React from "react";
function Navbar() {
  const [active, setActive] = React.useState("Home");
  const pages = ["Home", "About", "Projects", "Contact"];
  const activePage = (e) => {
    setActive(e.target.innerText);
  };
  return (
    <nav className="fixed w-full bg-gray-300 h-10 px-10 flex items-center justify-center z-10 top-0 shadow-2xl font-bold">
      <ul className="flex justify-between w-[80%]">
        {pages.map((page, index) => (
          <li
            className="opacity-70 hover:opacity-100"
            style={{
              color: active === page ? "red" : "black",
              opacity: active === page ? "1" : "0.75",
            }}
            key={index}
            onClick={activePage}
          >
            <NavLink
              to={`/${page.toLowerCase() === "home" ? "" : page.toLowerCase()}`}
            >
              {page}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
