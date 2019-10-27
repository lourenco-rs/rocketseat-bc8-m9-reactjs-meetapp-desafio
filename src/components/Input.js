import styled from 'styled-components';
import { Input as UnformInput } from '@rocketseat/unform';

const Input = styled(UnformInput)`
  border: none;
  background: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 50px;
  border-radius: 4px;
  font-family: 'Roboto';
  font-size: 18px;
  color: rgba(255, 255, 255, 0.8);
  padding: 0 20px;
  margin-bottom: 10px;

  &::placeholder {
    font-family: 'Roboto';
    font-size: 18px;
    color: rgba(255, 255, 255, 0.5);
  }
`;

export default Input;
