import styled, { css } from 'styled-components';

const ButtonStyleCountdown = css`
  width: 100%;
  height: 5rem;
  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;

  font-size: 1.25rem;
  font-weight: 600;

  transition: background-color 0.2s;
`;

export const CountdownContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: Rajdhani;
  font-weight: 600;
  color: var(--title);

  > div {
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background: var(--white);
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;
  }

  > span {
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }
`;

export const CountdownNumbers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  button {
    border: 0;
    background: var(--white);
    color: var(--title);
  }
`;

export const CountdownButton = styled.button`
  ${ButtonStyleCountdown}

  background: var(--blue);
  color: var(--white);

  &:not(:disabled):hover {
    background: var(--blue-dark);
  }

  &:disabled {
  background: var(--white);
  color: var(--text);
  cursor: not-allowed;
}
`;

export const CountdownButtonActive = styled.button`
  ${ButtonStyleCountdown}

  background: var(--white);
  color: var(--title);

  transition: background-color 0.5s;

  &:not(:disabled):hover {
    background: var(--red);
    color: var(--white);
  }
`;
