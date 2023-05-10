import React, { useState } from 'react'
// import {useLocation} from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import App from '../App.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Menu = () => {
  const [show,setShow] = useState(false)
  const [about,setAbout] = useState(false)

  const handleDropdown=()=>
  {
    setShow((prevOpen) => !prevOpen)
  }
  const handleAbout=()=>
  {
    setAbout((prevOpen) => !prevOpen)
  }
    
  return (
    <>
    <div style={{overflowY:"scroll",height:580,position:'fixed',width:'20%'}}>
        <ul style={{listStyle:'none',color:'green',fontWeight:'bolder',fontSize:25,margin:'0px -25px'}} className=''>
            <li style={{color:'green',fontWeight:'bolder',fontSize:25}}><NavLink exact  activeClassName="active_class" to='/home' >Home</NavLink></li>
            <li style={{fontWeight:'bolder',fontSize:25}}><NavLink exact  to="/about">About</NavLink></li>
            <li onClick={handleDropdown} className='menu'><DashboardIcon style={{color:'gray'}}/><span style={{color:'green',fontWeight:'bolder',fontSize:25}} >Home</span><span style={{marginLeft:30}}>{show?<><KeyboardArrowDownIcon /></>:<><KeyboardArrowUpIcon/></>}</span> </li>
            <ul style={{display:show?'inherit':'none'}}>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li style={{listStyle:''}} onClick={handleAbout}>About <span style={{marginLeft:30}}>{about?<><KeyboardArrowDownIcon /></>:<><KeyboardArrowUpIcon/></>}</span></li>
            <ul  style={{display:about?'inherit':'none',listStyle:'square'}}>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            </ul>
            </ul>
           
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
        </ul>
    </div>
    </>
  )
}

export default Menu