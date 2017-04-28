import React, {Component} from 'react'

import Banner from './Banner'
import BoardList from './BoardList'
import List from './List'
class Board extends Component {
  render() {
    return (
      <div className="m-board">
        <Banner />
        <BoardList />
				<List uri="/list"/>
      </div>
    )
  }
}

export default Board
