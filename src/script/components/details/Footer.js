import React, {Component} from 'react'

import {Link} from 'react-router'

class Footer extends Component {
  render() {
    return (
      <div className="m-footer">
        <div>
          <Link to="" className="car">
          	<span><i className="yo-ico">&#xe643;</i><b>客服</b></span>
          	<span className="carnum">
          		<i className="yo-ico">&#x357e;</i><b>购物车</b>
          		<em className="num">3</em>
          	</span>
          </Link>
          <a className="addcar">加入购物车</a>
          <a className="buynow">立即购买</a>
        </div>
      </div>
    )
  }
}

export default Footer
