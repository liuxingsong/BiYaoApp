import React, {Component} from 'react'

import Scroller from '../../../component_dev/scroller/src'
class BoardList extends Component {
  render() {
    return (
    	   
      <div className="subCategoryBox">
      	<div className="classify_show1 none" id="chotPro0">
      		<ul className="sub_classify_list" id="citemBox0"></ul>    			     	
      	</div>
      	<div className="classify_show1 none" id="chotPro1">
      		<ul className="sub_classify_list" id="citemBox1">
      			<li className="item1 checked" categoryid="2">男装</li>
      			<li className="item1 " categoryid="8">女装</li>
      			<li className="item1 " categoryid="108">内衣袜子</li>
      			<li className="item1 " categoryid="158">配饰</li>
      		</ul>
      	</div>
      		<div className="classify_show1 none" id="chotPro2" >
	      	<ul className="sub_classify_list" id="citemBox2" >
		      	<li className="item1 checked" categoryid="129">母婴</li>
		      	<li className="item1 " categoryid="130">儿童</li>
		      	<li className="item1 " categoryid="219">童鞋</li>
		      	<li className="item1 " categoryid="135">包</li>
		      	<li className="item1 " categoryid="175">单车</li>
		      	<li className="item1 " categoryid="169">亲子</li>
	      	</ul>
	      </div>
	      <div className="classify_show1 none" id="chotPro3" >
		      <ul className="sub_classify_list" id="citemBox3" >
			      <li className="item1 checked" categoryid="37">男鞋</li>
			      <li className="item1 " categoryid="38">女鞋</li>
		      </ul>
	      </div>
	      <div className="classify_show1 none" id="chotPro4" >
		      <ul className="sub_classify_list" id="citemBox4" >
			      <li className="item1 checked" categoryid="191">运动服</li>
			      <li className="item1 " categoryid="40">运动鞋</li>
			      <li className="item1 " categoryid="228">运动袜</li>
			      <li className="item1 " categoryid="216">体育用品</li>
		      </ul>
	      </div>
	      <div className="classify_show1 none" id="chotPro5" >
		      <ul className="sub_classify_list" id="citemBox5" >
			      <li className="item1 checked" categoryid="209">女包</li>
			      <li className="item1 " categoryid="154">男包</li>
			      <li className="item1 " categoryid="155">皮带</li>
		      </ul>
	      </div>
	      <div className="classify_show1 none" id="chotPro6" >
		      <ul className="sub_classify_list" id="citemBox6" >
		      </ul>
	      </div>
	      <div className="classify_show1 none" id="chotPro7" >
		      <ul className="sub_classify_list" id="citemBox7">
			      <li className="item1 checked" categoryid="47">休闲包</li>
			      <li className="item1 " categoryid="44">拉杆箱</li>
			      <li className="item1 " categoryid="151">收纳</li>
			      <li className="item1 " categoryid="177">口罩</li>
		      </ul>
	      </div>
	      <div className="classify_show1 none" id="chotPro8" >
		      <ul className="sub_classify_list" id="citemBox8">
		      </ul>
	      </div>
	      <div className="classify_show1 none" id="chotPro9" >
		      <ul className="sub_classify_list" id="citemBox9" >
			      <li className="item1 checked" categoryid="120">护肤</li>
			      <li className="item1 " categoryid="214">彩妆</li>
			      <li className="item1 " categoryid="181">洗护</li>
		      </ul>
	      </div>
	      <div className="classify_show1 none" id="chotPro10" >
		      <ul className="sub_classify_list" id="citemBox10" >
			      <li className="item1 checked" categoryid="60">床品</li>
			      <li className="item1 " categoryid="90">洗浴</li>
			      <li className="item1 " categoryid="104">日用</li>
			      <li className="item1 " categoryid="205">布艺</li>
			      <li className="item1 " categoryid="237">装饰画</li>
		      </ul>
	      </div>
	      <div className="classify_show1 " id="chotPro11" >
	      	<Scroller
					    scrollX={true}
					    scrollY={false}
					>
		      <ul className="sub_classify_list " id="citemBox11" >
			      <li className="item1 checked" categoryid="187">水具</li>
			      <li className="item1 " categoryid="231">小家电</li>
			      <li className="item1 " categoryid="185">刀具</li>
			      <li className="item1 " categoryid="186">锅具</li>
			      <li className="item1 " categoryid="195">餐具</li>
			      <li className="item1 " categoryid="52">厨用小件</li>	      
		      </ul>
		       </Scroller>
	      </div>
	      <div className="classify_show1 none" id="chotPro12" >
	      	<Scroller
					    scrollX={true}
					    scrollY={false}
					>
		      <ul className="sub_classify_list" id="citemBox12" >
			      <li className="item1 checked" categoryid="11">工具</li>
			      <li className="item1 " categoryid="12">灯具</li>
			      <li className="item1 " categoryid="164">卫浴</li>
			      <li className="item1 " categoryid="14">卧室</li>
			      <li className="item1 " categoryid="15">书房</li>
			      <li className="item1 " categoryid="13">客厅</li>
			      <li className="item1 " categoryid="16">餐厅</li>
			      <li className="item1 " categoryid="234">儿童家具</li>
		      </ul>
		      </Scroller>
	      </div>
      </div>
    )
  }
}

export default BoardList
