require('../style/app.scss')

import React from 'react'
import ReactDOM from 'react-dom'

import {Router, Route, hashHistory, IndexRedirect} from 'react-router'

import Index from './components/Index'
import List from './components/list/List'


ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Index}>
      <IndexRedirect to="/list" />
      <Route path="list" component={List} />
    </Route>
  </Router>
), document.getElementById('root'))
