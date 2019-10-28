import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 10px;

  label {
    cursor: pointer;
    transition: background 0.9s;

    &:hover {
      opacity: 0.7;
    }

    img {
      height: 300px;
      width: 940px;
      border-radius: 4px;
      /* transition: background 0.9s; */
      background: rgba(0, 0, 0, 0.2);
    }

    input {
      display: none;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      height: 300px;
      width: 940px;
      border-radius: 4px;
      background: rgba(0, 0, 0, 0.4);

      svg {
        height: 54px;
        width: 54px;
        color: rgba(255, 255, 255, 0.3);
      }

      strong {
        margin-top: 10px;
        color: rgba(255, 255, 255, 0.3);
      }
    }
  }
`;
