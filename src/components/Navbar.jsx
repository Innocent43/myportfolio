import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [active, setActive] = useState(false);
  const toggle = () => {
    setActive(!active);
  };
  return (
    <div className="navheader">
      <span className="hamburger" onClick={toggle}>
        <RxHamburgerMenu />
      </span>
      <nav className={active ? "navbar open" : "navbar"}>
        <p className="hamburger" onClick={toggle}>
          x
        </p>
        <NavLink to="/" onClick={toggle}>
          Home
        </NavLink>
        <NavLink to="/about" onClick={toggle}>
          About
        </NavLink>
        <NavLink to="/projects" onClick={toggle}>
          Projects
        </NavLink>
        <NavLink to="/contact" onClick={toggle}>
          Contact
        </NavLink>
        <NavLink to="/tasks" onClick={toggle}>
          Tasks
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
