import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';

import { Container, LogoutButton } from './styles';

export default function Header() {
  const dispatch = useDispatch();
  const { profile } = useSelector(state => state.user);

  function handleSignOut() {
    dispatch(signOut());
  }

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
          <LogoutButton onClick={handleSignOut}>Sair</LogoutButton>
        </aside>
      </div>
    </Container>
  );
}
