import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 10px;

  label {
    cursor: pointer;

    img {
      height: 300px;
      width: 940px;
      border-radius: 4px;
    }

    div {
      height: 300px;
      width: 940px;
      border-radius: 4px;
      background: rgba(0, 0, 0, 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

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

    input {
      display: none;
    }
  }
`;
