require('../style/app.scss')

import React from 'react'
import ReactDOM from 'react-dom'

import {Router, Route, hashHistory, IndexRedirect} from 'react-router'

import Index from './components/index'

import Board from './components/board/Board'



ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Index}>
      <IndexRedirect to="/board" />
      <Route path="board" component={Board} />
      
    </Route>
  </Router>
), document.getElementById('root'))
