import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import WeekContainer from './Weather/WeekContainer'

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
        <WeekContainer />
      </div>
    );
  }
}

export default Container