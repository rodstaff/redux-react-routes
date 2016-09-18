import React from 'react'

import CompUser from '../dev/js/components/comp-user'
import store from '../dev/js/store'

export const User = () => (
  <div>
    <br />
    <h1>This is the User Page</h1>
    <CompUser store={store}/>
  </div>
)