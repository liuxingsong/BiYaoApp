import React, {Component} from 'react'
import {Link} from 'react-router'
import Scroller from '../../../component_dev/scroller/src'
import Loading, {loading} from '../../../component_dev/loading/src'

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

    let that = this
    return list.map((value,index)=>{
      return (
        <div className="m-list">
          <h1>
            <b>{value.title}</b> <i className="yo-ico">&#xf07f;</i>
          </h1>
          <div className="topImg">
            <Scroller.LazyImage src={value.img} alt=""/>
            <div className="makers">
              <div>
                <p>{value.Maker}</p>
                <p>{value.method}</p>
              </div>
            </div>
          </div>
          <ul>
            <li>
              <Scroller.LazyImage src={value.img1}/>
              <p className="title">{value.title1}</p>
              <p className="price">{value.price1}</p>
            </li>
            <li>
              <Scroller.LazyImage src={value.img2}/>
              <p className="title">{value.title2}</p>
              <p className="price">{value.price2}</p>
            </li>
            <li>
              <Scroller.LazyImage src={value.img3}/>
              <p className="title">{value.title3}</p>
              <p className="price">{value.price3}</p>
            </li>
            <li>
              <Scroller.LazyImage src={value.img4}/>
              <p className="title">{value.title4}</p>
              <p className="price">{value.price4}</p>
            </li>
            <li>
              <Scroller.LazyImage src={value.img5}/>
              <p className="title">{value.title5}</p>
              <p className="price">{value.price5}</p>
            </li>
            <li>
              <Scroller.LazyImage src={value.img6}/>
              <p className="title">{value.title6}</p>
              <p className="price">{value.price6}</p>
            </li>
          </ul>
        </div>
      )
    })
  }
  render() {
    return (
      <div className="m-boardlist">
          {this.getGoodsList(this.state.goodsList)}
      </div>
    )
  }
  componentDidMount(){
    fetch('/json/QualityMen')
    .then((response)=>{
        return response.json()
    })
    .then((res)=>{
      console.log(res.goodsSort)
        this.setState({

          goodsList: res.goodsSort
        })

    })

  }
}

export default BoardList
