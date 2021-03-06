import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import SecondSlide from './components/Ico/SecondSlide/index';
import Main from './components/Main';
import Display from './components/ICO/Display/index';

// import Cause from './components/Cause';
// import Company from './components/Company';
// import Workings from './components/Workings';
// import Product from './components/Products';

const Routes = props => (
  <Router {...props}>
    <Switch>
      <Route exact path="/cause" component={Main} />
      <Route exact path="/company" component={Main} />
      <Route exact path="/ico" component={Display} />
      <Route exact path="/workings" component={Main} />
      {/* <Route exact path="/test" component={SecondSlide} /> */}
      <Route path="*" component={Main} />
    </Switch>
  </Router>
);

export default Routes;
