import React from 'react'
import { Route, IndexRoute } from 'react-router'

// Pages
import Landing from './pages/Landing'
import Layout from './pages/Layout/index'

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Landing} />
  </Route>
)
