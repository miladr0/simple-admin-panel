import React from 'react'
import Table from '../../components/Table'
import image2 from '../../assets/images/user-2.jpeg'
import image3 from '../../assets/images/user-3.jpeg'
import image4 from '../../assets/images/user-4.jpeg'
import image5 from '../../assets/images/user-5.jpeg'
import image6 from '../../assets/images/user-6.jpeg'

const tableData = {
  head: ['profile', 'currency', 'balance', 'Reserved in orders', 'view'],
  body: [
    {
      username: 'Tomaslau',
      member: 'Member Since 2017',
      currency: 'BTC',
      balance: '0.00816117 BTC',
      address: '0.00816117',
      image: image2,
    },
    {
      username: 'Erwin E. Brown',
      member: 'Member Since 2017',
      currency: 'ETH',
      balance: '3.16117008 ETH',
      address: '0.00816117',
      image: image3,
    },
    {
      username: 'Margeret V. Ligon',
      member: 'Member Since 2017',
      currency: 'EUR',
      balance: '0.00816117 EUR',
      address: '0.00816117',
      image: image4,
    },
    {
      username: 'Jose D. Delacruz',
      member: 'Member Since 2017',
      currency: 'CNY',
      balance: '0.00816117 CNY',
      address: '0.00816117',
      image: image5,
    },
    {
      username: 'Luke J. Sain',
      member: 'Member Since 2017',
      currency: 'BTC',
      balance: '0.00816117 BTC',
      address: '0.00816117',
      image: image6,
    },
  ],
}

const renderHead = (item, index) => {
  return <th key={index}>{item}</th>
}

const renderBody = (item, index) => {
  return (
    <tr key={index}>
      <td className='item-profile-holder'>
        <img
          className='item-profile-image'
          src={item.image}
          alt={item.username}
        />
        <div className='item-username-with-date'>
          <h6>{item.username}</h6>
          <p>{item.member}</p>
        </div>
      </td>
      <td>{item.currency}</td>
      <td>{item.balance}</td>
      <td>{item.address}</td>
      <td>
        <i className='bx bx-link-external item-edit-icon'></i>
      </td>
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
