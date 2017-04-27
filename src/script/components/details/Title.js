import React, {Component} from 'react'

class Title extends Component {
  render() {
    return (
      <div className="m-title">
        <div className="name">
        	<div className="left">
        		<h3>真皮单肩斜挎包</h3>
        		<p>平纹牛皮、可调节肩带、强力磁扣</p> 
        	</div>
        	 <div className="right">
        	 	<i className="yo-ico">&#xe62b;</i>
        	 	<span>分享</span>
        	 </div>
        </div>
        <div className="price">
        	<b>￥333</b>
        	<span>周期生产： 10天</span>
        </div>
      </div>
    )
  }
}

export default Title
