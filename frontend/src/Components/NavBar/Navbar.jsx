import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <Router>
      <ul>
        <div className='row'>
          <img src='' alt='Datadog logo' class='logo'></img>
        </div>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/'>Search</Link>
        </li>
        <li>
          <Link to='/'>Profile</Link>
        </li>
      </ul>
    </Router>
  );
};

export default Navbar;
