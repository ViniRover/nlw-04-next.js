import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { Container, Overlay } from '../styles/components/LevelUpModal';

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);

  return(
    <Overlay>
      <Container>
        <header>{level}</header>

        <strong>Congratulations</strong>
        <p>You´ve reached a new level.</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Close Modal"/>
        </button>
      </Container>
    </Overlay>
  );
}