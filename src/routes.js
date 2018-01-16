import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import App from './App';
import NotFound from './components/NotFound';



const Routes = () => (
    <App>
      <Switch>
        <Route exact path="/" component={NotFound}/>
    </Switch>
    </App>
   
  );

export default Routes;

