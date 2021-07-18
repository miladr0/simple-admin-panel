import React from 'react'
import './card.css'

const colors = {
  red: 'light-red',
  green: 'light-green',
  amber: 'light-amber',
  blue: 'light-blue',
}

export default function Card({ icon, count, title, color = 'blue' }) {
  return (
    <div className='status-card'>
      <div className='status-card-icon'>
        <i className={icon}></i>
      </div>
      <div className='status-card-info'>
        <h4 className={`status-card-info-header ${colors[color]}`}>{count}</h4>
        <span className={colors[color]}>{title}</span>
      </div>
    </div>
  )
}
