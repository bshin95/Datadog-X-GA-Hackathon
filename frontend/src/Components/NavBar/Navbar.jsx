import React from "react";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <div className="row">
          <img src="" alt="Datadog logo" class="logo"></img>
        </div>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Search</a>
        </li>
        <li>
          <a href="#">Profile</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
