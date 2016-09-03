import 'babel-polyfill'  
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
// // import {createStore, applyMiddleware} from 'redux'
import {createStore} from 'redux'
// // import thunk from 'redux-thunk'
// // import promise from 'react-promise'
// // import createLogger from 'create-logger'
import allReducers from './reducers'
import App from './components/app'

//const logger = createLogger();
const store = createStore(allReducers)

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>, 
  document.getElementById('root')
);

