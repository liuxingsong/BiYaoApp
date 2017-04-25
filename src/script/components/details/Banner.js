import React, {Component} from 'react'
import Carousel from '../../../component_dev/carousel/src/'

class Banner extends Component {
  render() {
    return (
//  	<Carousel extraClass={'yo-carousel'}>
//	      <li className="m-banner" extraClass={'item'}>
//	        <img className="img" src="https://img.biyao.com/files/data0/product/2017/04/10/16/0/7993608446522898.jpg" alt=""/>
//	        <div><span>1</span><span>/5</span></div>
//	      </li>
//    </Carousel>
			<div className="m-banner">
				<Carousel extraClass={'yo-carousel-a'}>
				    <li className="item"><img className="img" src="https://img.biyao.com/files/data0/product/2017/04/10/16/0/7993608446522898.jpg" /></li>  
				    <li className="item"><img className="img" src="//img1.qunarzz.com/qs/1610/a6/01d1ad00e4b9e102.jpg" /></li>  
				    <li className="item"><img className="img" src="//img1.qunarzz.com/qs/1610/a6/01d1ad00e4b9e102.jpg" /></li>  
			     	<li className="item"><img className="img" src="https://img.biyao.com/files/data0/product/2017/04/10/16/0/7993608446522898.jpg" /></li>  
			     	<li className="item"><img className="img" src="https://img.biyao.com/files/data0/product/2017/04/10/16/0/7993608446522898.jpg" /></li>	     	 	
				</Carousel>
				<div className="page"><span>1</span><span>/5</span></div>
			</div>
			
    )
  }
}

export default Banner
