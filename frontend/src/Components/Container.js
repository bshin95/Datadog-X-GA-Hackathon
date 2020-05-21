import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import WeekContainer from "./Weather/WeekContainer";
import Header from "./NavBar/Header";
import Register from "./auth/Register";
import Login from "./auth/Login";
import { loginUser, verifyUser } from "../services/apihelper";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      authFormData: {
        username: "",
        password: "",
      },
    };
  }

  async componentDidMount() {
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({ currentUser });
    }
  }

  handleLoginButton = () => {
    this.props.history.push("/explorer");
  };

  handleLogin = async () => {
    const currentUser = await loginUser({
      username: this.state.authFormData.username,
      password: this.state.authFormData.password,
    });
    this.setState({ currentUser });
    this.props.history.push("/explorer");
  };

  handleLogout = () => {
    localStorage.removeItem("authToken");
    this.setState({
      currentUser: null,
    });
    this.props.history.push("/");
  };

  authHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value,
      },
    }));
  };

  render() {
    return (
      <>
        <Header />
        <section className="container">
          <Switch>
            <Route
              exact
              path="/register"
              render={() => (
                <Register
                  handleRegister={this.handleRegister}
                  handleChange={this.authHandleChange}
                  formData={this.state.authFormData}
                />
              )}
            />
            <Route
              exact
              path="/login"
              render={() => (
                <Login
                  handleLogin={this.handleLogin}
                  handleChange={this.authHandleChange}
                  formData={this.state.authFormData}
                />
              )}
            />
            <WeekContainer />
          </Switch>
        </section>
      </>
    );
  }
}

export default withRouter(Container);
