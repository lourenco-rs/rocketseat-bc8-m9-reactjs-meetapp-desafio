import styled from 'styled-components';

import CustomButton from '~/components/Button';

export const Container = styled.div``;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;

  h1 {
    font-size: 32px;
    color: #fff;
  }
`;

export const NewButton = styled(CustomButton)`
  width: 172px;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 62px;
  background: rgba(0, 0, 0, 0.1);
  padding: 0 20px 0 30px;
  margin-bottom: 10px;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;

  div {
    display: flex;
    align-items: center;

    time {
      color: rgba(255, 255, 255, 0.6);
    }

    svg {
      width: 24px;
      height: 24px;
      margin-left: 10px;
    }
  }
`;
