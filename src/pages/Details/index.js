import React from 'react';
import { MdEdit, MdDeleteForever } from 'react-icons/md';

import { Header, EditButton, CancelButton, Content } from './styles';

export default function Details({ location }) {
  const { meetup } = location.state;

  function handleEditClick() {}

  function handleCancelClick() {}

  return (
    <>
      <Header>
        <h1>Meus meetups</h1>
        <div>
          <EditButton onClick={handleEditClick}>
            <MdEdit />
            Editar
          </EditButton>
          <CancelButton onClick={handleCancelClick}>
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
