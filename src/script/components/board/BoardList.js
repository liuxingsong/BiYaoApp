import React, {Component} from 'react'
import {Link} from 'react-router'

class BoardList extends Component {
  constructor(props){
    super(props)
    this.state={
      title:'',
      img:'',
      Maker:'',
      method:'',
      goodsList:[{}]
    }
  }
  getGoodsList(list){
    return list.map((value,index)=>{
      return (
        <li>
          <img src={value.img}/>
          <p className="title">{value.title}</p>
          <p className="price">{value.price}</p>
        </li>
      )
    })
  }
  render() {
    return (
      <div className="m-boardlist">
        <h1>
          <b>{this.state.title}</b> <i className="yo-ico">&#xf07f;</i>
        </h1>
        <div className="topImg">
          <img src={this.state.img} alt=""/>
          <div className="makers">
            <div>
              <p>{this.state.Maker}</p>
              <p>{this.state.method}</p>
            </div>
          </div>
        </div>
        <ul>
            {this.getGoodsList(this.state.goodsList)}
        </ul>
      </div>
    )
  }
  componentDidMount(){
    fetch('/json/QualityMen')
    .then((response)=>{
        return response.json()
    })
    .then((res)=>{
      for (let i = 0; i < res.goodsSort.length; i++) {
        this.setState({
          title: res.goodsSort[i].title,
          img:res.goodsSort[i].topMsg.img,
          Maker:res.goodsSort[i].topMsg.Maker,
          method:res.goodsSort[i].topMsg.method,
          goodsList: res.goodsSort[i].GoodsMassage
        })
      }
    })

  }
}

export default BoardList
