import styled from 'styled-components';
import { Form } from '@rocketseat/unform';

import Button from '~/components/Button';

export const StyledForm = styled(Form)`
  span {
    color: #fb6f91;
    align-self: flex-start;
    font-weight: bold;
    margin: 0 0 12px;
    display: block;
  }

  hr {
    border: 0;
    height: 1px;
    background: rgba(255, 255, 255, 0.1);
    margin: 10px 0 20px;
  }
`;

export const SaveButton = styled(Button)`
  width: 162px;
`;

export const ButtonWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
`;
