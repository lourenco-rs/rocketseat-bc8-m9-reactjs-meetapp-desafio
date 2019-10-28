import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Button = styled.button.attrs(
  ({ type, isLoading, isDisabled }) => ({
    type: type || 'button',
    disabled: isDisabled || !!isLoading,
  })
)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  border: none;
  background: ${props => props.color};
  background: #f94d6a;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  border-radius: 4px;

  &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  svg {
    margin-right: 10px;
  }

  ${props =>
    props.isLoading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;
