import React, { useRef } from 'react'
import './dropdown.css'

const outSideListener = (buttonRef, contentRef) => {
  document.addEventListener('mousedown', (e) => {
    if (buttonRef.current && buttonRef.current.contains(e.target)) {
      contentRef.current.classList.toggle('active')
    } else {
      if (contentRef.current && !contentRef.current.contains(e.target)) {
        contentRef.current.classList.remove('active')
      }
    }
  })
}
export default function Dropdown(props) {
  const buttonToggleEl = useRef()
  const contentEl = useRef()
  outSideListener(buttonToggleEl, contentEl)

  return (
    <div className='dropdown'>
      <button ref={buttonToggleEl} className='dropdown-toggle'>
        {props.icon ? <i className={props.icon}></i> : ''}
        {props.badge ? (
          <span className='dropdown-toggle-badge'>{props.badge}</span>
        ) : (
          ''
        )}
        {props.customToggle ? props.customToggle() : ''}
      </button>

      <div ref={contentEl} className='dropdown-content'>
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
