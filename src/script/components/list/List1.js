import React, {Component} from 'react'

import Loading, {loading} from '../../../component_dev/loading/src'
import List from '../../../component_dev/list/src'


class List1 extends Component {
	 constructor(props) {
    	super(props)
    	this.state = {
      	title: '',
      	list1:[]
    	}
  	}
	getList1(aaa){
		if(aaa!=undefined){
			return aaa.map((value,index)=>{
				return(
	      			<a className="c_product_link">  
		      			<div className="imgBox">
		      				<img className="indexpic" src={value.imageUrl}/>
		      			</div>
		      			<div className="tit inaline">{value.title}</div>
		      			<div className="price">{value.price}</div>
	      			</a>
				)
			})
		}
	}
 

 
  render() {
  	console.log(this.state.list1.item)
	    return (
	  	<div className="m-list">
	      	<div className="c_product_info">
	      		<div className="c_product_tit">
		      		<span>
			      		<div className="c_p_bg1">
			      		</div>
			      		<div>{this.state.list1.categoryName}</div>
			      		<div className="c_p_bg2">
			      		</div>
		      		</span>
	      		</div>
	      	</div>
	      	<div className="c_product_list">
	    	    {this.getList1(this.state.list1.item)}
	      	</div>
	  	</div>
	    )
   }
  
   componentDidMount() {
    let domain ="http://localhost:7001"
    fetch(domain+this.props.uri)
      .then((response)=>response.json())
      .then((res)=>{
        this.setState({
          title: res.title,
          list1: res.data.productList[0]
        })
        loading.hide()
      })
  }
}



export default List1
