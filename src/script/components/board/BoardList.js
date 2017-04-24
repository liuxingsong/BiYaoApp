import React, {Component} from 'react'

class BoardList extends Component {
  render() {
    return (
      <div className="m-boardlist">
        <h1>
          <b>品质男装</b> <i className="yo-ico">&#xf07f;</i>
        </h1>
        <div className="topImg">
          <img src="http://bfs.biyao.com/group1/M00/00/14/wKhkVVj4SX-ALVPmAACZNF2TAbI929.jpg" alt=""/>
          <div className="makers">
            <div>
              <p>Hugo Boss PRADA</p>
              <p>制造商出品</p>
            </div>
          </div>
        </div>
        <ul>
          <li>
            <img src="https://img.biyao.com/files/temp/88/88bc9c980364f449.jpg"/>
            <p className="title">简约商务休闲男鞋</p>
            <p className="price">￥399</p>
          </li>
          <li>
            <img src="https://img.biyao.com/files/temp/88/88bc9c980364f449.jpg"/>
            <p className="title">简约商务休闲男鞋</p>
            <p className="price">￥399</p>
          </li>
          <li>
            <img src="https://img.biyao.com/files/temp/88/88bc9c980364f449.jpg"/>
            <p className="title">简约商务休闲男鞋</p>
            <p className="price">￥399</p>
          </li>
          <li>
            <img src="https://img.biyao.com/files/temp/88/88bc9c980364f449.jpg"/>
            <p className="title">简约商务休闲男鞋</p>
            <p className="price">￥399</p>
          </li>
          <li>
            <img src="https://img.biyao.com/files/temp/88/88bc9c980364f449.jpg"/>
            <p className="title">简约商务休闲男鞋</p>
            <p className="price">￥399</p>
          </li>
          <li>
            <img src="https://img.biyao.com/files/temp/88/88bc9c980364f449.jpg"/>
            <p className="title">简约商务休闲男鞋</p>
            <p className="price">￥399</p>
          </li>
        </ul>
      </div>
    )
  }
}

export default BoardList
