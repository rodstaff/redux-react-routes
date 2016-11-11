import React from 'react'
import TurtleList from '../containers/turtle-list'
import TurtleDetail from '../containers/turtle-detail'
//require('../../scss/style.scss');

const CompTurtle = () => (
  <div>
    <h2>Ninja Turtles List:</h2>
    <TurtleList />
    <hr />
    <h2>Teenager Bio:</h2>
    <TurtleDetail />
  </div>
);
export default CompTurtle;