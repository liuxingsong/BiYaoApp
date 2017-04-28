require('../style/app.scss')

import React from 'react'
import ReactDOM from 'react-dom'

import {Router, Route, hashHistory, IndexRedirect} from 'react-router'

import Index from './components/Index'
import Board from './components/board/Board'
import Mine from './components/mine/Mine'
import Registor from './components/mine/Registor'

import Login from './components/mine/Login'
import Try from './components/try/Try'
ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Index}>
      <IndexRedirect to="/board" />
      <Route path="board" component={Board} />
      
     
    </Route>
    
     <Route path="mine" component={Mine} />
     <Route path="try" component={Try} />
     <Route path="registor" component={Registor} /> 
     <Route path="login" component={Login} />
    
    
  </Router>
), document.getElementById('root'))
