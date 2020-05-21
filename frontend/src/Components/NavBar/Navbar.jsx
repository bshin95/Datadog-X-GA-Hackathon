import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = (props) => {
  return (
    <div className="nav">
      <img src="logo_vertical_white.png" alt="Datadog logo" class="logo"></img>
      {props.currentUser ? (
        <nav className="row">
          <NavLink to="/Home">Home</NavLink>
          <NavLink to="/Search">Search</NavLink>
          <NavLink to="/Profile">Profile</NavLink>
        </nav>
      ) : null}

      {props.currentUser ? (
        <div>
          <button className="signOut" onClick={props.handleLogout}>
            Sign Out
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
