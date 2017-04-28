import React, {Component} from 'react'
import {browserHistory} from 'react-router'

class Head extends Component {

  render() {
    return (
	  <div className="yo-header">
	  	<span className="yo-ico"></span>
	    <h2 className="title">购物车</h2>
	    <span className="affirm">编辑</span>
	  </div>
    )
  }
}

export default Head