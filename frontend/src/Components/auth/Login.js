import React, { useState } from "./node_modules/react";
import { Link, Redirect } from "./node_modules/react-router-dom";
import { connect } from "./node_modules/react-redux";
import PropTypes from "./node_modules/prop-types";
import { login } from "../../actions/auth";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/home" />;
  }

  return (
    <div className="loginPage">
      <h1 className="screenHeader">Login</h1>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          value={email}
          onChange={onChange}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={onChange}
          minLength="6"
        />
        <br />
        <Link to="/updatepassword" className="goToRegisterPage">
          Forgot Password?
        </Link>
        <br />
        <input type="submit" className="loginButton" value="Login" />
      </form>
      <p>Don't have an account? CONTACT HUMAN RESOURCES</p>
      <p className="question">?</p>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
