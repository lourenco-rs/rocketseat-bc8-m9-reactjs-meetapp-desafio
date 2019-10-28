import React from 'react';
import { Form } from '@rocketseat/unform';

import Input from '~/components/Input';
import BannerInput from '~/components/BannerInput';
import ReactDatePicker from '~/components/DatePicker';

import { Textarea, ButtonWrapper, SaveButton } from './styles';

export default function New() {
  function handleSubmit(data) {
    console.log(data);
  }
  return (
    <Form onSubmit={handleSubmit}>
      <BannerInput name="banner_id" />
      <Input name="title" placeholder="Título do Meetup" />
      <Textarea name="description" multiline placeholder="Descrição completa" />
      <ReactDatePicker name="date" placeholder="Data do Meetup" />
      <Input name="location" placeholder="Localização" />
      <ButtonWrapper>
        <SaveButton type="submit">Salvar meetup</SaveButton>
      </ButtonWrapper>
    </Form>
  );
}
