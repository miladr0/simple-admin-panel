import React from 'react'
import Table from '../../components/Table'
import Badge from '../../components/Badge'

const tableData = {
  header: ['Marketplaces', 'Date', 'Payouts', 'Status', 'Action'],
  body: [
    {
      market: 'Themes Market',
      date: 'Oct 15, 2018',
      price: '$900',
      status: 'Upcoming',
    },
    {
      market: 'Freelance',
      date: 'Oct 15, 2018',
      price: '$900',
      status: 'Paid',
    },
    {
      market: 'Share Holding',
      date: 'Oct 15, 2018',
      price: '$900',
      status: 'Paid',
    },
    {
      market: "Envato's Affiliates",
      date: 'Oct 15, 2018',
      price: '$900',
      status: 'Overdue',
    },
    {
      market: 'Marketing Revenue',
      date: 'Oct 15, 2018',
      price: '$900',
      status: 'Upcoming',
    },
    {
      market: 'Advertise Revenue',
      date: 'Oct 15, 2018',
      price: '$900',
      status: 'Paid',
    },
  ],
}

const orderStatus = {
  Upcoming: '2-warning',
  Paid: '2-success',
  Overdue: '2-danger',
}

const renderHead = (item, index) => {
  return <th key={index}>{item}</th>
}

const renderBody = (item, index) => {
  return (
    <tr key={index}>
      <td>{item.market}</td>
      <td>{item.date}</td>
      <td>{item.price}</td>
      <td>
        <Badge type={orderStatus[item.status]} content={item.status} />
      </td>
      <td>
        <i className='bx bxs-edit-alt item-edit-icon'></i>
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
