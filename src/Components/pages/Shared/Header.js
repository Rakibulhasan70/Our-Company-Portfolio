import React from "react";
// import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";

const Header = () => {
  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";

  return (
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Home
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          daisyUI{" "}
        </NavLink>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contactUs"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Contact us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutUs"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              About us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Services
            </NavLink>
          </li>
        </ul>
      </div>
      <div class="navbar-end">
        <NavLink
          className="btn"
          to="/login"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
