import React from 'react'
import UserList from '../containers/user-list'
import UserDetail from '../containers/user-detail'
import TurtleList from '../containers/turtle-list'
import TurtleDetail from '../containers/turtle-detail'
//require('../../scss/style.scss');


const App = () => (
  <div>
    <h2>Famous Persons List:</h2>
    <UserList />
    <hr />
    <h2>Bio:</h2>
    <UserDetail />
    <hr />
    <h2>Ninja Turtles List:</h2>
    <TurtleList />
    <hr />
    <h2>Teenager Bio:</h2>
    <TurtleDetail />
  </div>
);
export default App;