import React, {Component} from 'react'

import { connect } from 'react-redux'
import * as actionTypes from '../store/actions/actions'
import './service.css'

class Services extends Component {
    state = {
        users: []
    }

    componentDidMount() {
        this.props.onFetchUsers();
    }
    render() {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Username</th>
                    <th scope="col">Phone</th>
                    <th scope="col">email</th>
                    <th scope="col">Edit/Delete</th>
                </tr>
            </thead>
            <tbody>
                {this.props.users.map((user) => (
                    <tr key={user.id}>
                        <th scope="row">{user.id}</th>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.phone}</td>
                        <td>{user.email}</td>
                        <td><i className="material-icons">edit</i><i className="material-icons" onClick={() => this.props.onDeleteUser(user)}>delete</i></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
    }
};

const mapStateToProps = state => {
    return {
      users: state.users
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      onFetchUsers: () => dispatch(actionTypes.fetchUsers()),
      onDeleteUser: (user) => dispatch({type: actionTypes.DELETE_USER, payload: user.id})
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Services)