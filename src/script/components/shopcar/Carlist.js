import React, {Component} from 'react'
import {Link} from 'react-router'

class Carlist extends Component {
	render() {
		return(  		  
	  		<div className="carlist">
	  			<dl>
    				<dt>
    					<i className="yo-ico">&#xe636;</i>
  						<li><img src="https://img.biyao.com/files/data0/product/2017/04/19/17/0/2523307119176962_400.jpg"/></li>
    				</dt>
					<dd>
						<h3>纯棉珠地净色纯棉珠地净色纯棉珠地净色纯棉珠地净色纯棉珠地净色</h3>	
						<span>白色,  XXL</span>
						<p><i>￥189</i>x1</p>
					</dd>
	  			</dl>
	  		</div>
		)
	}
}

export default Carlist