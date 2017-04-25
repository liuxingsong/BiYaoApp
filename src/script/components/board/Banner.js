import React, {Component} from 'react'
import Carousel from '../../../component_dev/carousel/src'

class Banner extends Component {

  render() {
    return (
      <Carousel>
          <li className="item"><img className="img" src="http://bfs.biyao.com/group1/M00/00/16/wKhkVVj91haAIVboAADOdLzuwaU591.jpg" /></li>
          <li className="item"><img className="img" src="http://bfs.biyao.com/group1/M00/00/16/wKhkVVj90_SAUodPAADxkqTWSDo967.jpg" /></li>
          <li className="item"><img className="img" src="http://bfs.biyao.com/group1/M00/00/16/wKhkVFj91ZOAP1-5AAH7UTgaeWw451.jpg" /></li>
      </Carousel>
    )
  }
}
export default Banner
