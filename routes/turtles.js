import React from 'react'

import CompTurtle from '../dev/js/components/comp-turtle'
import store from '../dev/js/store'


export const Turtles = (props) => (
  <div>
    <br />
    <h1>This is the Turtles Page</h1>
    <CompTurtle store={store}/>
  </div>
)