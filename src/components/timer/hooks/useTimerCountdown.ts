import { Dispatch, SetStateAction, useEffect } from 'react';
import { convertSecondsToTimerValue } from '../helpers/convertSecondsToTimerValue';
import { convertTimerValueToSeconds } from '../helpers/convertTimerValueToSeconds';
import { TimerState, TimerValue } from '../types';

interface TimerCountdownProps {
  timerValue: TimerValue;
  setTimerValue: Dispatch<SetStateAction<TimerValue>>;
  timerState: TimerState;
}

export const useTimerCountdown = ({
  timerValue,
  setTimerValue,
  timerState,
}: TimerCountdownProps) => {
  const isTimerRunning =
    timerState === 'started' && convertTimerValueToSeconds(timerValue) > 0;

  useEffect(() => {
    let interval: NodeJS.Timer | undefined;

    /*
      `convertSecondsToTimerValue()` ensures that any negative values
      that may arise from `setInterval()` / rerender race conditions
      will be defaulted to 0
    */
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimerValue((prevTimerValue) =>
          convertSecondsToTimerValue(
            convertTimerValueToSeconds(prevTimerValue) - 1
          )
        );
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isTimerRunning, setTimerValue]);
};
