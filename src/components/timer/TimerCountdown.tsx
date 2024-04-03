import { Dispatch, SetStateAction } from 'react';
import { useTimerCountdown } from './hooks/useTimerCountdown';
import { TimerInput } from './TimerInput';
import { TimerState, TimerValue } from './types';

import styles from './styles/TimerCountdown.module.css';

interface TimerCountdownProps {
  timerValue: TimerValue;
  setTimerValue: Dispatch<SetStateAction<TimerValue>>;
  timerState: TimerState;
  setTimerState: Dispatch<SetStateAction<TimerState>>;
}

export const TimerCountdown: React.FC<TimerCountdownProps> = (props) => {
  const { timerValue, setTimerValue, timerState } = props;

  useTimerCountdown(props);

  return (
    <div className={styles['timer-countdown-container']}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          fontSize: '50px',
        }}
      >
        <TimerInput
          timerValue={timerValue}
          setTimerValue={setTimerValue}
          timerValueKey="hours"
          timerState={timerState}
        />
        :
        <TimerInput
          timerValue={timerValue}
          setTimerValue={setTimerValue}
          timerValueKey="minutes"
          timerState={timerState}
        />
        :
        <TimerInput
          timerValue={timerValue}
          setTimerValue={setTimerValue}
          timerValueKey="seconds"
          timerState={timerState}
        />
      </div>

      {/* TODO: add this back */}
      {/* <svg>
        <circle r="198" cx="200" cy="200"></circle>
      </svg> */}
    </div>
  );
};
