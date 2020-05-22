import React, { Component } from "react"
import styled from "styled-components"

const Time = styled.p`
  padding: 0;
  margin: 0;
`

class Clock extends Component {
  state = {
    time: new Date(),
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      time: new Date(),
    })
  }

  render() {
    return (
      <div>
        <Time>{this.state.time.toLocaleTimeString()}</Time>
      </div>
    )
  }
}

export default Clock
