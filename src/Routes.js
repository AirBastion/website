import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Main from './components/Main';
import Display from './components/ICO/Display';

// import Cause from './components/Cause';
// import Company from './components/Company';
// import Workings from './components/Workings';
// import Product from './components/Products';

// Testing specifi routes
import FirstSlide from './components/ICO/FirstSlide';
import SecondSlide from './components/ICO/SecondSlide';
import ThirdSlide from './components/ICO/ThirdSlide';
import FourthSlide from './components/ICO/FourthSlide';


const Routes = (props) => (
  <Router {...props}>
    <Switch>
      <Route exact path='/cause' component={Main} />
      <Route exact path='/company' component={Main} />
      <Route exact path='/ico' component={Display} />
      <Route exact path='/workings' component={Main} />
      <Route path='*' component={Main} />
    </Switch>
  </Router>
)

export default Routes;
