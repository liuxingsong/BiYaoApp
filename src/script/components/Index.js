import React, {Component} from 'react'

import BoardList from './details/BoardList'


import TabBar from './common/TabBar'
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
