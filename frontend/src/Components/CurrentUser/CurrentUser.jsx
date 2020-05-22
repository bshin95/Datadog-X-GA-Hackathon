import React, { Component } from "react"
import WeekContainer from "../Weather/WeekContainer"
import DayCard from "../Weather/DayCard"

class CurrentUser extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div>
        <WeekContainer />
      </div>
    )
  }
}

export default CurrentUser
