import React, {Component} from 'react'
import Banner from './Banner'
import BoardHead from './BoardHead'
import BiYaoSay from './BiYaoSay'
import DayNew from './DayNew'
import BoardList from './BoardList'
import Scroller from '../../../component_dev/scroller/src'

class Board extends Component {
  render() {
    return (
      <div className="m-board">
        <BoardHead />
        <Scroller extraClass='yo-scroller-a' scrollX={false} scrollY={true}
        ref="scroller"
        usePullRefresh={true}//下拉刷新
        onRefresh={() => {

            this.refs.scroller.stopRefreshing(true); // 这个调用也可以放在异步操作的回调里之后
          }
        }
        useLoadMore={true}//上啦加载
        onLoad={() => {

            this.refs.scroller.stopLoading(true); // 这个调用也可以放在异步操作的回调里之后
          }
        }
        >
          <div>
            <Banner />
            <BiYaoSay />
            <DayNew />
            <BoardList />

          </div>
        </Scroller>
      </div>
    )
  }
}

export default Board
