import styled from 'styled-components';

import CustomButton from '~/components/Button';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;

  h1 {
    font-size: 32px;
    color: #fff;
  }

  div {
    display: flex;
    justify-content: flex-end;
  }
`;

export const EditButton = styled(CustomButton)`
  width: 116px;
  background: #4dbaf9;
`;

export const CancelButton = styled(CustomButton)`
  width: 138px;
  background: #d44059;
  margin-left: 15px;
`;

export const Content = styled.div`
  /* background: yellow; */

  img {
    width: 940px;
    height: 300px;
    margin-bottom: 25px;
  }

  p {
    color: #fff;
  }

  div {
    margin-top: 60px;
    display: flex;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.6);

    time {
      margin-right: 30px;
    }

    address {
      font-style: normal;
    }
  }
`;
