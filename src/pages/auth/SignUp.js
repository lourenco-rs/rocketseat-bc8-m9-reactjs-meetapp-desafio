import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@rocketseat/unform';

import { Input, Button } from '~/components';

import logo from '~/assets/logo.svg';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="Meetapp" />

      <Form>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Digite seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <Button type="submit">Criar conta</Button>

        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
