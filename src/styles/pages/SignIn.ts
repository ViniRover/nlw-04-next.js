import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  background: #5965E0;

  section {
    flex: 1;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6.25rem;
    align-content: center;
  }
`;

export const LoginSection = styled.div`
  flex: 1;

  display: grid;
  grid-template-rows: 2;

  > img {
    width: 25rem;
    height: 6.25rem;
  }
`;

export const GithubLogin = styled.div`
  display: flex;
  flex-direction: column;

  > span {
    color: var(--white);
    font-weight: 600;
    font-size: 2.5rem;
    padding: 2.75rem 0;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;

    background: var(--white);
    border: 0;
    border-radius: 5px;
    width: 200px;
    padding: 10px;
  }
`;

