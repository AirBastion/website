import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Enter from './components/Enter'
import Login from './components/Login'
import NotFound from './components/NotFound'

const Routes = (props) => (
  <Router {...props}>
    <Switch>
      <Route exact path='/cause' component={Enter} />
      <Route exact path='/company' component={Enter} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/password-recovery' component={Enter} />
      <Route exact path='/workings' component={Enter} />
      <Route path='/' component={Enter} />
      <Route path='*' component={NotFound} />
    </Switch>
  </Router>
)

export default Routes
