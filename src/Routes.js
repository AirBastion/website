import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Enter from './components/Enter'
// import NotFound from './components/NotFound'
import BoxesSlide from './components/ico';
import CarouselPage from './components/Carousel';
import ModalLauncher from './components/ModalLauncher'
import ContinuousToken from './components/ContinuousToken';

const Routes = (props) => (
  <Router {...props}>
    <Switch>
      <Route exact path='/cause' component={Enter} />
      <Route exact path='/company' component={Enter} />
      <Route exact path='/ico' component={BoxesSlide} />
      <Route exact path='/charts' component={ContinuousToken} />
      <Route exact path='/workings' component={Enter} />
      <Route exact path='/testing' component={ModalLauncher} />
      <Route path='/' component={Enter} />
      {/* <Route path='*' component={NotFound} /> */}
    </Switch>
  </Router>
)

export default Routes;
