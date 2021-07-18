import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Routes from './Routes'
import Sidebar from './components/sidebar/Sidebar'
import TopNav from './components/TopNav'
import themeStore from './stores/themeStore'

import './app.css'

export default function App() {
  const { currentTheme, currentColor, setCurrentTheme, setColorTheme } =
    themeStore()
  useEffect(() => {
    const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')
    const colorClass = localStorage.getItem('colorMode', 'theme-color-blue')

    setCurrentTheme(themeClass)
    setColorTheme(colorClass)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Router>
      <Route
        render={(props) => (
          <div className={`layout ${currentTheme} ${currentColor}`}>
            <Sidebar {...props} />
            <div className='layout-content'>
              <TopNav />

              <div className='layout-content-main'>
                <Routes />
              </div>
            </div>
          </div>
        )}
      ></Route>
    </Router>
  )
}
