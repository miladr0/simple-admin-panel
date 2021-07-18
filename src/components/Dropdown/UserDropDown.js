import React from 'react'
import { Link } from 'react-router-dom'
import Index from './index'
import userImage from '../../assets/images/user_image.jpeg'
import userMenuProfile from '../../assets/jsonData/userMenuProfile.json'

const currentUser = {
  fullName: 'Milad Ranjbar',
  image: userImage,
}

const renderToggle = (user) => {
  return (
    <div className='topnav-right-user'>
      <div className='topnav-right-user-image'>
        <img src={user.image} alt='' />
      </div>
      <div className='topnav-right-user-name'>{user.fullName}</div>
    </div>
  )
}

const renderMenu = (item, index) => {
  return (
    <Link to='/' key={index}>
      <div className='notification-item'>
        <i className={item.icon}></i>
        <span>{item.content}</span>
      </div>
    </Link>
  )
}

export default function UserDropDown() {
  return (
    <Index
      customToggle={() => renderToggle(currentUser)}
      contentData={userMenuProfile}
      renderItems={(item, index) => renderMenu(item, index)}
    />
  )
}
