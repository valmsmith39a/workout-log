import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/index.js'

require('./style/style.scss')

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>
  document.getElementById('app')
)
