import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import Orders from './pages/Orders'
import Analytics from './pages/Analytics'

export default function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={Dashboard} />
      <Route exact path='/users' component={Users} />
      <Route exact path='/orders' component={Orders} />
      <Route exact path='/analytics' component={Analytics} />
    </Switch>
  )
}
