import React, { useRef, useState } from 'react'
import './dropdown.css'

const outSideListener = (contentRef) => {
  document.addEventListener('mousedown', (e) => {
    if (contentRef.current && !contentRef.current.contains(e.target)) {
      contentRef.current.classList.remove('active')
    }
  })
}
export default function Dropdown(props) {
  const contentEl = useRef()
  outSideListener(contentEl)

  const [isMenu, setIsMenu] = useState(false)

  return (
    <div className='dropdown'>
      <button onClick={() => setIsMenu(!isMenu)} className='dropdown-toggle'>
        {props.icon ? <i className={props.icon}></i> : ''}
        {props.badge ? (
          <span className='dropdown-toggle-badge'>{props.badge}</span>
        ) : (
          ''
        )}
        {props.customToggle ? props.customToggle() : ''}
      </button>

      <div
        ref={contentEl}
        className={`dropdown-content ${isMenu ? 'active' : ''}`}
      >
        {props.contentData && props.renderItems
          ? props.contentData.map((item, index) =>
              props.renderItems(item, index)
            )
          : ''}
        {props.renderFooter ? (
          <div className='dropdown-footer'>{props.renderFooter()}</div>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}
