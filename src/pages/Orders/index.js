import React from 'react'
import { Link } from 'react-router-dom'
import TopUsersTable from './TopUsersTable'
import LastOrdersTable from './LastOrdersTable'

export default function Dashboard() {
  return (
    <div>
      <h2 className='page-header'>Orders</h2>

      <div className='row'>
        <div className='col-5'>
          <div className='card'>
            <div className='card-header'>
              <h3>top users</h3>
            </div>
            <div className='card-body'>
              <TopUsersTable />
            </div>
            <div className='card-footer'>
              <Link to='/'>view all </Link>
            </div>
          </div>
        </div>

        <div className='col-7'>
          <div className='card'>
            <div className='card-header'>
              <h3>top orders</h3>
            </div>
            <div className='card-body'>
              <LastOrdersTable />
            </div>
            <div className='card-footer'>
              <Link to='/'>view all</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
