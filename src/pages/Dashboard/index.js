import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';

import { Header, NewButton, ListItem } from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('meetups');

      const data = response.data.map(meetup => ({
        ...meetup,
        dateFormatted: format(
          parseISO(meetup.date),
          "d 'de' MMMM', às' HH'h'mm",
          {
            locale: pt,
          }
        ),
      }));
      setMeetups(data);
    }
    loadMeetups();
  }, []);

  function handleShowDetails(meetup) {
    history.push('/details', { meetup });
  }

  return (
    <>
      <Header>
        <h1>Meus meetups</h1>
        <NewButton onClick={() => history.push('/new')}>
          <MdAddCircleOutline />
          Novo meetup
        </NewButton>
      </Header>

      <ul>
        {meetups.map(meetup => (
          <ListItem key={meetup.id} onClick={() => handleShowDetails(meetup)}>
            <strong>{meetup.title}</strong>
            <div>
              <time>{meetup.dateFormatted}</time>
              <MdChevronRight />
            </div>
          </ListItem>
        ))}
      </ul>
    </>
  );
}
