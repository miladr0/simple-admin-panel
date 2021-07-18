import React from 'react'
import UsersTable from './UsersTable'

export default function Users() {
  return (
    <div>
      <h2 className='page-header'>Users</h2>
      <div className='row'>
        <div className='col-12'>
          <div className='card'>
            <card className='body'>
              <UsersTable />
            </card>
          </div>
        </div>
      </div>
    </div>
  )
}
