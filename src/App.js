import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig';

import GlobalStyle from './styles/global';
import Routes from './routes';
import history from './services/history';

import { store, persistor } from './store';

function App() {
  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <Router history={history}>
          <Routes />
          <GlobalStyle />
          <ToastContainer autoClose={3000} />
        </Router>
      </Provider>
    </PersistGate>
  );
}

export default App;
