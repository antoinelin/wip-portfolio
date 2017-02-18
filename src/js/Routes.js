import React from 'react'
import { Route, IndexRoute } from 'react-router'

// Pages
import ProjectsPage from './pages/ProjectsPage'
import Layout from './pages/Layout/index'

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={ProjectsPage} />
  </Route>
)
