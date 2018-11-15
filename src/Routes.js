import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from './components/Main';
import Display from './components/Ico/Display/index';

// import Cause from './components/Cause';
// import Company from './components/Company';
// import Workings from './components/Workings';
// import Product from './components/Products';

// Testing specific routes
import FirstSlide from './components/Ico/FirstSlide';
import SecondSlide from './components/Ico/SecondSlide';
import ThirdSlide from './components/Ico/ThirdSlide';
import FourthSlide from './components/Ico/FourthSlide';

const Routes = props => (
  <Router {...props}>
    <Switch>
      <Route exact path="/cause" component={Main} />
      <Route exact path="/company" component={Main} />
      {/* <Route exact path="/ico" component={Display} /> */}
      <Route exact path="/ico" component={FirstSlide} />
      <Route exact path="/workings" component={Main} />
      <Route path="*" component={Main} />
    </Switch>
  </Router>
);

export default Routes;
