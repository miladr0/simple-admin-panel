import React from 'react'
import './progress_card.css'

const colors = {
  red: 'red-color',
  blue: 'blue-color',
  cyan: 'cyan-color',
  yellow: 'yellow-color',
}

const bgColors = {
  red: 'transparent-red-color',
  blue: 'transparent-blue-color',
  cyan: 'transparent-cyan-color',
  yellow: 'transparent-yellow-color',
}

export default function ProgressCard({ color = 'red' }) {
  return (
    <div className='card-container'>
      <div className='card-body'>
        <span className={`card-body-icon ${colors[color]}`}>
          <i className='bx bxs-heart' />
        </span>
        <div className='card-body-data'>
          <h6>Text</h6>
          <p>Num / ber</p>
        </div>
      </div>
      <div className={`progress-container ${bgColors[color]}`}>
        <div className={`progress-bar ${colors[color]}`}></div>
      </div>
    </div>
  )
}
