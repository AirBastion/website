import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Ico from './Ico'
import Enter from './Enter'
import Rates from './Rates'

class App extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path='/cause' component={Enter} />
          <Route exact path='/company' component={Enter} />
          <Route exact path='/ico' component={Ico} />
          <Route exact path='/login' component={Enter} />
          <Route exact path='/password-recovery' component={Enter} />
          <Route exact path='/presentation' component={Rates} />
          <Route exact path='/workings' component={Enter} />
          <Route path='/' component={Enter} />
        </Switch>
      </Router>
    )
  }
}

export default App
