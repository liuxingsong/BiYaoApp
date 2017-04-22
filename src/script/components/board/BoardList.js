import React, {Component} from 'react'

class BoardList extends Component {
  render() {
    return (
      <div className="m-boardlist">
        <h1>
          <b>正在上映的电影-北京</b>
          <i className="yo-ico">&#xf07f;</i>
        </h1>
        <ul>
          <li>
            <img src="https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2444256500.jpg" alt=""/>
            <b>速度与</b>
          </li>
          <li>
            <img src="https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2444256500.jpg" alt=""/>
            <b>与激情</b>
          </li>
        </ul>
      </div>
    )
  }
}

export default BoardList
