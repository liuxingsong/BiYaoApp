import React, {Component} from 'react'

import Header from './Header'
import Footer from './Footer'
import Carousel from '../../../component_dev/carousel/src/'


import Scroller from "../../../component_dev/scroller/src"


class Details extends Component {
	
	constructor(props) {
    super(props)
    this.state = {
      Info: {}
    }
  }
	
  render() {
    return (
      <div className="m-details">
      		<Header />    
      		<section>
	      		<Scroller ref="scroller">
		      		<div className="m-banner">
						<Carousel
							extraClass={'yo-carousel-a'} 
							autoplay = { false }
						>
						   	<li className="item"><img className="img" src={this.state.Info.imageUrl} /></li>  
						    <li className="item"><img className="img" src={this.state.Info.imageUrl} /></li>  
						    <li className="item"><img className="img" src={this.state.Info.imageUrl} /></li>  
					     	<li className="item"><img className="img" src={this.state.Info.imageUrl} /></li>  
					     	<li className="item"><img className="img" src={this.state.Info.imageUrl} /></li>	     	 	
						</Carousel>
					</div>	
	      			<div className="m-title">	
				        <div className="name">
				        	<div className="left">
				        		<h3>{this.state.Info.title}</h3>
				        		<p>{this.state.Info.salePoint}</p> 
				        	</div>
			        	 	<div className="right">
				        	 	<i className="yo-ico">&#xe62b;</i>
				        	 	<span>分享</span>
			        	 	</div>
				        </div>
				        <div className="price">
				        	<b>{this.state.Info.price}</b>
				        	<span>周期生产： 10天</span>
				        </div>
			      	</div>
			      	<div className="m-serve">
			      		<div>
			      			<span><i className="yo-ico">&#xe63e;</i>七天无忧退货</span>
			     			<span><i className="yo-ico">&#xe63e;</i>先行赔付</span>
		 					<span><i className="yo-ico">&#xe63e;</i>超时赔付</span>
			      		</div>
		    	 		<em className="yo-ico">&#xf07f;</em>
			        </div>
			        <div className="m-select">
			      		<h3>已选择:&nbsp;&nbsp;&nbsp;黑色,&nbsp;&nbsp;&nbsp;标配,&nbsp;&nbsp;&nbsp;1件</h3>
		    	 		<em className="yo-ico">&#xf07f;</em>
			        </div>
			        <div className="m-rate">
				  		<p>商品评价<span>(暂无,&nbsp;购买后记得来评价哦)</span></p>
		 				<em className="yo-ico">&#xf07f;</em>
				    </div>
					
		    	</Scroller>
      		</section> 	
 		  	<Footer />
      	</div>
    )
  }
  
  componentDidMount() {
  	let domain = "http://localhost:7001/details"
  	
    fetch(domain)
      .then((response)=>response.json())
      .then((res)=>{
      	console.log(res.data.productList[1].item[0])
        this.setState({
          Info: res.data.productList[1].item[6]
         
          
        })
      
      })
  }
  
}

export default Details

