import React, {Component} from 'react'

import TabBar from '../common/TabBar'
import {Link} from 'react-router'


class Mine extends Component {
  render() {
    return (
    <div className = "m-mine">
      <div className ="m-header">
         <div className="top1">
         	   <span className="yo-ico">&#xe650;</span>
         </div>
         <div className="bottom1">
         	   <dl>
         	   	   <dt>
         	   	   	   <span className="yo-ico">&#xe92c;</span>
         	   	   </dt>
         	   	   <dd>
         	   	   	   <Link to="/registor"><b className="b1">注册</b></Link>
         	   	   	   <span></span>
         	   	   	   <Link to="/login"><b className="b2">登录</b></Link>
         	   	   </dd>
         	   </dl> 
         </div>
      </div>
      <div className="m-section">
      	 <div className="main">
      	 	  <div className="list">
      	 	  	<b>我的订单</b>
      	 	    <span>查看全部订单</span>
              <i className="yo-ico">&#xf07f;</i>
      	 	  </div>
      	 	  <div className="nav">	
		          <Link to=""><i className="yo-ico">&#xe738;</i><b>待付款</b></Link>
		          <Link to=""><i className="yo-ico">&#xe803;</i><b>待收货</b></Link>
		          <Link to=""><i className="yo-ico">&#xe61f;</i><b>待评价</b></Link>
		          <Link to=""><i className="yo-ico">&#xe634;</i><b>退款/售后</b></Link>
      	 	  </div>
      	 </div>
      	 <div className="wraf">
      	 	  <div className="set">
      	 	  	 <b>设置</b>
      	 	     <span></span>
               <i className="yo-ico">&#xf07f;</i>
      	 	  </div>
      	 	  <div className="custom">
      	 	  	 <b>客服中心</b>
      	 	     <span className="cus1">(7*24小时服务)</span>
      	 	     <b className="cus2">9533859</b>
               <i className="yo-ico">&#xf07f;</i>
      	 	  </div>
      	 </div>
      	 <div className="empty"> 	 	   
      	 	   <span>任何问题，立刻致电9533859，有我们在，您放心！</span>
      	 </div>	 
      </div>
      <TabBar />
    </div>  
    )
  }
}

export default Mine


