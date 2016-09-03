import {combineReducers} from 'redux'
import ReducerUsers from './reducer-users'

const allReducers = combineReducers({
  users: ReducerUsers
});

export default allReducers;