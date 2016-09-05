import {combineReducers} from 'redux'
import ReducerUsers from './reducer-users'
import ReducerTurtles from './reducer-turtles'
import ActiveUserReducer from './reducer-active-user'
import ActiveTurtleReducer from './reducer-active-turtle'

const allReducers = combineReducers({
  users: ReducerUsers,
  turtles: ReducerTurtles,
  activeUser: ActiveUserReducer,
  activeTurtle: ActiveTurtleReducer
});

export default allReducers;