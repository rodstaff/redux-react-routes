import React from 'react'
//import {bindActionCreators} from 'redux'

import {connect} from 'react-redux'

class UserList extends React.Component {
  createListItems() {
    return (
      this.props.users.map((user) => {
  	    return (
          <li key={user.id}> {user.first} {user.last}</li>
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
export default connect(mapStateToProps)(UserList);

//   render() {
//     return (
//       <ul>
//         <li>ein</li>
//         <li>twei</li>
//         <li>drei</li>
//       </ul>
//     );
//   }
// }
// export default UserList;

