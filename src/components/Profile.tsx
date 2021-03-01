import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { ProfileContainer } from '../styles/components/Profile';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <ProfileContainer>
      <img src="http://github.com/ViniRover.png" alt="Vinicius Rover" />
      <div>
        <strong>Vinicius Rover</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </ProfileContainer>
  );
}
