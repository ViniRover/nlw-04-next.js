import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import { ChallengeActive, ChallengeBoxContainer, ChallengeNotActive } from '../styles/components/ChallengeBox';

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return(
    <ChallengeBoxContainer>
      { activeChallenge ? (
        <ChallengeActive>
          <header>Win {activeChallenge.amount}xp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>New Challenge</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className="challengeFailedButton"
              onClick={handleChallengeFailed}
            >
              Failed
            </button>
            <button
              type="button"
              className="challengeSucceededButton"
              onClick={handleChallengeSucceeded}
            >
              Completed
            </button>
          </footer>
        </ChallengeActive>
      ) : (
        <ChallengeNotActive>
          <strong>Finish a cycle to get a challenge.</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level up" />
            Advance your level completing challenges.
          </p>
        </ChallengeNotActive>
      )}
    </ChallengeBoxContainer>
  );
}