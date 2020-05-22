import React from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import "./Header.css";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <div className="nav">
      <img src="logo_vertical_white.png" alt="Datadog logo" className="logo"></img>

      <nav className="row">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/users">Search</NavLink>
        <NavLink to="/updateprofile">Profile</NavLink>
      </nav>
      <div>
        <NavLink onClick={logout} to="/">
          <span className="hide-sm">Logout</span>
        </NavLink>
      </div>
    </div>
  );

  const guestLinks = (
    <div className="nav">
      <Link to="/">
        <img
          src="logo_vertical_white.png"
          alt="Datadog logo"
          className="logo"
        ></img>
      </Link>
    </div>
  );

  return (
    <nav>
      {!loading && <>{isAuthenticated ? authLinks : guestLinks}</>}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
