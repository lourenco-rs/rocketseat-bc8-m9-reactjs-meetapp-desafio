import React from 'react';
import { MdEdit, MdDeleteForever } from 'react-icons/md';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { Header, EditButton, CancelButton, Content } from './styles';

export default function Details({ location }) {
  const meetup = location.state ? location.state.meetup : null;

  if (!meetup) {
    history.push('/dashboard');
    return;
  }

  function handleEditMeetup() {
    history.push('/formMeetup', { meetup });
  }

  async function handleCancelMeetup() {
    try {
      await api.delete(`/meetups/${meetup.id}`);

      toast.success('Meetup cancelado com sucesso');
      history.push('/dashboard');
    } catch (err) {
      toast.error(err.response.data.error);
    }
  }

  return (
    <>
      <Header>
        <h1>{meetup.title}</h1>
        <div>
          <EditButton onClick={handleEditMeetup} disabled={meetup.past}>
            <MdEdit />
            Editar
          </EditButton>
          <CancelButton onClick={handleCancelMeetup} disabled={meetup.past}>
            <MdDeleteForever />
            Cancelar
          </CancelButton>
        </div>
      </Header>

      <Content>
        <img src={meetup.banner.url} alt={meetup.title} />
        <p>{meetup.description}</p>
        <div>
          <time>{meetup.dateFormatted}</time>
          <address>{meetup.location}</address>
        </div>
      </Content>
    </>
  );
}
