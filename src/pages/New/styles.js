import styled from 'styled-components';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.div``;

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
