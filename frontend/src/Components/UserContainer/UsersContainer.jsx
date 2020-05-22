import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { getAllUsers } from "../../actions/user"
import SearchInput from "../Search/Search"

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
      <div>
        <SearchInput onChange={this.handleInputChange} />

        <p />
        <p />

        {users.map(({ _id, name, email, avatar }) => (
          <div key={_id}>
            <Link to={`/users/${_id}`}>
              <img src={avatar} />
            </Link>
            <p> Name: {name} </p>
            <p> Email: {email} </p>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.user.data,
})

export default connect(mapStateToProps, { getAllUsers })(UsersContainer)
