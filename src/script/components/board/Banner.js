import React, {Component} from 'react'

import Scroller from '../../../component_dev/scroller/src';
class Banner extends Component {
  render() {
    return (
      <div className="m-banner">
      <Scroller
    scrollX={true}
    scrollY={false}
>
      	<ul className="m-first">
      		
	        <li className="item checked" bxistsubcategory="0" categoryid="122">眼镜</li>
	        <li className="item" bxistsubcategory="1" categoryid="1">服装</li> 
	        <li className="item" bxistsubcategory="1" categoryid="128">婴童</li> 
	        <li className="item" bxistsubcategory="1" categoryid="35">鞋靴</li> 
	        <li className="item" bxistsubcategory="1" categoryid="39">运动</li> 
	        <li className="item" bxistsubcategory="1" categoryid="153">皮具</li> 
	        <li className="item" bxistsubcategory="0" categoryid="223">数码</li>               
	        <li className="item" bxistsubcategory="1" categoryid="43">出行</li> 
	        <li className="item" bxistsubcategory="0" categoryid="54">个户</li> 
	        <li className="item" bxistsubcategory="1" categoryid="119">美妆</li> 
	        <li className="item" bxistsubcategory="1" categoryid="58">居家</li> 
	        <li className="item" bxistsubcategory="1" categoryid="51">厨具</li> 
	        <li className="item" bxistsubcategory="1" categoryid="10">家具</li> 
	      </ul> 
	      </Scroller>
      </div>
   
    )
  }
}

export default Banner
