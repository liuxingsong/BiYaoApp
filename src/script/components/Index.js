import React, {Component} from 'react'

import Banner from './board/Banner'
import BoardHead from './board/BoardHead'

import TabBar from './common/TabBar'
import BoardList from './board/BoardList'

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
