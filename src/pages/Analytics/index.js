import React from 'react'
import ProgressCard from '../../components/ProgressCard'

export default function Analytics() {
  return (
    <div>
      <h2 className='page-header'>Analytics</h2>

      <div className='row'>
        <div className='col-3'>
          <ProgressCard color='red' />
        </div>
        <div className='col-3'>
          <ProgressCard color='blue' />
        </div>
        <div className='col-3'>
          <ProgressCard color='yellow' />
        </div>
        <div className='col-3'>
          <ProgressCard color='cyan' />
        </div>
      </div>
    </div>
  )
}
