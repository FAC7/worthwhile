import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App.js'
import Home from './components/Home/index.js'
import Candidate from './components/Candidate/index.js'
import Host from './components/Host/index.js'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='/candidate' component={Candidate} />
    <Route path='/host' component={Host} />
  </Route>
)
