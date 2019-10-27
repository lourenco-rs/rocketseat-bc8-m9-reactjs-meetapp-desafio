import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

import { Container, LogoutButton } from './styles';

export default function Header() {
  const { profile } = useSelector(state => state.user);

  return (
    <Container>
      <div>
        <Link to="/dashboard">
          <img src={logo} alt="Meetup" />
        </Link>

        <aside>
          <div>
            <strong>{profile.name}</strong>
            <Link to="/profile">Meu perfil</Link>
          </div>
          <LogoutButton onPress={() => {}}>Sair</LogoutButton>
        </aside>
      </div>
    </Container>
  );
}
