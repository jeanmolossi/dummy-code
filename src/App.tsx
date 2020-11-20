import React from 'react';
import { Provider } from 'react-redux';
import { GlobalStyle } from './assets/styles';
import { Router } from './routes';
import store from './store';

import './repositories';

const App = () => {
  return (
    <Provider store={store}>
      <Router />
      <GlobalStyle />
    </Provider>
  );
};

export default App;
