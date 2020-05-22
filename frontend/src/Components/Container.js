import React, { Component } from "react"
import { Route, Switch } from "react-router-dom"
import { withRouter } from "react-router"
import Header from "./NavBar/Header"
//import WeekContainer from "./Weather/WeekContainer";
import Register from "./auth/Register"
import Login from "./auth/Login"
import UsersContainer from "./UserContainer/UsersContainer"
import UserDetails from "./UserContainer/UserDetails"
import Home from "./Home/Home"
import ChatContainer from "./Chat/ChatContainer"
import UpdateProfile from "./auth/UpdateProfile"
import { StoriesContainer } from "./News/StoriesContainer"
//get the code working
class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null,
    }
  }

  async componentDidMount() {
    this.setState({})
  }

  render() {
    return (
      <>
        <Header />
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
          <Route exact path="/users" component={UsersContainer} />
          <Route exact path="/users/:userId" component={UserDetails} />
          <Route exact path="/home" render={() => <Home />} />
          <Route exact path="/updateprofile" render={() => <UpdateProfile />} />

          <Route exact path="/announcements" render={() => <ChatContainer />} />

          <Route exact path="/news" render={() => <StoriesContainer />} />
        </Switch>
      </>
    )
  }
}

export default withRouter(Container)
