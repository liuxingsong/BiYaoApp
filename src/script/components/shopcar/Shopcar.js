import React, {Component} from 'react'

import Brand from './Brand'
import Total from './Total'
import Head from './Head'
import Scroller from "../../../component_dev/scroller/src"


class Shopcar extends Component {
  render() {
    return (   
	    <div className="m-shopcar">
	    		<Head />
		    		<section>
			    	<Brand />
			    	<Brand />
			   		<Brand />
			    	<Brand />
						</section>
		    	<Total />
	    </div>
    )
  }
}

export default Shopcar
