require('../style/app.scss')

import React from 'react'
import ReactDOM from 'react-dom'

import {Router, Route, hashHistory, IndexRedirect} from 'react-router'

import Index from './components/index'
import SortList from './components/sortList/SortList'
import Board from './components/board/Board'
import BuyCar from './components/buyCar/BuyCar'
import MyMassage from './components/myMassage/MyMassage'


ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Index}>
      <IndexRedirect to="/board" />
      <Route path="board" component={Board} />
      <Route path="sortList" component={SortList} />
      <Route path="buyCar" component={BuyCar} />
      <Route path="myMassage" component={MyMassage} />
    </Route>
  </Router>
), document.getElementById('root'))
