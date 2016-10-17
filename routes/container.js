import React from 'react';
import {Router, Route, Link, IndexLink, IndexRoute, hashHistory, 
        browserHistory, DefaultRoute} from 'react-router';

export const Container = (props) => (
  <div>
    <Nav /> 
    {props.children}
  </div>
)
const Nav = () => (
  <div>
    <IndexLink activeClassName='active' to='/'>Home</IndexLink>&nbsp;&nbsp;
    <IndexLink activeClassName='active' to='/user'>Famous People</IndexLink>&nbsp;&nbsp;
    <IndexLink activeClassName='active' to='/turtles'>Mutant Turtles</IndexLink>&nbsp;&nbsp;
  </div>
)