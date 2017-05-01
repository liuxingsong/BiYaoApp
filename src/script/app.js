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
     
     	<Route path="shopcar" component={Shopcar} />    	
    </Route>
    <Route path="details/:id" component={Details} uri="/details" />
    
  </Router>
), document.getElementById('root'))
