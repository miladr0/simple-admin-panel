import React from 'react'
import Table from '../../components/Table'

const tableData = {
  head: ['users', 'total orders', 'total spending'],
  body: [
    {
      username: 'john doe',
      order: '490',
      price: '$15,870',
    },
    {
      username: 'frank iva',
      order: '250',
      price: '$12,251',
    },
    {
      username: 'anthony baker',
      order: '120',
      price: '$10,840',
    },
    {
      username: 'frank iva',
      order: '110',
      price: '$9,251',
    },
    {
      username: 'anthony baker',
      order: '80',
      price: '$8,840',
    },
  ],
}

const renderHead = (item, index) => {
  return <th key={index}>{item}</th>
}

const renderBody = (item, index) => {
  return (
    <tr key={index}>
      <td>{item.username}</td>
      <td>{item.order}</td>
      <td>{item.price}</td>
    </tr>
  )
}
export default function TopUsersTable() {
  return (
    <>
      <Table
        headData={tableData.head}
        bodyData={tableData.body}
        renderHead={renderHead}
        renderBody={renderBody}
      />
    </>
  )
}
