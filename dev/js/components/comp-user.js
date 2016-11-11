import React from 'react'
import UserList from '../containers/user-list'
import UserDetail from '../containers/user-detail'
//require('../../scss/style.scss');

const CompUser = () => (
  <div>
    <h2>Influential Persons List:</h2>
    <UserList />
    <hr />
    <h2>Bio:</h2>
    <UserDetail />
  </div>
);
export default CompUser;