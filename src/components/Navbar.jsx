import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

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

        <a href="#home" onClick={toggle}>
          Home
        </a>
        <a href="#about" onClick={toggle}>
          About
        </a>

        <a href="#Projects" onClick={toggle}>
          Projects
        </a>

        <a href="#contact" onClick={toggle}>
          Contact
        </a>
        <a href="#task" onClick={toggle}>
          Tasks
        </a>
      </nav>
    </div>
  );
}

export default Navbar;
