import React, {Component} from 'react'
import {browserHistory} from 'react-router'

	
class Registor extends Component {
	 back() {
    this.props.router.goBack()
  }
  render() {
    return (
      <div className="m-registor">
         <div className="top">
         	  <b className="yo-ico" onClick={this.back.bind(this)}>&#xe697;</b>
         </div>
         <div className="ban">
         	  <img src="./img/logic.jpg" />
         </div>
         <div className="write">
		         <ul >
		         	  <li>
		         	  	 <input type="text" placeholder="请填入手机号"/>
		         	  </li>
		         	  <li>
		         	  	 <input type="text" placeholder="请输入验证码"/>
		         	  	 <span></span>
		         	  	 <b>获取验证码</b>
		         	  </li>
		         	  <li>
		         	  	 <input type="text" placeholder="请输入密码"/>
		         	  	 <span></span>
		         	  	 <i className="yo-ico">&#xe610;</i>
		         	  </li>
		         </ul>
         </div>
         <div className="bttn">
         	  <input type="submit" value="注册" />
         	  <span>已有账号！立即登录</span>
         </div>
      </div>
    )
  }
}

export default Registor