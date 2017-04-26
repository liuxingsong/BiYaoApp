import React, {Component} from 'react'

import Brand from './Brand'
import Total from './Total'
import Head from './Head'
import Scroller from "../../../component_dev/scroller/src"

console.log(Scroller)

class Shopcar extends Component {
  render() {
    return (
	    <div className="m-shopcar">
        <Head />
		    	<Scroller
		    		ref="scroller"
		    		usePullRefresh={true}
		    		onRefresh={
		    			()=>{console.log(1)}
		    		}
            extraClass='m-shop'
		    	>

			    	<div>
              <Brand />
              <Brand />
              <Brand />
              <Brand />
              <Brand />
              <Brand />
              <Total />
            </div>
		    	</Scroller>
	    </div>
    )
  }
}

export default Shopcar
