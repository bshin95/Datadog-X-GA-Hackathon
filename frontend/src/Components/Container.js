import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import WeekContainer from "./Weather/WeekContainer";
import Navbar from "./NavBar/Navbar";
import Register from "./auth/Register";
import Login from "./auth/Login";
import Landing from './LandingPage/Landing'

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    this.setState({});
  }

  render() {
    return (
      <div>
        <div>Social Network</div>
        <Navbar />
        <section className="container">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/Login" component={Login} />
            <WeekContainer />
          </Switch>
        </section>
      </div>
    );
  }
}

export default withRouter(Container);
