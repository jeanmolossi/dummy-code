import React from 'react';
import firebase from 'firebase/app';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { GlobalStyle } from './assets/styles';
import firebaseConfig from './configs/firebaseConfig';
import AppContextProvider from './contexts';
import { Router } from './routes';
import { persistor, store } from './store';

firebase.initializeApp(firebaseConfig);

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppContextProvider>
            <Router />
            <GlobalStyle />
          </AppContextProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
