import React, {Component} from 'react'

import {Link} from 'react-router'

class TabBar extends Component {
  render() {
    return (
      <div className="m-tabbar">
        <div>
          <Link to="/board" activeClassName="active"><i className="yo-ico">&#xe6b8;</i><b>首页</b></Link>
          <Link to="" ><i className="yo-ico">&#xe7da;</i><b>分类</b></Link>
          <Link to=""><i className="yo-ico">&#xe78b;</i><b>购物车</b></Link>
          <Link to="/mine" activeClassName="active"><i className="yo-ico">&#xe78b;</i><b>我的</b></Link>
        </div>
      </div>
    )
  }
}

export default TabBar
