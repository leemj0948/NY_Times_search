import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './Pages/Main/Main';
import DetailPage from './Pages/Main/DetailPage';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/detailpage/:id?" component={DetailPage} />
      </Switch>
    </Router>
  );
};
export default Routes;
