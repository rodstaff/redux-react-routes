import React from 'react'
import store from '../dev/js/store'

store.subscribe( () => {
console.log("Store changed", store.getState())
});

store.dispatch({type: "ADD_USER_NAME", payload: "Rod"})
store.dispatch({type: "ADD_USER_AGE", payload: 23})

export const Home = () => (
  <div>
    <br />
    <h1>Welcome to the World of Pharaohs and Turtles!</h1>
    <h4>Click on the above links to know more...</h4>
  </div>
)
