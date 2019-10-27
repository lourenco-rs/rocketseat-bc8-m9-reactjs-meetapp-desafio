import React from 'react';
import { Router } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Routes from './routes';
import history from './config/history';

function App() {
  return (
    <Router history={history}>
      <Routes />
      <GlobalStyle />
    </Router>
  );
}

export default App;
