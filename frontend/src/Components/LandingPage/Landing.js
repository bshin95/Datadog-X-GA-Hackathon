import React from "react";
import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <div>
      Navigation bar above will not be visible when logged out
      <h1>Work Hard Play Hard</h1>
      <p>The place to get to know your co-workers better.</p>
      <div>
        <Link to="/Login">Login</Link>
        <Link to="/register">Update Password</Link>
      </div>
    </div>
  );
};

export default Landing;
