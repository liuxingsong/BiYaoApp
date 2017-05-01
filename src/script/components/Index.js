import React, {Component} from 'react'

import Banner11 from './list/Banner11'
import TabBar from './common/TabBar'
import BoardList11 from './list/BoardList11'

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
