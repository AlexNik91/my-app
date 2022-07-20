import React from "react";
import classes from "./NavBar.module.css";
import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className={classes.nav}>
      <div className="item1">
        <NavLink to="/profile" className="item1">
          Profile
        </NavLink>
      </div>

      <div className="item1">
        <NavLink to="/dialogs" className="item1">
          mesaages
        </NavLink>
      </div>

      <div className="item1">
        <NavLink to="/news" className="item1">
          news
        </NavLink>
      </div>

      <div className={classes.item1}>
        <NavLink to="/music" className="item1">
          music
        </NavLink>
      </div>

      <div className={classes.item1}>
        <NavLink to="/settings" className="item1">
          settings
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
