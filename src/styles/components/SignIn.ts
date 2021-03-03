import styled from "styled-components";

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
  justify-content: center;

  > div {
    display: flex;
    align-items: center;
    padding: 1.25rem 0;
    color: var(--gray);

    p {
      max-width: 400px;
      padding: 0 1rem;

      font-weight: 500;
      font-size: 1.25rem;
    }

    svg {
      width: 2.5rem;
      height: 2.5rem;
    }
  }

  > span {
    color: var(--white);
    font-weight: 600;
    font-size: 2.5rem;
    padding: 2.75rem 0;
  }
`;

export const InputForm = styled.div`
  form {
    display: flex;
  }

  input {
    background: linear-gradient(90deg, #4953B8 0%, rgba(73, 83, 184, 0.2) 100%);

    color: var(--white);
    font-weight: 400;
    font-size: 1.25rem;

    border: 0;
    border-radius: 5px 0px 0px 5px;
    padding: 25px;

    width: 340px;
    height: 80px;
  }

  input::placeholder {
    color: var(--gray);
    font-weight: 400;
    font-size: 1.25rem;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 80px;
    width: 80px;

    background: #4953B8;
    border: 0;

    svg {
      color: var(--white);
    }
  }
`;

