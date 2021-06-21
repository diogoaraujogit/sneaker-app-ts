import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Checkout from '../pages/Checkout';
import Store from '../pages/Store';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/store" component={Store} />
        <Route exact path="/checkout" component={Checkout} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
