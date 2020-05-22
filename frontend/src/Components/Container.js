import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import Header from "./NavBar/Header";
//import WeekContainer from "./Weather/WeekContainer";
//import Navbar from "./NavBar/Navbar";
import Home from "./Home/Home";
import Register from "./auth/Register";
import Login from "./auth/Login";
import ChatContainer from "./Chat/ChatContainer";
import { StoriesContainer } from "./News/StoriesContainer";

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
    this.setState({});
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
            path='/'
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
<<<<<<< HEAD
            path='/updatepassword'
=======
            path="/register"
>>>>>>> 8ef975e587b00c03e46404180ba8dc635bea5da2
            render={() => (
              <Register
                handleRegister={this.handleRegister}
                handleChange={this.authHandleChange}
                formData={this.state.authFormData}
              />
            )}
          />
          <Route exact path='/home' render={() => <Home />} />

          <Route exact path='/announcements' render={() => <ChatContainer />} />

          <Route exact path='/news' render={() => <StoriesContainer />} />
        </Switch>
      </>
    );
  }
}

export default withRouter(Container);
