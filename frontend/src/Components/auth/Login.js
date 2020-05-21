import React from "react";
import { Link } from "react-router-dom";

const Login = (props) => {
  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  // });

  // const { email, password } = formData;
  // const onChange = (e) =>
  //   setFormData({ ...formData, [e.target.name]: e.target.value });

  //   const onSubmit = async (e) => {
  //     e.preventDefault();

  //       const getUser = {
  //         email,
  //         password
  //       };
  
  //       try {
  //         const config = {
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         };
  
  //         const body = JSON.stringify(getUser);
  
  //         const res = await axios.post("/api/users", body, config);
  //         console.log(res.data);
  //       } catch (err) {
  //         console.error(err.response.data);
  //       }
  //     }
    
          

  
  return (
    <div className="loginPage">
      <h1 className="screenHeader">Login</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.handleLogin();
        }}
      >
        <input
          name="email"
          placeholder="Enter Email"
          type="text"
          value={props.formData.email}
          onChange={props.handleChange}
        />
        <br />
        <input
          name="password"
          placeholder="Enter Password"
          type="password"
          value={props.formData.password}
          onChange={props.handleChange}
        />
        <br />
        <Link to="/Register" className="goToRegisterPage">
          {" "}
          Forgot Password?
        </Link>
        <br />
        <button className="loginButton">Login</button>
        <br />
      </form>
      <p>Don't have an account? CONTACT HUMAN RESOURCES</p>
      <p className="question">?</p>
    </div>
  );
};

export default Login;
