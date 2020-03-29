import React from "react";
import {NavLink} from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper teal accent-4 px1">
        <NavLink to="/" className="brand-logo">
          ReactTS TODOLIST
        </NavLink>
        <ul className="right hide-on-med-and-down">
          <li>
            <NavLink to="/">Todo list</NavLink>
          </li>
          <li>
            <NavLink to="/about">Info</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
