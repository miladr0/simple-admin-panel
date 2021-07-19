import React from 'react'
import { Link } from 'react-router-dom'
import dashboardCards from '../../assets/jsonData/dashboardCards.json'
import Card from '../../components/Card'
import Chart from './Chart'
import TopUsersBalance from './TopUsersBalance'
import RevenueHistoryTable from './RevenueHistoryTable'

export default function Dashboard() {
  return (
    <div>
      <h2 className='page-header'>Dashboard</h2>
      <div className='row'>
        <div className='col-6'>
          <div className='row'>
            {dashboardCards.map((item, index) => {
              return (
                <div className='col-6' key={index}>
                  <Card
                    icon={item.icon}
                    count={item.count}
                    title={item.title}
                    color={item.color}
                  />
                </div>
              )
            })}
          </div>
        </div>
        <div className='col-6'>
          <div className='card full-height'>
            <Chart />
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='col-6'>
          <div className='card'>
            <div className='card-header'>
              <h3>top 5 users balances</h3>
            </div>
            <div className='card-body'>
              <TopUsersBalance />
            </div>
          </div>
        </div>
        <div className='col-6'>
          <div className='card'>
            <div className='card-header'>
              <h3>Revenue History</h3>
            </div>
            <div className='card-body'>
              <RevenueHistoryTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
