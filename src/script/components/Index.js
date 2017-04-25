import React, {Component} from 'react'

import Banner from './details/Banner'
import Footer from './details/Footer'
import BoardList from './details/BoardList'

import Total from './shopcar/Total'
import Head from './common/Head'
import TabBar from './common/TabBar'
class Index extends Component {
  render() {
    return (
      <div className="m-index">
      	<Head />
        {this.props.children}
        <Total />
				<TabBar />
      </div>
    )
  }
}

export default Index
