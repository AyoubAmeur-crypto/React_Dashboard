import React from 'react'
import moment from 'moment';

import './Layout.css'

function Layout() {
  return (
    <>
    <div className="dashboard">
        <div className="topBaseGradient">
            <div className="gradient-red"></div>
            <div className="gradient-orange"></div>
            <div className="gradient-blue"></div>
        </div>

        <div className="topHeader">
        <span>{moment().format("dddd, Do MMM YYYY")}</span>

        <div className="inputy">
            <input placeholder='Search'/>
            <button><i class="bi bi-search"></i></button>
        </div>

        <div className="profile">
        <i class="bi bi-person-circle"></i>
        <p>User 1</p>

        </div>
    </div>
    </div>

 

    </>
  )
}

export default Layout