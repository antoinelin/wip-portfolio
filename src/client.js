import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import * as firebase from 'firebase'

import store from './js/store/store'
import App from './js/App'
import style from './assets/default.css'

if (__PROD__) { require('./index.html').default }

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('app'))
