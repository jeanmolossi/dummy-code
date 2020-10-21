import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          component={() => (
            <div>
              <h1>Initial Route</h1>
            </div>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
