import { useContext } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

import { CountdownContext } from '../contexts/CountdownContext';
import {
  CountdownButton,
  CountdownButtonActive,
  CountdownContainer,
  CountdownNumbers,
} from '../styles/components/Countdown';

export function Countdown() {
  const {
    seconds,
    minutes,
    hasFinished,
    isActive,
    resetCountdown,
    startCountdown,
    changeCountdownTime,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return(
    <div>
      <CountdownContainer>
        <div>
          <CountdownNumbers>
            <button id="minuteLeftUp" onClick={changeCountdownTime}>
              <FaAngleUp size={50}/>
            </button>
            <span>{minuteLeft}</span>
            <button id="minuteLeftDown" onClick={changeCountdownTime}>
              <FaAngleDown size={50}/>
            </button>
          </CountdownNumbers>
          <CountdownNumbers>
            <button id="minuteRightUp" onClick={changeCountdownTime}>
              <FaAngleUp size={50}/>
            </button>
            <span>{minuteRight}</span>
            <button id="minuteRightDown" onClick={changeCountdownTime}>
              <FaAngleDown size={50}/>
            </button>
          </CountdownNumbers>
        </div>
        <span>:</span>
        <div>
        <CountdownNumbers>
            <button id="secondLeftUp" onClick={changeCountdownTime}>
              <FaAngleUp size={50}/>
            </button>
            <span>{secondLeft}</span>
            <button id="secondLeftDown" onClick={changeCountdownTime}>
              <FaAngleDown size={50}/>
            </button>
          </CountdownNumbers>
          <CountdownNumbers>
            <button id="secondRightUp" onClick={changeCountdownTime}>
              <FaAngleUp size={50}/>
            </button>
            <span>{secondRight}</span>
            <button id="secondRightDown" onClick={changeCountdownTime}>
              <FaAngleDown size={50}/>
            </button>
          </CountdownNumbers>
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
