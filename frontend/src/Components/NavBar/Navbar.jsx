import React from "react"
import { NavLink, Link } from "react-router-dom"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { logout } from "../../actions/auth"
import "./Header.css"
import styled from "styled-components"

const NavRow = styled.nav`
  display: flex;
  justify-content: space-around;
`
const StyledLink = styled(NavLink)`
  padding: 0 0.75rem;
  font-size: 2rem;
`

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <div className="nav">
      <img
        src="logo_vertical_white.png"
        alt="Datadog logo"
        className="logo"
      ></img>

      <NavRow>
        <StyledLink to="/home">Home</StyledLink>
        <StyledLink to="/users">Search</StyledLink>
        <StyledLink to="/updateprofile">Profile</StyledLink>
        <StyledLink onClick={logout} to="/">
          <span className="hide-sm">Logout</span>
        </StyledLink>
      </NavRow>
    </div>
  )

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
  )

  return (
    <nav>{!loading && <>{isAuthenticated ? authLinks : guestLinks}</>}</nav>
  )
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default connect(mapStateToProps, { logout })(Navbar)
