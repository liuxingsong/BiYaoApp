import React, {Component} from 'react'
import {browserHistory} from 'react-router'
class Login extends Component {
	 back() {
    this.props.router.goBack()
  }
  render() {
    return (
      <div className="m-login">
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
		         	  	 <input type="text" placeholder="请输入密码"/>
		         	  	 <span></span>
		         	  	 <i className="yo-ico">&#xe610;</i>
		         	  </li>
		         </ul>
         </div>
         <div className="bttn">
         	  <input type="submit" value="登录" />	  
         </div>
         <div className="aside">
         	<span>还没有账号！快速注册</span>
         	<b></b>
         	<span>忘记密码？</span>
         </div>
      </div>
    )
  }
}

export default Login