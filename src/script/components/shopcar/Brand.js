import React, {Component} from 'react'

import Brandname from './Brandname'
import Carlist from './Carlist'

class Brand extends Component {
	render() {
		return(
		<div className="m-brand">
	  		<Brandname />
	  		<Carlist />
	    </div>

		)
	}
}

export default Brand