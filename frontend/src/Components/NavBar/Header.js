import React from "react";
import Navbar from "./Navbar";

const Header = (props) => (
  <header>
    <Navbar currentUser={props.currentUser} handleLogout={props.handleLogout} />
    <div className="main">{props.children}</div>
  </header>
);

export default Header;
