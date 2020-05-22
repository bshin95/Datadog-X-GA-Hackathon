import React, { useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import "./Login.css";

const UpdateProfile = () => {
  const [formData, setFormData] = useState({
    // name: "",
    email: "",
    // phone: "",
    // department: "",
    // hierarchy: "",
    // location:"",
    password: "",
    password2: "",

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
    // name,
    email,
    // phone,
    // department,
    // hierarchy,
    // location,
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
      const updateUser = {
        //was newUser change to update to make a put update
        email,
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

        const body = JSON.stringify(updateUser);

        const res = await axios.put("/api/users", body, config);
        console.log(res.data);
      } catch (err) {
        console.error(err.response.data);
      }
    }
  };

  return (
    <div className="updatePage">
      <div className="myhrdataheader">
        <p className="myhrdata">Sophie Johnson</p>
        <p className="myhrdata">SophieJohnson2020@gmail.com</p>
        <p className="myhrdata">123-456-7890</p>
        <p className="myhrdata">IT</p>
        <p className="myhrdata">Associate</p>
        <p className="myhrdata">NYC</p>
      </div>
      {/* <h1 className="screenHeader">Update My Profile</h1> */}
      {/* input below is just for demo */}
      <div className="subscritioninputs">
        <input
          className="passwordupdatepage inputboxsubs"
          placeholder="Enter Password"
        />
        <br />
        <input
          className="inputboxsubs"
          placeholder="Language(s)"
        />
      </div>
      <div className="subscriptions">
        <h1 className="subscriptionheader">Subscriptions</h1>
        <ul>
          <li>DATA DOG</li>
          <li>NEWS</li>
          <li>NEW HIRES</li>
          <li>HUMAN RESOURCES</li>
          <li>DEVELOPMENT</li>
          <li>EVENT CALENDAR</li>
        </ul>
      </div>

      <h1 className="subscriptionheader">About Me! (voluntary) </h1>

      <form onSubmit={(e) => onSubmit(e)}>
        <div>
          {/* <input
            type="email"
            placeholder="Enter Email"
            name="email"
            value={email}
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
          />*/}
        </div>

        <div className="subscritioninputs">
          <div>
            <input
              className="inputboxsubs"
              type="text"
              placeholder="Enter Fun Fact 1"
              name="interest_one"
              value={interest_one}
              onChange={(e) => onChange(e)}
              required
            />
            <p className="uploadpic">
              Drag and drop or paste image here to upload You can also browse
              from your computer
            </p>
            {/* <input
            type="text"
            placeholder="Enter Fun Fact images 1"
            name="interest_one_image"
            value={interest_one_image}
            onChange={(e) => onChange(e)}
            required
          /> */}
          </div>

          <div>
            <input
              className="inputboxsubs"
              type="text"
              placeholder="Enter Fun Fact 2"
              name="interest_two"
              value={interest_two}
              onChange={(e) => onChange(e)}
              required
            />
            <p className="uploadpic">
              Drag and drop or paste image here to upload You can also browse
              from your computer
            </p>
            {/* <input
            type="text"
            placeholder="Enter Fun Fact Image 2"
            name="interest_two_image"
            value={interest_two_image}
            onChange={(e) => onChange(e)}
            required
          /> */}
          </div>

          <div>
            <input
              className="inputboxsubs"
              type="text"
              placeholder="Enter Fun Fact 3"
              name="interest_three"
              value={interest_three}
              onChange={(e) => onChange(e)}
              required
            />
            <p className="uploadpic">
              Drag and drop or paste image here to upload You can also browse
              from your computer
            </p>

            {/* <input
            type="text"
            placeholder="Enter Fun Fact 3"
            name="interest_three_image"
            value={interest_three_image}
            onChange={(e) => onChange(e)}
            required
          /> */}
          </div>

          <div>
            <input
              className="inputboxsubs"
              type="text"
              placeholder="Enter Fun Fact 4"
              name="interest_four"
              value={interest_four}
              onChange={(e) => onChange(e)}
              required
            />
            <p className="uploadpic">
              Drag and drop or paste image here to upload You can also browse
              from your computer
            </p>
            {/* <input
            type="text"
            placeholder="Enter Fun Fact Image 4"
            name="interest_four_image"
            value={interest_four_image}
            onChange={(e) => onChange(e)}
            required
          /> */}
          </div>

          <div>
            <input
              className="inputboxsubs"
              type="text"
              placeholder="Enter Fun Fact 5"
              name="interest_five"
              value={interest_five}
              onChange={(e) => onChange(e)}
              required
            />
            <p className="uploadpic">
              Drag and drop or paste image here to upload You can also browse
              from your computer
            </p>
            {/* <input
            type="text"
            placeholder="Enter Fun Fact Image 5"
            name="interest_five_image"
            value={interest_five_image}
            onChange={(e) => onChange(e)}
            required
          /> */}
          </div>
          <h2 className="subscriptionheader">Connect With Me!</h2>
          <h3 className="subscriptionheaderdetails">
            Interests, accomplishments, pets, classifieds etc.
          </h3>

          <div className="socialmedia">
            <a
              href="https://www.instagram.com/transitiontotechlife/"
              target="_blank"
              rel="noopener noreferrer"
              className="fa fa-facebook"
            >
              {" "}
            </a>

            <a
              href="https://www.instagram.com/transitiontotechlife/"
              target="_blank"
              rel="noopener noreferrer"
              className="fa fa-instagram"
            >
              {" "}
            </a>

            <a
              href="https://www.instagram.com/transitiontotechlife/"
              target="_blank"
              rel="noopener noreferrer"
              className="fa fa-twitter"
            >
              {" "}
            </a>

            <a
              href="https://linkedin.com/in/reginaclarke/"
              target="_blank"
              rel="noopener noreferrer"
              className="fa fa-linkedin"
            >
              {" "}
            </a>

            <a
              href="https://www.instagram.com/transitiontotechlife/"
              target="_blank"
              rel="noopener noreferrer"
              className="fa fa-youtube"
            >
              {" "}
            </a>

            <a
              href="https://www.instagram.com/transitiontotechlife/"
              target="_blank"
              rel="noopener noreferrer"
              className="fa fa-pinterest"
            >
              {" "}
            </a>
            <a
              href="https://github.com/ReginaClarke"
              target="_blank"
              rel="noopener noreferrer"
              className="fa fa-github"
            >
              {" "}
            </a>
            <input className="updateButton" type="submit" value="Submit" />
          </div>
          {/* <div> 
            <input
              type="text"
              placeholder="Enter Facebook URL"
              name="facebook_url"
              value={facebook_url}
              onChange={(e) => onChange(e)}
              required
            />

            <input
              type="text"
              placeholder="Enter Instagram URL"
              name="instagram_url"
              value={instagram_url}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter Twitter URL"
              name="twitter_url"
              value={twitter_url}
              onChange={(e) => onChange(e)}
              required
            />

            <input
              type="text"
              placeholder="Enter LinkedIn URL"
              name="linkedin_url"
              value={linkedin_url}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter YouTube URL"
              name="youtube_url"
              value={youtube_url}
              onChange={(e) => onChange(e)}
              required
            />

            <input
              type="text"
              placeholder="Enter Pinterest URL"
              name="pinterest_url"
              value={pinterest_url}
              onChange={(e) => onChange(e)}
              required
            />
          </div> */}
        </div>
        {/* <Link to="/" className="goToRegisterPage">
          Already have an account? Login
        </Link>
        <br /> */}
        {/* <input className="loginButton" type="submit" value="Submit" /> */}
      </form>
    </div>
  );
};

export default UpdateProfile;
