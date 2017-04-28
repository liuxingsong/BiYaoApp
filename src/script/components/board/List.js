import React, {Component} from 'react'

import Loading, {loading} from '../../../component_dev/loading/src'
//import List from '../../../component_dev/list/src'


class List extends Component {
	 constructor(props) {
    super(props)
    this.state = {
      title: '',
      list: [],
      
    }
  }
getList(list){
	return list.map((value,index)=>{
		return(
		
      		 	<a 	className="c_product_link">  
      		 	
	      		<div className="imgBox">
	      			<img className="indexpic" src={value.images.imageUrl}/>
	      		</div>
	      		<div className="tit inaline">{value.title}</div>
	      		<div className="price">{value.price}</div>
      		</a>
   
		)
	})
}
 

 
  render() {
    return (
  	<div className="m-list">
      	<div className="c_product_info">
      		<div className="c_product_tit">
	      		<span>{this.state.categoryName}
		      		<div className="c_p_bg1">
		      		</div>
		      		<div className="c_p_bg2">
		      		</div>
	      		</span>
      		</div>
      	</div>
      	<div className="c_product_list">
      	   {this.getList(this.state.list)}       
      	</div>
  	</div>
   
    )
  }
  
   componentDidMount() {
    let domain ="http://localhost:7001"
    fetch(domain+this.props.uri)
      .then((response)=>response.json())
      .then((res)=>{
      	console.log(res)
        this.setState({
          title: res.title,
          list: res.data.productList
        })
        loading.hide()
      })
  }
}



export default List
