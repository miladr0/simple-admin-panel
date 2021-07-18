import React, { useState, useRef, useEffect } from 'react'
import './theme_menu.css'
import themeStore from '../../stores/themeStore'

const modeSettings = [
  {
    id: 'light',
    name: 'Light',
    background: 'light-background',
    class: 'theme-mode-light',
  },
  {
    id: 'dark',
    name: 'Dark',
    background: 'dark-background',
    class: 'theme-mode-dark',
  },
]

const colorSettings = [
  {
    id: 'blue',
    name: 'Blue',
    background: 'blue-color',
    class: 'theme-color-blue',
  },
  {
    id: 'red',
    name: 'Red',
    background: 'red-color',
    class: 'theme-color-red',
  },
  {
    id: 'cyan',
    name: 'Cyan',
    background: 'cyan-color',
    class: 'theme-color-cyan',
  },
  {
    id: 'green',
    name: 'Green',
    background: 'green-color',
    class: 'theme-color-green',
  },
  {
    id: 'amber',
    name: 'Amber',
    background: 'amber-color',
    class: 'theme-color-orange',
  },
]

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

export default function ThemeMenu() {
  const { setColorTheme, setCurrentTheme } = themeStore()

  const [currentColor, setCurrentColor] = useState('blue')
  const [currentMode, setCurrentMode] = useState('light')
  const menuRef = useRef(null)
  const menuButtonRef = useRef(null)

  outSideListener(menuButtonRef, menuRef)
  const showMenu = () => menuRef.current.classList.add('active')
  const closeMenu = () => menuRef.current.classList.remove('active')

  const setMode = (mode) => {
    setCurrentMode(mode.id)
    localStorage.setItem('themeMode', mode.class)
    setCurrentTheme(mode.class)
  }

  const setColor = (color) => {
    setCurrentColor(color.id)
    localStorage.setItem('colorMode', color.class)
    setColorTheme(color.class)
  }

  useEffect(() => {
    const themeClass = modeSettings.find(
      (m) => m.class === localStorage.getItem('themeMode', 'theme-mode-light')
    )
    const colorClass = colorSettings.find(
      (m) => m.class === localStorage.getItem('colorMode', 'theme-color-blue')
    )

    if (themeClass) setCurrentMode(themeClass.id)

    if (colorClass) setCurrentColor(colorClass.id)
  }, [])

  return (
    <div>
      <button
        ref={menuButtonRef}
        onClick={() => showMenu()}
        className='dropdown-toggle'
      >
        <i className='bx bxs-cog'></i>
      </button>
      <div ref={menuRef} className='theme-menu'>
        <h4>Theme settings</h4>
        <button className='theme-menu-close' onClick={() => closeMenu()}>
          <i className='bx bx-x'></i>
        </button>
        <div className='theme-menu-select'>
          <span>Choose mode</span>
          <ul className='mode-list'>
            {modeSettings.map((item, index) => (
              <li key={index} onClick={() => setMode(item)}>
                <div
                  className={`mode-list-color ${item.background} ${
                    item.id === currentMode ? 'active' : ''
                  }`}
                >
                  <i className='bx bx-check'></i>
                </div>
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className='theme-menu-select'>
          <span>Choose color</span>
          <ul className='mode-list'>
            {colorSettings.map((item, index) => (
              <li key={index} onClick={() => setColor(item)}>
                <div
                  className={`mode-list-color ${item.background} ${
                    item.id === currentColor ? 'active' : ''
                  }`}
                >
                  <i className='bx bx-check'></i>
                </div>
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
