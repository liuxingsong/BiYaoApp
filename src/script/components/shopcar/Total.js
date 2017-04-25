import React, {Component} from 'react'

class Total extends Component {
	render() {
		return(		
	  		<div className="m-total">
	  			
  				<h3><i className="yo-ico">&#xe636;</i><span>全选</span></h3>
  				<p>
  					<span>合计:<b>￥3152</b></span>
  					<button>结算</button>
  				</p>
	  		</div>  
	  	
		)
	}
}

export default Total