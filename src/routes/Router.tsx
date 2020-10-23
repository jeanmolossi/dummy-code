import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ForgotPassword, Home, SignIn, SignUp } from '../pages';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/forgot-password" component={ForgotPassword} />

        <Route path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
