import React, {Component} from 'react'

import Banner from './Banner'
import BoardList from './BoardList'
import BoardHead from './BoardHead'
import BiYaoSay from './BiYaoSay'
import DayNew from './DayNew'


class Board extends Component {
  render() {
    return (
      <div className="m-board">
        <BoardHead/>
        <Banner />
        <BiYaoSay />
        <DayNew />
        <BoardList />
        <BoardList />
        <BoardList />
      </div>
    )
  }
}

export default Board
