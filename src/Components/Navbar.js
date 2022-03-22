import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Images/Logo.png";

const Navbar = () => {
  return (
    <div className="navbar_cont py-2">
      <Link to="/" className="nav_link">
        <img src={Logo} className="navbar_logo" alt="Logo" />
      </Link>
      <Link to="/" className="nav_link">
        Movies
      </Link>
      <Link to="shows" className="nav_link">
        Theatre
      </Link>
      <Link to="screen" className="nav_link">
        Screen
      </Link>
    </div>
  );
};

export default Navbar;
