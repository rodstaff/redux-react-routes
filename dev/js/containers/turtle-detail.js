import React from 'react'
import { connect } from 'react-redux'

//alternative code
@connect((state) => {    
  return {                           
  turtle: state.activeTurtle
  };
})

class TurtleDetail extends React.Component {

    render() {
      if (!this.props.turtle) {
        return (<h4>Select your favorite Ninja...</h4>);
      };
  	  return (
        <div>
          <h3>{this.props.turtle.name} aka "{this.props.turtle.aka}"</h3>
          <h3>Age: {this.props.turtle.age}?</h3>
          <h3>Description: {this.props.turtle.description}</h3>
          <h4>(Descriptions from Wikipedia)</h4>
        </div>
  	  );
    }
}
export default TurtleDetail;
// function mapStateToProps(state) {
//   return {
//     turtle: state.activeTurtle
//   };
// }
// export default connect(mapStateToProps)(TurtleDetail);