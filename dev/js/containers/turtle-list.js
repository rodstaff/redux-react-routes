import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectTurtle } from '../actions/turtle'

class TurtleList extends React.Component {

  createListItems() {
    return (
      this.props.turtles.map((turtle) => {
  	    return (
          <li key={turtle.id}
            onClick={() => this.props.selectTurtle(turtle)}
          > 
            {turtle.name} 
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
    turtles: state.turtles
  };
}
function matchDispatchToProps(dispatch) {
  return (
    bindActionCreators({selectTurtle: selectTurtle}, dispatch)
  );
}
export default connect(mapStateToProps, matchDispatchToProps)(TurtleList);
