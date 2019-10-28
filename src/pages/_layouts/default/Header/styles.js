import styled from 'styled-components';
import { darken } from 'polished';

import CustomButton from '~/components/Button';

export const Container = styled.div`
  height: 92px;
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  margin-bottom: 50px;

  & > div {
    max-width: 940px;
    margin: 0 auto;

    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      width: 31px;
      height: 32px;
    }

    aside {
      display: flex;
      align-items: center;

      div {
        text-align: right;
        margin-right: 30px;

        strong {
          display: block;
          color: #fff;
          font-size: 14px;
        }

        a {
          display: block;
          margin-top: 3px;
          font-size: 14px;
          color: #999;
        }
      }
    }
  }
`;

export const LogoutButton = styled(CustomButton)`
  width: 71px;
  background: #d44059;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.03, '#d44059')};
  }
`;
