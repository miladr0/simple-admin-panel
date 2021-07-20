import React from 'react'
import { Link } from 'react-router-dom'
import UserDropDown from '../Dropdown/UserDropDown'
import Dropdown from '../Dropdown'
import ThemeMenu from '../SliderMenu/ThemeMenu'
import notifications from '../../assets/jsonData/notification.json'
import './topnav.css'

const notificationItemRenderer = (item, index) => {
  return (
    <div className='notification-item' key={index}>
      <i className={item.icon}></i>
      <span>{item.content}</span>
    </div>
  )
}

export default function index() {
  return (
    <div className='topnav'>
      <div className='topnav-search'>
        <input type='text' placeholder='Search here...' />
        <i className='bx bxs-search'></i>
      </div>

      <div className='topnav-right'>
        <div className='topnav-right-item'>
          <UserDropDown />
        </div>
        <div className='topnav-right-item'>
          <Dropdown
            icon='bx bxs-bell'
            badge='12'
            contentData={notifications}
            renderItems={notificationItemRenderer}
            renderFooter={() => <Link to='/'>see all</Link>}
          />
        </div>
        <div className='topnav-right-item'>
          <ThemeMenu />
        </div>
        <div className='topnav-right-item'>
          <Link to='/login'>
            <i className='bx bx-log-out-circle logout-icon'></i>
          </Link>
        </div>
      </div>
    </div>
  )
}
