import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { getAllUsers } from "../../actions/user"
import SearchInput from "../Search/Search"
import Sidebar from "../SideBar/Sidebar"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  width: 100%;
`

const Directory = styled.div`
  width: 100%;
  /* padding: 0 2rem; */
  border: black solid 1px;
`

const StyledLink = styled(Link)`
  display: flex;
  justify-content: space-evenly;
  color: black;
  background-color: ${(props) => (props.odd ? "pink" : "white")};
  text-decoration: none;
  font-weight: bold;
`

const UserInfo = styled.p`
  text-align: center;
  width: 32%;
`

class UsersContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
    }
  }

  componentDidMount() {
    this.props.getAllUsers()
  }

  componentDidUpdate(prevProps) {
    const { users } = this.props
    if (
      (users.length && prevProps.users.length !== users.length) ||
      (users.length && !this.state.users.length)
    ) {
      this.setState({ users })
    }
  }

  handleInputChange = (e) => {
    e.persist()
    const { users } = this.props
    this.setState({
      users: users.filter((u) =>
        u.name.toLowerCase().includes(e.target.value.toLowerCase())
      ),
    })
  }

  render() {
    const { users } = this.state
    return (
      <Container>
        <div>
          <Sidebar />
        </div>
        <Directory>
          <SearchInput
            styled="width: 500px;"
            onChange={this.handleInputChange}
          />
          {users.map(({ _id, name, email, phone, hierarchy }, index) => {
            const isOdd = index % 2 !== 0
            return (
              <StyledLink to={`/users/${_id}`} odd={isOdd}>
                <UserInfo> {name} </UserInfo>
                <UserInfo>{phone}</UserInfo>
                <UserInfo> {hierarchy}</UserInfo>
              </StyledLink>
            )
          })}
        </Directory>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.user.data,
})

export default connect(mapStateToProps, { getAllUsers })(UsersContainer)
