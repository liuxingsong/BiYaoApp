import React, {Component} from 'react'

import Header from './Header'
import Footer from './Footer'
import Title from './Title'
import Banner from './Banner'
import Serve from './Serve'
import Select from './Select'
import Rate from './Rate'
import BoardList from './BoardList'
import Scroller from "../../../component_dev/scroller/src"


class Details extends Component {
  render() {
    return (
      <div className="m-details">
      	<Header />

      	<Scroller ref="scroller" extraClass={'yo-scroller-a'}>
      		<section>
            <Banner />
  	      	<Title />
  		    	<Serve />
  		    	<Select />
  		    	<Rate />
          </section>
	    	</Scroller>

 		  	<Footer />
      </div>
    )
  }
}

export default Details
