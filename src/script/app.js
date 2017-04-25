//app.js 所有文件的入口文件

require('../style/app.scss')
import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory, IndexRedirect,browserHistory} from 'react-router'
import Index from './components/Index'
import Details from './components/details/Details'
import Shopcar from './components/shopcar/Shopcar'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Index}>
      <IndexRedirect to="/Shopcar" />
     	<Route path="shopcar" component={Shopcar} />    	
    </Route>
    <Route path="details" component={Details} />
    
  </Router>
), document.getElementById('root'))
