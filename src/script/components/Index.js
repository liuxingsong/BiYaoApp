import React, {Component} from 'react'

import Board from './board/Board'
import TabBar from './common/TabBar'
import Details from './details/Details'
import Shopcar from './shopcar/Shopcar'


class Index extends Component {
  render() {
    return (
      <div className="m-index">
      
        {this.props.children}
				<TabBar />
      </div>
    )
  }
}

export default Index
