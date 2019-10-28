import React from 'react';

import { Input } from '~/components';

import { StyledForm, SaveButton, ButtonWrapper } from './styles';

export default function SignIn() {
  function handleSubmit() {}

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input name="name" placeholder="Nome completo" />
      <Input name="email" type="email" placeholder="Digite seu e-mail" />
      <hr />
      <Input name="password" type="password" placeholder="Senha atual" />
      <Input name="oldPassword" type="password" placeholder="Nova senha" />
      <Input
        name="confirmPassword"
        type="password"
        placeholder="Confirmação de senha"
      />

      <ButtonWrapper>
        <SaveButton type="submit">Salvar perfil</SaveButton>
      </ButtonWrapper>
    </StyledForm>
  );
}
