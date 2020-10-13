import {BrowserRouter, Route, Switch} from 'react-router-dom';
import React from 'react';
import Landing from './pages/Landing';
import OrphanagesMaps from './pages/OrphanagesMaps';

function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Landing} exact/>
        <Route path="/app" component={OrphanagesMaps} />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;

