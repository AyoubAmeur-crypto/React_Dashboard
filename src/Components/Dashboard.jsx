import React from 'react'
import './dashboard.css'
import {cardsData,groupNumber ,ordersData} from './index.js'
import ReactECharts from 'echarts-for-react';

import * as echarts from 'echarts';
import logo from './Logos/LOGO.png';


function Dashboard() {
  const option1 = {
    tooltip: {
      trigger: 'item'
    },
    color: [ new echarts.graphic.LinearGradient(0,0,0,1,[{

      offset:0,
      color : "rgb(255,191,0)",
    },{

      offset:1,
      color:"#F450D3"
    }],
  ),

  new echarts.graphic.LinearGradient(0,0,0,1,[{

    offset:0,
    color : "rgb(52, 174, 255)",
  },{

    offset:1,
    color:"#F450D3"
  }],
),

new echarts.graphic.LinearGradient(0,0,0,1,[{

  offset:0,
  color : "rgb(57, 255, 136)",
},{

  offset:1,
  color:"#F450D3"
}],
),

new echarts.graphic.LinearGradient(0,0,0,1,[{

  offset:0,
  color : "rgb(255, 53, 113)",
},{

  offset:1,
  color:"#F450D3"
}],
)


],
  
    series: [
      {
        name: 'Item',
        type: 'pie',
        radius: ['60%', '80%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 0,
          borderColor: 'black',
          borderWidth: 1.5
        },
        label: {
             
          show:false ,
          position: "center",


        },
       
      
       
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ]
      }
    ]
  };
  const option = {
    toolbox : {
          
      feature: {

        saveAsImage :{},
      },
      
    },
    tooltip : {
           
      trriger:"axis",
      axisPointer: {

        type:"cross"
      },
      backgroundColor :"rgba(0,0,0,0.59)",
      borderWidth:0,
        
    },

    xAxis: {
      type: 'category',
      boundaryGap:false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value',
      
      splitLine : {

        show:false
      }
    },
    series: [
      {
        data: [28020, 19432, 17301, 29434, 17790, 19430, 28420],
        type: 'line',
        lineStyle:{
          color: new echarts.graphic.LinearGradient(0,0,0,1,[{

            offset:0,
            color : "rgb(255,191,0)",
          },{

            offset:1,
            color:"#F450D3"
          }],
        ),
        width:4
        },
        areaStyle: {

           opacity:.5,
           color: new echarts.graphic.LinearGradient(0,0,0,0.8,[{

            offset:0,
            color : "#FE4C00",
          },{

            offset:1,
            color:"rgb(255, 144, 70,0.1)"
          }],
        ),

        },
        showSymbol:false,
        smooth: true
      }
    ]
  };
  return (
<>
  <div className="containerBoardy">
    <div className="leftDash ">

  <div className="topDashboard theme-container">
  <div className="title">
        <h2>Dashboard</h2>
        <select>
          <option>1 week</option>
          <option>1 month</option>
          <option>3 months</option>
        </select>
      </div>
      <div className="cards">
        {cardsData.map((card,index)=> 
        <div className='card'>
          <div className="cardTitle">
          <p>{card.title}</p>
          <p className='averrage'>%{card.change}</p>
          </div>
           <p className='price'>${groupNumber(card.amount)}</p>


        </div>
      
      
      )}
      </div>
  </div>
      
      
      <div className="statistics theme-container">
        <h2>Overview Statistics</h2>
        <div className="details grey-container">
          <div className="first">
          <i class="bi bi-arrow-up"></i>
           <div className="detaily">
            <p>Top Item This Month</p>
            <h3>Office Comps</h3>
           </div>
          </div>
          <div className="second">
            <p>Items</p>
            <h3>455</h3>
          </div>
          <div className="third">
            <p>Profit</p>
            <h3>${groupNumber(370000)}</h3>
          </div>
          <div className="fourth">
          <p>Profit</p>
          <h3>${groupNumber(2000)}</h3>
          </div>
        </div>
        <div className="chart">
        <ReactECharts option={option}></ReactECharts>
        </div>
        

        
      </div>




    </div>

    <div className="orders theme-container-md">

       <div className="orderTtile">
        <a href=""><img src={logo} alt="logo Image" /></a>
        <h4>Today Orders</h4>
       </div>
       <div className="amount grey-container-md">
         <h4>Amount</h4>
         <h2>${groupNumber(4560)}</h2>

       </div>
       <div className="orders">
        {ordersData.map((order,index)=><div className='ordery'>
          <div className="firstRowy">
          <p className='orderyName'>{order.name}</p>
          <p className='averrage-md'>${order.change}</p>
          </div>
        
          <div className="secondRowy">
          <p>{order.type}</p>
          <p>items : {order.items}</p>
          
          
          </div>
          
        </div>)}

       </div>
       <div className="splitChart">
        <h3>Split By Order</h3>
        
        <ReactECharts option={option1} className="circleChart"  ></ReactECharts>
       
        
       </div>

    </div>
  </div>
</>
   
  )
}

export default Dashboard