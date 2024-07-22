import "./navbar.css";
import React from "react";
function Navbar() {
  const [active, setActive] = React.useState("Home");
  const pages = ["Home", "About", "Projects", "Contact"];
  const activePage = (e) => {
    setActive(e.target.innerText);
  };
  return (
    <nav className="nav-container">
      <ul className="nav-unordered-list">
        {pages.map((page, index) => (
          <li
            className="nav-item"
            style={{ color: active === page ? "orange" : null }}
            key={index}
            onClick={activePage}>
            {page}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
