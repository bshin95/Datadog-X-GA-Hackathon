import React, { Component } from "react"
import { Route, Switch } from "react-router-dom"
import { withRouter } from "react-router"
import Header from "./NavBar/Header"
//import WeekContainer from "./Weather/WeekContainer";
//import Navbar from "./NavBar/Navbar";
<<<<<<< HEAD
//import Cards from "./Cards/Cards";
import Register from "./auth/Register"
import Login from "./auth/Login"
import MainPage from "./MainPage/MainPage"
import UsersContainer from "../components/UserContainer/UsersContainer"
import UserDetails from "../components/UserContainer/UserDetails"
=======
import Home from "./Home/Home";
import Register from "./auth/Register";
import Login from "./auth/Login";
import ChatContainer from "./Chat/ChatContainer";
>>>>>>> 8ef975e587b00c03e46404180ba8dc635bea5da2

class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null,
      // authFormData: {
      //   username: "",
      //   password: "",
    }
  }

  async componentDidMount() {
<<<<<<< HEAD
    this.setState({})
=======
    this.setState({});
>>>>>>> 8ef975e587b00c03e46404180ba8dc635bea5da2
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
            path="/register"
            render={() => (
              <Register
                handleRegister={this.handleRegister}
                handleChange={this.authHandleChange}
                formData={this.state.authFormData}
              />
            )}
          />
<<<<<<< HEAD
          <Route exact path="/home" render={() => <MainPage />} />
          <Route exact path="/users" component={UsersContainer} />
          <Route exact path="/users/:userId" component={UserDetails} />
=======
          <Route exact path="/home" render={() => <Home />} />

          <Route exact path="/announcements" render={() => <ChatContainer />} />
>>>>>>> 8ef975e587b00c03e46404180ba8dc635bea5da2
        </Switch>
      </>
    )
  }
}

<<<<<<< HEAD
export default withRouter(Container)
=======
export default withRouter(Container);
>>>>>>> 8ef975e587b00c03e46404180ba8dc635bea5da2
