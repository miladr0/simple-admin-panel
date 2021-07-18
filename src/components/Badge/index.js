import React from 'react'
import './badge.css'

export default function Badge({ type, content }) {
  return <span className={`badge badge-${type}`}>{content}</span>
}
