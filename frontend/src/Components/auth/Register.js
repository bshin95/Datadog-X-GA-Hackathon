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

    /////below is just for demo purposes GUI data
    interest_one: "",
    interest_one_image: "",

    interest_two: "",
    interest_two_image: "",

    interest_three: "",
    interest_three_image: "",

    interest_four: "",
    interest_four_image: "",

    interest_five: "",
    interest_five_image: "",

    facebook_url: "",
    instagram_url: "",
    twitter_url: "",
    linkedin_url: "",
    youtube_url: "",
    pinterest_url: "",
  });

  const { 
    name,
    email,
    phone,
    department,
    hierarchy,
    location,
    password,
    password2,

    interest_one,
    interest_one_image,

    interest_two,
    interest_two_image,

    interest_three,
    interest_three_image,

    interest_four,
    interest_four_image,

    interest_five,
    interest_five_image,

    facebook_url,
    instagram_url,
    twitter_url,
    linkedin_url,
    youtube_url,
    pinterest_url,
   } = formData;
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
        interest_one,
        interest_one_image,

        interest_two,
        interest_two_image,

        interest_three,
        interest_three_image,

        interest_four,
        interest_four_image,

        interest_five,
        interest_five_image,

        facebook_url,
        instagram_url,
        twitter_url,
        linkedin_url,
        youtube_url,
        pinterest_url,

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

        <div>
          <input
            type="text"
            placeholder="Enter Fun Fact 1"
            name="interest_one"
            value={interest_one}
            onChange={(e) => onChange(e)}
          />

          <input
            type="text"
            placeholder="Enter Fun Fact images 1"
            name="interest_one_image"
            value={interest_one_image}
            onChange={(e) => onChange(e)}
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Enter Fun Fact 2"
            name="interest_two"
            value={interest_two}
            onChange={(e) => onChange(e)}
          />

          <input
            type="text"
            placeholder="Enter Fun Fact Image 2"
            name="interest_two_image"
            value={interest_two_image}
            onChange={(e) => onChange(e)}
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Enter Fun Fact 3"
            name="interest_three"
            value={interest_three}
            onChange={(e) => onChange(e)}
          />

          <input
            type="text"
            placeholder="Enter Fun Fact 3"
            name="interest_three_image"
            value={interest_three_image}
            onChange={(e) => onChange(e)}
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Enter Fun Fact 4"
            name="interest_four"
            value={interest_four}
            onChange={(e) => onChange(e)}
          />

          <input
            type="text"
            placeholder="Enter Fun Fact Image 4"
            name="interest_four_image"
            value={interest_four_image}
            onChange={(e) => onChange(e)}
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Enter Fun Fact 5"
            name="interest_five"
            value={interest_five}
            onChange={(e) => onChange(e)}
          />

          <input
            type="text"
            placeholder="Enter Fun Fact Image 5"
            name="interest_five_image"
            value={interest_five_image}
            onChange={(e) => onChange(e)}
          />
        </div>
        <h2>Connect With Me!</h2>
        <h3>Interests, accomplishments, pets, classifieds etc.</h3>
        <div>
          <input
            type="text"
            placeholder="Enter Facebook URL"
            name="facebook_url"
            value={facebook_url}
            onChange={(e) => onChange(e)}
          />

          <input
            type="text"
            placeholder="Enter Instagram URL"
            name="instagram_url"
            value={instagram_url}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Twitter URL"
            name="twitter_url"
            value={twitter_url}
            onChange={(e) => onChange(e)}
          />

          <input
            type="text"
            placeholder="Enter LinkedIn URL"
            name="linkedin_url"
            value={linkedin_url}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter YouTube URL"
            name="youtube_url"
            value={youtube_url}
            onChange={(e) => onChange(e)}
          />

          <input
            type="text"
            placeholder="Enter Pinterest URL"
            name="pinterest_url"
            value={pinterest_url}
            onChange={(e) => onChange(e)}
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
