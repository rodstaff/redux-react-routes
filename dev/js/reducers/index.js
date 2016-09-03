import {combineReducers} from 'redux'
import ReducerUsers from './reducer-users'
import ActiveUserReducer from './reducer-active-user'

const allReducers = combineReducers({
  users: ReducerUsers,
  activeUser: ActiveUserReducer
});

export default allReducers;