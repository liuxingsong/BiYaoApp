import React, {Component} from 'react'

import Brand from './Brand'
import Total from './Total'
import Scroller from "../../../component_dev/scroller/src"
console.log(Scroller)

class Shopcar extends Component {
  render() {
    return (   
	    <div className="m-shopcar">
		    	<Scroller
		    		ref="scroller"
		    		usePullRefresh={true}
		    		onRefresh={
		    			()=>{console.log(1)}
		    		}
		    	>
			    	<Brand />
			    	<Brand />
			    	<Brand />
			    	<Brand />
			    	<Brand />
			    	<Brand />
		    	</Scroller>
	    </div>
    )
  }
}

export default Shopcar
