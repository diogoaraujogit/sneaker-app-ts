import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Checkout from '../pages/Checkout';
import Receipt from '../pages/Receipt';
import Store from '../pages/Store';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/store" />
        </Route>
        <Route exact path="/store" component={Store} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/receipt" component={Receipt} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
