import React, {Component} from 'react'

import Banner from './Banner'
import BoardList from './BoardList'
import BoardHead from './BoardHead'
import BiYaoSay from './BiYaoSay'
import DayNew from './DayNew'
import Scroller from '../../../component_dev/scroller/src'

class Board extends Component {
  render() {
    return (

      <div className="m-board">
        <BoardHead/>
        <Scroller extraClass={'yo-scroller-a'} scrollX={false} scrollY={true}>
          <Banner />
          <BiYaoSay />
          <DayNew />
          <BoardList/>
        </Scroller>
      </div>
    )
  }
}

export default Board
