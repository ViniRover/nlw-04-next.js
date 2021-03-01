import { useContext } from 'react';

import { CountdownContext } from '../contexts/CountdownContext';
import { CountdownButton, CountdownButtonActive, CountdownContainer } from '../styles/components/Countdown';

export function Countdown() {
  const { 
    seconds, 
    minutes, 
    hasFinished, 
    isActive, 
    resetCountdown, 
    startCountdown
  } = useContext(CountdownContext);
  
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return(
    <div>
      <CountdownContainer>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </CountdownContainer>

      { hasFinished ? (
        <CountdownButton
          disabled
        >
          Closed cycle
        </CountdownButton>
      ) : (
        <>
          { isActive ? (
            <CountdownButtonActive 
              type="button" 
              onClick={resetCountdown}
            >
              Abandon cycle
            </CountdownButtonActive>
          ) : (
            <CountdownButton 
              type="button" 
              onClick={startCountdown}
            >
              Begin cycle
            </CountdownButton>
          )}
        </>
      )}
    </div>
  );
}