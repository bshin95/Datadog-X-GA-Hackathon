import React from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import "./Header.css";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <div className="nav">
      <img src="logo_vertical_white.png" alt="Datadog logo" class="logo"></img>

      <nav className="row">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/search">Search</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </nav>
      <div>
        <Link onClick={logout} to="#!">
          <i className="fas fa-sign-out-alt" />{" "}
          <span className="hide-sm">Logout</span>
        </Link>
      </div>
    </div>
  );

  const guestLinks = (
    <div className="nav">
      <Link to="/">
        <img
          src="logo_vertical_white.png"
          alt="Datadog logo"
          class="logo"
        ></img>
      </Link>
    </div>
  );

  return (
    <nav>
      {/* <h1>PawPrint</h1> */}
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
