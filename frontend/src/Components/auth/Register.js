import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log("Passwords do not match");
    } else {
      console.log("success");
    }
  };

  return (
    <>
      THIS PAGE IS NOT FINISHED AND MAY NEED TO BE DELETED
      <h1>Register (This is to be updated as it should come from HR)</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <div>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
          {/* <small>
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small> */}
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            minLength="6"
            value={password2}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <input type="submit" value="Register" />
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </>
  );
};

export default Register;
