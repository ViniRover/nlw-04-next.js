import styled from 'styled-components';

export const ExperienceBarContainer = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 1rem;
  }

  > div {
    flex: 1;
    height: 4px;
    border-radius: 4px;
    background: var(--gray-line);
    margin: 0 1.5rem;
    position: relative;

    > div {
      height: 4px;
      border-radius: 4px;
      background-color: var(--green);

      transition: width 1.5s;
    }

    span {
      position: absolute;
      top: 12px;
      transform: translateX(-50%);

      transition: left 1.5s;
    }
  }
`;