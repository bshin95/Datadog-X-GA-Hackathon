import React, { Component } from "./node_modules/react";
import { Route, Switch } from "./node_modules/react-router-dom";
import { withRouter } from "./node_modules/react-router";
import Header from "./NavBar/Header";
//import WeekContainer from "./Weather/WeekContainer";
//import Navbar from "./NavBar/Navbar";
import Cards from "./Cards/Cards";
import Register from "./auth/Register";
import Login from "./auth/Login";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      // authFormData: {
      //   username: "",
      //   password: "",
    };
  }

  async componentDidMount() {
      this.setState({ });
    }
  

  render() {
    return (
      <>
        <Header
          // currentUser={this.state.currentUser}
          // handleLogout={this.handleLogout}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Login
                handleLogin={this.handleLogin}
                handleChange={this.authHandleChange}
                formData={this.state.authFormData}
              />
            )}
          />
          <Route
            exact
            path="/updatepassword"
            render={() => (
              <Register
                handleRegister={this.handleRegister}
                handleChange={this.authHandleChange}
                formData={this.state.authFormData}
              />
            )}
          />
          <Route exact path="/home" render={() => <Cards />} />
        </Switch>
      </>
    );
  }
}

export default withRouter(Container);