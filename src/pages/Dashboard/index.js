import React from 'react';

import api from '~/services/api';

// import { Container } from './styles';

export default function Dashboard() {
  // para teste da requisição autenticada
  api.get('meetups');

  return <h1>Dashboard</h1>;
}
