import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { Container } from './container'
import { Home } from './home'
import { User } from './user'
import { Turtles } from './turtles'
import { NotFound } from './notfound'
import store from '../dev/js/store'

const history = syncHistoryWithStore(browserHistory, store)

export default class App extends React.Component {
  render () {
    return (
      <Router history={history}>
        <Route path='/' component={Container}>

          <IndexRoute component={Home} />
          <Route path='user' component={User} />  
          <Route path='turtles(/:name)' component={Turtles} />
          <Route path='*' component={NotFound} />

        </Route>
      </Router>
    )
  }
}