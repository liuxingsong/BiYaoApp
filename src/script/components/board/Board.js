import React, {Component} from 'react'
import Banner from './Banner'
import BoardHead from './BoardHead'
import BiYaoSay from './BiYaoSay'
import DayNew from './DayNew'
import Scroller from '../../../component_dev/scroller/src'

class Board extends Component {
  render() {
    return (
      <div className="m-board">
<<<<<<< HEAD
        <BoardHead/>
        <Scroller extraClass={'yo-scroller-a'} scrollX={false} scrollY={true}>
=======
        <BoardHead />
        <Scroller extraClass='yo-scroller-a' scrollX={false} scrollY={true}>
>>>>>>> 09dd5a67ec763f54daa546cbe963379207d6c6fd
          <div>
            <Banner />
            <BiYaoSay />
            <DayNew />
<<<<<<< HEAD
            <BoardList/>
=======
>>>>>>> 09dd5a67ec763f54daa546cbe963379207d6c6fd
          </div>
        </Scroller>
      </div>
    )
  }
}

export default Board
