import React from 'react'

import usersData from '../../assets/jsonData/users.json'
import Table from '../../components/Table'

const tableData = {
  header: [
    '',
    'name',
    'email',
    'phone',
    'total orders',
    'total spend',
    'location',
  ],
  body: usersData,
}

const renderHead = (item, index) => {
  return <th key={index}>{item}</th>
}

const renderBody = (item, index) => {
  return (
    <tr key={index}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.phone}</td>
      <td>{item.total_orders}</td>
      <td>{item.total_spend}</td>
      <td>{item.location}</td>
    </tr>
  )
}
export default function UsersTable() {
  return (
    <>
      <Table
        limit='10'
        headData={tableData.header}
        bodyData={tableData.body}
        renderHead={renderHead}
        renderBody={renderBody}
      />
    </>
  )
}
