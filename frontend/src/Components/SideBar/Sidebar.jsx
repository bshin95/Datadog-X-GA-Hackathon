import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { loadUser } from "../../actions/auth"
// import SearchInput from "../Search/Search"
// import Sidebar from "../SideBar/Sidebar"
import styled from "styled-components"
import Weather from "../Weather/WeekContainer"
import LoggedInUser from "./LoggedInUser"

const SidebarContainer = styled.div`
  height: 100%;
  width: 100%;
  max-width: 100%;
  background-color: #d7dbeb;

  @media (max-width: ${(props) => props.theme.tablet}) {
  }

  @media (max-width: ${(props) => props.theme.mobile}) {
    height: 100%;
  }
`

const GridLayout = styled.div`
  display: flex;
  padding: 1rem 2rem;
  justify-content: center;

  @media (max-width: ${(props) => props.theme.tablet}) {
    display: none;
  }

  @media (max-width: ${(props) => props.theme.mobile}) {
    display: none;
  }
`

const LeftIcons = styled.div`
  padding-right: 1rem;
`

const Icons = styled.div``

class Sidebar extends Component {
  render() {
    return (
      <SidebarContainer>
        <LoggedInUser />
        {/* <Weather /> */}
        <div>
          <GridLayout>
            <LeftIcons>
              <img
                src="companylogo.png"
                alt="company logo"
                className="hometiles"
              ></img>
              <p>PAWPRINT</p>
            </LeftIcons>

            <Icons>
              <Link to="/news">
                <img
                  src="companynews.png"
                  alt="company news"
                  className="hometiles"
                ></img>
              </Link>
              <p>NEWS</p>
            </Icons>
          </GridLayout>

          <GridLayout>
            <LeftIcons>
              <Link to="/newhires">
                <img
                  src="new-hires-puppies.png"
                  alt="new hires"
                  className="hometiles"
                ></img>
              </Link>
              <p>NEW HIRES</p>
            </LeftIcons>

            <Icons>
              <Link to="/humanresources">
                <img
                  src="HRNews.png"
                  alt="human resources"
                  className="hometiles"
                ></img>
              </Link>
              <p>HUMAN RESOURCES</p>
            </Icons>
          </GridLayout>

          <GridLayout>
            <LeftIcons>
              <Link to="/development">
                <img
                  src="tech.png"
                  alt="development"
                  className="hometiles"
                ></img>
              </Link>
              <p>DEVELOPMENT</p>
            </LeftIcons>

            <Icons>
              <Link to="/eventcalendar">
                <img
                  src="announcements.png"
                  alt="announcements"
                  className="hometiles"
                ></img>
              </Link>
              <p>EVENT CALENDAR</p>
            </Icons>
          </GridLayout>
        </div>
      </SidebarContainer>
    )
  }
}

export default Sidebar
