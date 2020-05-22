import React, { Component } from "react"
import { connect } from "react-redux"
import { getUser } from "../../actions/user"
import { Link } from "react-router-dom"

class UserDetails extends Component {
  componentDidMount() {
    const { userId } = this.props.match.params
    this.props.getUser(userId)
  }

  render() {
    const { user } = this.props
    return (
      <div>
        <Link to='/users'>All Users</Link>
        {user && (
          <div>
            <h1>User Details</h1>
            <img src={user.avatar} />
            <p>Name: {user.name} </p>
            <p> Email: {user.email} </p>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user.activeUser,
})

export default connect(mapStateToProps, { getUser })(UserDetails)
