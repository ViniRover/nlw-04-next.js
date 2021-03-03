import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { ProfileContainer } from '../styles/components/Profile';

export function Profile() {
  const { level, username, imageUrl } = useContext(ChallengesContext);

  return (
    <ProfileContainer>
      <img src={imageUrl} alt={username} />
      <div>
        <strong>{username}</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </ProfileContainer>
  );
}
