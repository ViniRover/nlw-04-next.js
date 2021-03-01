import { createContext, MouseEvent, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountdownContextData {
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
  startCountdown: () => void;
  resetCountdown: () => void;
  changeCountdownTime: (event: MouseEvent) => void;
}

interface CountdownProvideProps {
  children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData);
let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({ children }: CountdownProvideProps) {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);
  const [numberChosen, setNumberChosen] = useState(0);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setHasFinished(false);
    setTime(numberChosen);
    setNumberChosen(0);
  }

  function changeCountdownTime(event: MouseEvent) {
    const buttonId = event.currentTarget.id;

    if(isActive) {
      return;
    }

    if((time >= 5400) && buttonId.endsWith('Up')) {
      setTime(90 * 60);
      return;
    }

    if((time <= 0) && buttonId.endsWith('Down')) {
      setTime(0);
      return;
    }

    if(buttonId === 'minuteLeftUp') {
      setNumberChosen(time);
      setTime(time+(600));
    } else if(buttonId === 'minuteLeftDown') {
      setTime(time-(600));
    } else if(buttonId === 'minuteRightUp') {
      setTime(time+(60));
    } else if(buttonId === 'minuteRightDown') {
      setTime(time-(60));
    } else if(buttonId === 'secondLeftUp') {
      setTime(time+(10));
    } else if(buttonId === 'secondLeftDown') {
      setTime(time-(10));
    } else if(buttonId === 'secondRightUp') {
      setTime(time+(1));
    } else if(buttonId === 'secondRightDown') {
      setTime(time-(1));
    }
  }

  useEffect(() => {
    if(isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time-1);
        setNumberChosen(numberChosen+1);
      }, 1000)
    } else if(isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time, numberChosen]);

  return(
    <CountdownContext.Provider value={{
      minutes,
      seconds,
      hasFinished,
      isActive,
      startCountdown,
      resetCountdown,
      changeCountdownTime,
    }}>
      {children}
    </CountdownContext.Provider>
  );
}
