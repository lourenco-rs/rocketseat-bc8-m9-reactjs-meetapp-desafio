import styled from 'styled-components';
import { Form } from '@rocketseat/unform';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const StyledForm = styled(Form)`
  span {
    color: #fb6f91;
    align-self: flex-start;
    font-weight: bold;
    margin: 0 0 12px;
    display: block;
  }
`;

export const Textarea = styled(Input)`
  height: 200px;
  padding-top: 13px;
`;

export const SaveButton = styled(Button)`
  width: 180px;
`;

export const ButtonWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
`;
