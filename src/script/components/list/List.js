import React, {Component} from 'react'

import Banner11 from './Banner11'
import BoardList11 from './BoardList11'
import List1 from './List1'
class List extends Component {
  render() {
    return (
      <div className="m-board11">
        <Banner11 />
        <BoardList11 />
				<List1 uri="/list"/>
      </div>
    )
  }
}

export default List
