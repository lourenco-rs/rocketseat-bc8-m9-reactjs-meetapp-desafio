import React from 'react';
import * as yup from 'yup';

import Input from '~/components/Input';
import BannerInput from '~/components/BannerInput';
import ReactDatePicker from '~/components/DatePicker';

import { StyledForm, Textarea, ButtonWrapper, SaveButton } from './styles';

const schema = yup.object().shape({
  banner_id: yup.string().required('Você deve selecionar um banner'),
  title: yup.string().required('O titulo é obrigatório'),
  description: yup.string().required('A descrição é obrigatória'),
  date: yup.date().required('A data é obrigatória'),
  location: yup.string().required('A localização é obrigatória'),
});

export default function New() {
  function handleSubmit(data) {
    console.log(data);
  }
  return (
    <StyledForm onSubmit={handleSubmit} schema={schema}>
      <BannerInput name="banner_id" />
      <Input name="title" placeholder="Título do Meetup" />
      <Textarea name="description" multiline placeholder="Descrição completa" />
      <ReactDatePicker name="date" placeholder="Data do Meetup" />
      <Input name="location" placeholder="Localização" />
      <ButtonWrapper>
        <SaveButton type="submit">Salvar meetup</SaveButton>
      </ButtonWrapper>
    </StyledForm>
  );
}
