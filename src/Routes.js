import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import Users from './pages/Users'

export default function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={Dashboard} />
      <Route exact path='/users' component={Users} />
    </Switch>
  )
}
