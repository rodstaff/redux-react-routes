import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectUser } from '../actions/user'
// import store from '../store'

// store.subscribe( () => {
// console.log("Store changed", store.getState())
// });
// //below snippet is a sample of how to add a state into the code
// //but should be matched by a corresponding reducer function to record and update this new state
// store.dispatch({type: "ADD_USER_NAME", payload: "Rod"})
// store.dispatch({type: "ADD_USER_AGE", payload: 23})

class UserList extends React.Component {

  createListItems() {
    return (
      this.props.users.map((user) => {
  	    return (
          <li key={user.id}
            onClick={() => this.props.selectUser(user)}
          > 
            {user.name} {user.last}
          </li>
  	    );
      })
    );
  }
    render() {
  	  return (
        <ul>
          {this.createListItems()}
        </ul>
  	  );
    }
}
function mapStateToProps(state) {
  return {
    users: state.users
  };
}
function matchDispatchToProps(dispatch) {
  return (
    bindActionCreators({selectUser: selectUser}, dispatch)
  );
}
export default connect(mapStateToProps, matchDispatchToProps)(UserList);
