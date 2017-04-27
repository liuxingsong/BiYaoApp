import React, {Component} from 'react'

import {Link} from 'react-router'

class TabBar extends Component {
  render() {
    return (
      <div className="m-tabbar">
        <div>
          <Link to="/board" activeClassName="active"><i className="yo-ico">&#xe601;</i><b>首页</b></Link>
          <Link to="/sortList"><i className="yo-ico">&#xe613;</i><b>分类</b></Link>
          <Link to="/shopcar"><i className="yo-ico">&#xe6b1;</i><b>购物车</b></Link>
          <Link to="/myMassage"><i className="yo-ico">&#xe69e;</i><b>我的</b></Link>
        </div>
      </div>
    )
  }
}
export default TabBar
