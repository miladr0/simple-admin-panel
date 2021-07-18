import React from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'
import menuItems from '../../assets/jsonData/sidebarMenuData.json'
import LogoImage from '../../assets/images/user_image.jpeg'

const SidebarItem = ({ active, icon, title }) => {
  const activeClass = active ? 'active' : ''

  return (
    <div className='sidebar-item'>
      <div className={`sidebar-item-inner ${activeClass}`}>
        <i className={icon} />
        <span>{title}</span>
      </div>
    </div>
  )
}

export default function Sidebar({ location }) {
  const isActive = menuItems.findIndex(
    (item) => item.path === location.pathname
  )
  return (
    <div className='sidebar'>
      <div className='sidebar-logo'>
        <img src={LogoImage} alt='admin user' />
      </div>

      {menuItems.map((item, index) => (
        <Link to={item.path} key={index}>
          <SidebarItem
            title={item.title}
            icon={item.icon}
            active={index === isActive}
          />
        </Link>
      ))}
    </div>
  )
}
