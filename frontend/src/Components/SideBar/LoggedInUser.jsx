import React, { Component } from "react"
import styled from "styled-components"
import Clock from "../SideBar/Clock"

const CurrentUserContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 0;
`
const Name = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0;
  margin: 0;
`

const Details = styled.p`
  padding: 0;
  margin: 0;
`

const Img = styled.img`
  width: 20%;
  border-radius: 50%;
`

const Info = styled.div`
  padding-left: 1rem;
`

class LoggedInUser extends Component {
  render() {
    return (
      <CurrentUserContainer>
        <Img
          src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
          alt="avatar"
        />
        <Info>
          <Name>Sophie</Name>
          <Details>NYC</Details>
          <Details>Cloudy - 71°F</Details>
          <Clock />
        </Info>
      </CurrentUserContainer>
    )
  }
}

export default LoggedInUser
