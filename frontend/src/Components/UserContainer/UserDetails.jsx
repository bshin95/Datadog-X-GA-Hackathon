import React, { Component } from "react"
import { connect } from "react-redux"
import { getUser } from "../../actions/user"
import { Link } from "react-router-dom"
import Sidebar from "../SideBar/Sidebar"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: ${(props) => props.theme.tablet}) {
    display: inline;
  }

  @media (max-width: ${(props) => props.theme.mobile}) {
    display: inline;
  }
`

const User = styled.div`
  padding: 2rem 2rem;
  width: 70%;
  text-align: center;

  @media (max-width: ${(props) => props.theme.tablet}) {
    padding: 0;
    width: 100%;
  }

  @media (max-width: ${(props) => props.theme.mobile}) {
    padding: 0;
    width: 100%;
  }
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
  width: 900px;
  padding: 2rem;

  @media (max-width: ${(props) => props.theme.tablet}) {
    width: 600px;
    padding: 0;
    margin: 0 auto;
  }

  @media (max-width: ${(props) => props.theme.mobile}) {
    width: 250px;
    padding: 0;
    margin: 0 auto;
  }
`

const AboutMeBox = styled.img`
  padding-top: 3rem;

  @media (max-width: ${(props) => props.theme.tablet}) {
    width: 100%;
  }

  @media (max-width: ${(props) => props.theme.mobile}) {
    width: 75%;
  }
`

const AboutText = styled.p`
  font-size: 5rem;
  margin: 0 auto;
`

const Expand = styled.div`
  padding: 2rem 0;
`

const Interests = styled.div`
  padding: 2rem;
`

const TwoContain = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const InterestImg = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;

  @media (max-width: ${(props) => props.theme.tablet}) {
    width: 150px;
    height: 150px;
  }

  @media (max-width: ${(props) => props.theme.mobile}) {
    width: 100px;
    height: 100px;
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
              src="https://i.imgur.com/XUuRUBV.jpg"
              alt="company logo"
              className="hometiles"
            ></AboutMeBox>
            <Expand class="mw-900" alt="Max-width 100%">
              <button
                type="button"
                class="btn btn-info"
                data-toggle="collapse"
                data-target="#demo"
              >
                Learn more about me!
              </button>
              <div id="demo" class="collapse">
                {user && (
                  <Interests>
                    <TwoContain>
                      <div>
                        <InterestImg src={user.interest_one_image} />
                        <p>{user.interest_one}</p>
                      </div>
                      <div>
                        <InterestImg src={user.interest_two_image} />
                        <p>{user.interest_one}</p>
                      </div>
                    </TwoContain>
                    <TwoContain>
                      <div>
                        <InterestImg src={user.interest_three_image} />
                        <p>{user.interest_two}</p>
                      </div>
                      <div>
                        <InterestImg src={user.interest_four_image} />
                        <p>{user.interest_three}</p>
                      </div>
                    </TwoContain>
                    <div>
                      <InterestImg src={user.interest_five_image} />
                      <p>{user.interest_four}</p>
                    </div>
                  </Interests>
                )}
              </div>
            </Expand>
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
