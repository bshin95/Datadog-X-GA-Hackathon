import React, { Component } from "react"
import { connect } from "react-redux"
import { getUser } from "../../actions/user"
import { Link } from "react-router-dom"
import Sidebar from "../SideBar/Sidebar"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  width: 100%;
`

const User = styled.div`
  padding: 2rem 2rem;
  width: 100%;
  text-align: center;
`

const Info = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 3rem;
`

const Text = styled.div`
  padding-left: 3rem;
  display: flex;
  flex-direction: column;
`

const Img = styled.img`
  border-radius: 50%;
`

const StyledLink = styled(Link)`
  text-align: right;
  text-decoration: none;
  color: black;
`

const AboutMe = styled.div`
  padding: 2rem;
`

const AboutMeBox = styled.img`
  padding-top: 3rem;
  width: 30%;
`

const AboutText = styled.p`
  font-size: 5rem;
  margin: 0 auto;
`

const Expand = styled.div`
  background: #fff;
  overflow: hidden;
  color: #000;
  line-height: 50px;

  transition: all 0.5s ease-in-out;
  height: 0;

  .expand:target {
    height: 50px;
  }
`

class UserDetails extends Component {
  componentDidMount() {
    const { userId } = this.props.match.params
    this.props.getUser(userId)
  }

  render() {
    const { user } = this.props
    return (
      <Container>
        <div>
          <Sidebar />
        </div>
        <User>
          <StyledLink to="/users">Back to directory</StyledLink>
          <div>
            {user && (
              <Info>
                <Img src={user.avatar} />
                <Text>
                  <p> {user.name} </p>
                  <p> {user.email} </p>
                  <p>{user.phone}</p>
                  <p>{user.department}</p>
                  <p>{user.hierarchy}</p>
                  <p>{user.location}</p>
                </Text>
              </Info>
            )}
          </div>
          <AboutMe>
            <AboutMeBox
              src="https://cdn.shopify.com/s/files/1/1218/4290/products/Solid-129-Purple_1400x.jpg?v=1464824795"
              alt="company logo"
              className="hometiles"
            ></AboutMeBox>
            <div id="content">
              <a href="#nav">
                <span>Click Here</span>
              </a>
              <Expand>
                <p>Cum enim magna parturient</p>
              </Expand>
            </div>
          </AboutMe>
        </User>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user.activeUser,
})

export default connect(mapStateToProps, { getUser })(UserDetails)
