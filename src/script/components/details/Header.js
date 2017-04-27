import React, {Component} from 'react'
import {browserHistory} from 'react-router'

class Header extends Component {
  back() {
    browserHistory.goBack()
  }
  // ask for `router` from context
  // contextTypes: {
  //   router: React.PropTypes.object
  // }
  //
  // goBack(event) {
  //   console.log(this)
  //   this.context.router.push('/')
  // }

  render() {
    return (
      <div className="yo-header">
      	<span className={`regret yo-ico ${this.props.isShowBack ? '' : 'hide'}`} onClick={this.back.bind(this)}>&#xf07d;</span>
        <h2 className="title">
        	<em className="cur">商品</em>
        	<em>详情</em>
        	<em>评价</em>
    		</h2>
        <span className="affirm yo-ico">&#xe603;</span>
      </div>
    )
  }
}

export default Header
