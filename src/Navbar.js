import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="about">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="contact">
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/formdata">
              Registration Form
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/loginForm">
              Login Form
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
