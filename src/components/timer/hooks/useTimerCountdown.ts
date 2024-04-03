import { Dispatch, SetStateAction, useEffect } from 'react';
import { convertSecondsToTimerValue } from '../helpers/convertSecondsToTimerValue';
import { convertTimerValueToSeconds } from '../helpers/convertTimerValueToSeconds';
import { TimerState, TimerValue } from '../types';

interface TimerCountdownProps {
  timerValue: TimerValue;
  setTimerValue: Dispatch<SetStateAction<TimerValue>>;
  timerState: TimerState;
  setTimerState: Dispatch<SetStateAction<TimerState>>;
}

export const useTimerCountdown = ({
  timerValue,
  setTimerValue,
  timerState,
  setTimerState,
}: TimerCountdownProps) => {
  const isTimerRunning = timerState === 'playing';
  const isTimerFinished =
    isTimerRunning && convertTimerValueToSeconds(timerValue) === 0;

  useEffect(() => {
    const interval = isTimerRunning
      ? setInterval(() => {
          setTimerValue((prevTimerValue) =>
            convertSecondsToTimerValue(
              convertTimerValueToSeconds(prevTimerValue) - 1
            )
          );
        }, 1000)
      : undefined;

    return () => clearInterval(interval);
  }, [isTimerRunning, setTimerValue]);

  useEffect(() => {
    if (isTimerFinished) {
      setTimerState('finished');
    }
  }, [isTimerFinished, setTimerState]);
};
