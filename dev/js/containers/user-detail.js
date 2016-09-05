import React from 'react'
import {connect} from 'react-redux'

class UserDetail extends React.Component {

    render() {
      if (!this.props.user) {
        return (<h4>Select your favorite Ninja...</h4>);
      };
  	  return (
        <div>
          <h3>{this.props.user.name} aka "{this.props.user.aka}"</h3>
          <h3>Age: {this.props.user.age}?</h3>
          <h3>Description: {this.props.user.description}</h3>
          <h4>(Descriptions from Wikipedia)</h4>
        </div>
  	  );
    }
}
function mapStateToProps(state) {
  return {
    user: state.activeUser
  };
}
export default connect(mapStateToProps)(UserDetail);
