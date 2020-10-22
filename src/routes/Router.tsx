import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ForgotPassword, SignIn, SignUp } from '../pages';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/forgot-password" component={ForgotPassword} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
