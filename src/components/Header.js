import React from "react";
import { NavLink } from "react-router-dom";
export default function Header() {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
  };
  return (
    <header>
      <NavLink to="/" className="header-logo">
        #VANcation
      </NavLink>
      <nav>
        <NavLink
          to="/host"
          className="header-nav"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="/about"
          className="header-nav about"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          About
        </NavLink>
        <NavLink
          to="/vans"
          className="header-nav vans"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Vans
        </NavLink>
      </nav>
    </header>
  );
}
