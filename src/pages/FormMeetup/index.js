import React from 'react';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import Input from '~/components/Input';
import BannerInput from '~/components/BannerInput';
import ReactDatePicker from '~/components/DatePicker';

import history from '~/services/history';
import api from '~/services/api';

import { StyledForm, Textarea, ButtonWrapper, SaveButton } from './styles';

const schema = yup.object().shape({
  banner_id: yup.string().required('Você deve selecionar um banner'),
  title: yup.string().required('O titulo é obrigatório'),
  description: yup.string().required('A descrição é obrigatória'),
  date: yup.date().required('A data é obrigatória'),
  location: yup.string().required('A localização é obrigatória'),
});

export default function New({ location }) {
  // const meetup = location.state ? location.state.meetup : null;

  console.tron.log('new - location.state', location.state);

  async function handleSubmit(data) {
    try {
      let response = null;

      if (location.state) {
        const { id } = location.state.meetup;
        response = await api.put(`meetups/${id}`, data);
      } else {
        response = await api.post('meetups', data);
      }

      toast.success('Meetup salvo com sucesso');
      history.push('/dashboard');
    } catch (error) {
      toast.error(
        error.response
          ? error.response.data.error
          : 'Houve um erro ao salvar o meetup, verfique os dados informados'
      );
    }
  }

  return (
    <StyledForm
      onSubmit={handleSubmit}
      schema={schema}
      initialData={location.state ? location.state.meetup : null}
    >
      <BannerInput name="banner_id" />
      <Input name="title" placeholder="Título do Meetup" />
      <Textarea name="description" multiline placeholder="Descrição completa" />
      <ReactDatePicker
        name="date"
        placeholder="Data do Meetup"
        selectedDate={location.state && location.state.meetup.date}
      />
      <Input name="location" placeholder="Localização" />
      <ButtonWrapper>
        <SaveButton type="submit">Salvar meetup</SaveButton>
      </ButtonWrapper>
    </StyledForm>
  );
}
