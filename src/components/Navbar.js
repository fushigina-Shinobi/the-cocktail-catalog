import React from "react";
import { Link } from "react-router-dom";
import cocktail from "../../src/cocktail.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="img-logo">
          <img src={cocktail} alt="cocktail" />
        </div>
        <Link to="/" className="logo">
          <div className="appName">
            <span>T</span>he
          </div>
          <div className="appName">
            <span>C</span>ocktail
          </div>
          <div className="appName">
            <span>C</span>atalog
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
