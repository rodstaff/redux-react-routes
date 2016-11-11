import React from 'react'
import { connect } from 'react-redux'

//alternative code
@connect((state) => {    
  return {                           
  user: state.activeUser
  };
})

class UserDetail extends React.Component {

    render() {
      if (!this.props.user) {
        return (<h4>Select your favorite famous person...</h4>);
      };
  	  return (
        <div>
          <h3>{this.props.user.name} {this.props.user.last}</h3>
          <h3>Born: {this.props.user.born}</h3>
          <h3>Would have been {this.props.user.age} yrs. old now, if were still alive.</h3>
          <h3>Description: {this.props.user.description}</h3>
          <h4>(Descriptions from Wikipedia)</h4>
        </div>
  	  );
    }
}
export default UserDetail;

// function mapStateToProps(state) {
//   return {
//     user: state.activeUser
//   };
// }
// export default connect(mapStateToProps)(UserDetail);
