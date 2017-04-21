import React, {Component} from 'react'

import Banner from './Banner'
import BoardList from './BoardList'

class Board extends Component {
  render() {
    return (
      <div className="m-board">
        <Banner />
        <BoardList />
        <BoardList />
        <BoardList />
      </div>
    )
  }
}

export default Board
