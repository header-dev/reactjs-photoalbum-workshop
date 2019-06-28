import React, { Component } from "react";
import UserList from "../components/Users/UserList";
import { connect } from "react-redux";
import { loadUsers } from '../actions'

class User extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.dispatch(loadUsers())
  }

  render() {
    const { users } = this.props;
    console.log(users);

    if (users.isRejected) {
      return <progress className="progress is-small is-primary" max="100" />;
    }

    return (
      <div>
        <br />
        <h1>Users</h1>
        <UserList data={users.data} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps)(User);
