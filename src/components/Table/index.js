import React, { useState } from 'react'
import './table.css'

export default function Table({
  headData,
  renderHead,
  bodyData,
  renderBody,
  limit,
}) {
  const initDataShow =
    limit && bodyData ? bodyData.slice(0, Number(limit)) : bodyData
  const [dataShow, setDataShow] = useState(initDataShow)
  const [currentPage, setCurrentPage] = useState(0)

  let pages = 1
  let range = []

  if (limit) {
    const page = Math.floor(bodyData.length / Number(limit))
    pages = bodyData.length % Number(limit) === 0 ? page : page + 1
    range = [...Array(pages).keys()]
  }

  const selectPage = (page) => {
    const start = Number(limit) * page
    const end = start + Number(limit)

    setDataShow(bodyData.slice(start, end))
    setCurrentPage(page)
  }

  return (
    <>
      <div className='table-wrapper'>
        <table>
          {headData && renderHead ? (
            <thead>
              <tr>{headData.map((item, index) => renderHead(item, index))}</tr>
            </thead>
          ) : null}
          <tbody>
            {bodyData && renderBody
              ? dataShow.map((item, index) => renderBody(item, index))
              : null}
          </tbody>
        </table>
      </div>
      {pages > 1 ? (
        <div className='table-pagination'>
          {range.map((item, index) => (
            <div
              className={`table-pagination-item ${
                currentPage === index ? 'active' : ''
              }`}
              key={index}
              onClick={() => selectPage(index)}
            >
              {item + 1}
            </div>
          ))}
        </div>
      ) : (
        ''
      )}
    </>
  )
}
