import React, {Component} from 'react'

import Modal from '../../../component_dev/modal/src'
import Popup from '../../../component_dev/popup/src'

class Try extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalShow: false,
      popupShow: false
    }
  }

  hideLogin() {
    this.setState({
      modalShow: false
    })
  }

  showLogin() {
    this.setState({
      modalShow: true
    })
  }



submit() {
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    this.setState({
      popupShow: false
    })

    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
    fetch('/nodejs/users/registor', {
      method: 'POST',
      headers: headers,
      body: `username=${username}&password=${password}`
    })
    .then(response=>response.json())
    .then(res=>{
      if (res.username) {
        console.log('注册成功');
      } else {
        console.log('注册失败');
      }
    })
    .catch(e=>{
      console.log(e);
    })
  }

render() {
    return (
      <div className="m-try">
        <Modal
         ref="login"
         show={this.state.modalShow}
         width="100%"
         height="100%"
         extraClass="m-login"
         contentExtraClass="content"
        >
          <p onClick={this.hideLogin.bind(this)}>abddfdf</p>
          <div className="m-login">
		         <div className="top">
		         	  <b className="yo-ico">&#xe697;</b>
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
        </Modal>

        <Popup
          ref="registor"
          show={this.state.popupShow}
          height="300"
          extraClass="m-registor"
        >
          <div>用户名：<input type="text" ref="username"/></div>
          <div>密码：<input type="text" ref="password"/></div>
          <div><input type="button" onClick={this.submit.bind(this)} value="提交"/></div>
        </Popup>

        <div className="yo-btn" onClick={this.showLogin.bind(this)}>登录</div>
        <div className="yo-btn" onClick={()=>{this.setState({popupShow:true})}}>注册</div>
      </div>
    )
  }

  componentDidMount() {

  }
}


export default Try