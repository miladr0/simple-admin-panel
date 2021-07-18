import React from 'react'
import Table from '../../components/Table'
import Badge from '../../components/Badge'

const tableData = {
  header: ['order id', 'user', 'total price', 'date', 'status'],
  body: [
    {
      id: '#OD1711',
      user: 'john doe',
      date: '17 Jun 2021',
      price: '$900',
      status: 'shipping',
    },
    {
      id: '#OD1712',
      user: 'frank iva',
      date: '1 Jun 2021',
      price: '$400',
      status: 'paid',
    },
    {
      id: '#OD1713',
      user: 'anthony baker',
      date: '27 Jun 2021',
      price: '$200',
      status: 'pending',
    },
    {
      id: '#OD1712',
      user: 'frank iva',
      date: '1 Jun 2021',
      price: '$400',
      status: 'paid',
    },
    {
      id: '#OD1713',
      user: 'anthony baker',
      date: '27 Jun 2021',
      price: '$200',
      status: 'refund',
    },
  ],
}

const orderStatus = {
  shipping: 'primary',
  pending: 'warning',
  paid: 'success',
  refund: 'danger',
}

const renderHead = (item, index) => {
  return <th key={index}>{item}</th>
}

const renderBody = (item, index) => {
  return (
    <tr key={index}>
      <td>{item.id}</td>
      <td>{item.user}</td>
      <td>{item.price}</td>
      <td>{item.date}</td>
      <td>
        <Badge type={orderStatus[item.status]} content={item.status} />
      </td>
    </tr>
  )
}
export default function LastOrdersTable() {
  return (
    <>
      <Table
        headData={tableData.header}
        bodyData={tableData.body}
        renderHead={renderHead}
        renderBody={renderBody}
      />
    </>
  )
}
