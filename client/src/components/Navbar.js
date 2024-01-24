import React from "react";
import logo from "../assets/Tujibonge LOGO.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-rose-700 flex justify-between px-16 py-6">
      <nav className="left-nav flex gap-12">
        <NavLink
          to="/"
          style={({ isActive }) => {
            return { color: isActive ? "red" : "white" };
          }}
        >
          <img className="min-w-48 w-48" src={logo} alt="logo" />
        </NavLink>
        <NavLink
          to="/community"
          style={({ isActive }) => {
            return { color: isActive ? "red" : "white" };
          }}
        >
          Community
        </NavLink>
        <NavLink
          to="/blogs"
          style={({ isActive }) => {
            return { color: isActive ? "red" : "white" };
          }}
        >
          Blogs
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => {
            return { color: isActive ? "red" : "white" };
          }}
        >
          About
        </NavLink>
      </nav>
      <nav className="nav-right">
        <NavLink
          to="/signup"
          style={({ isActive }) => {
            return { color: isActive ? "red" : "white" };
          }}
        >
          SignUp
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
