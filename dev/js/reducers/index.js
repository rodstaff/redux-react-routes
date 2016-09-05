import {combineReducers} from 'redux'
import ReducerUsers from './reducer-users'
import ReducerTurtles from './reducer-turtles'
import ActiveUserReducer from './reducer-active-user'

const allReducers = combineReducers({
  users: ReducerUsers,
  turtles: ReducerTurtles,
  activeUser: ActiveUserReducer
});

export default allReducers;