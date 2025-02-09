import React from 'react'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'
import logo from './Logos/LOGO.png'

function Sidebar() {
  return (
    <div className="SideBar">

      <a href=""><img src={logo} alt="logo Image" /></a>

    <NavLink to='/'><i class="bi bi-bar-chart-fill"></i></NavLink>
    <NavLink to='/Calendar'><i class="bi bi-calendar-event-fill"></i></NavLink>
    <NavLink to='/Task'><i class="bi bi-list-task"></i></NavLink>
    <NavLink to='/Table'><i class="bi bi-table"></i></NavLink>
    </div>
       
       
    
 
  )
}

export default Sidebar