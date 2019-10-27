import React from 'react';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import { Form } from '@rocketseat/unform';

import { signUpRequest } from '~/store/modules/auth/actions';

import { Input, Button } from '~/components';

import logo from '~/assets/logo.svg';

const schema = yup.object().shape({
  name: yup.string().required('O nome é obrigatório'),
  email: yup
    .string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: yup
    .string()
    .min(6, 'A senha precisa ter no mínimo 6 caracteres')
    .required('A senha é obrigatória'),
});

export default function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} alt="Meetapp" />

      <Form onSubmit={handleSubmit} schema={schema}>
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
