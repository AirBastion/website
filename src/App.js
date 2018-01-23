import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Ico from './Ico'
import Enter from './Enter'

class App extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route path='/' component={Enter} />
          <Route path='/ico' component={Ico} />
        </Switch>
      </Router>
    )
  }
}

export default App
