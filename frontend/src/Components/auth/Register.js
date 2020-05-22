import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Login.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    hierarchy: "",
    location:"",
    password: "",
    password2: "",
  });

  const { name, email, phone, department, hierarchy, location, password, password2 } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log("Passwords do not match");
    } else {
      const newUser = {
        name,
        email,
        phone,
        department,
        hierarchy,
        location,
        password,
      };

      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        const body = JSON.stringify(newUser);

        const res = await axios.post("/api/users", body, config);
        console.log(res.data);
      } catch (err) {
        console.error(err.response.data);
      }
    }
  };

  return (
    <div className="loginPage">
      <h1 className="screenHeader">Register</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <div>
          <input
            type="text"
            placeholder="Enter Full Name"
            name="name"
            value={name}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Enter Email"
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
            type="text"
            placeholder="Enter Phone Number"
            name="phone"
            value={phone}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div>
        <input
            type="text"
            placeholder="Enter Department"
            name="department"
            value={department}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div>
        <input
            type="text"
            placeholder="Enter Hierarchy"
            name="hierarchy"
            value={hierarchy}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div>
        <input
            type="text"
            placeholder="Enter Office Location"
            name="location"
            value={location}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Create Password"
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
        <Link to="/" className="goToRegisterPage">
          Already have an account? Login
        </Link>
        <br />
        <input className="loginButton" type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
