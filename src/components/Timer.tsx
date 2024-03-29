import { Dispatch, SetStateAction } from 'react';
import { TimerInput } from './TimerInput';
import { TimerValue } from '../types/timer';

import styles from './Timer.module.css';

interface TimerProps {
  timerValue: TimerValue;
  setTimerValue: Dispatch<SetStateAction<TimerValue>>;
}

export const Timer: React.FC<TimerProps> = ({ timerValue, setTimerValue }) => {
  return (
    <div className={styles['timer-container']}>
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
          timerValueKey="hours"
          setTimerValue={setTimerValue}
        />
        :
        <TimerInput
          timerValue={timerValue}
          timerValueKey="minutes"
          setTimerValue={setTimerValue}
        />
        :
        <TimerInput
          timerValue={timerValue}
          timerValueKey="seconds"
          setTimerValue={setTimerValue}
        />
      </div>

      {/* TODO: add this back */}
      {/* <svg>
        <circle r="198" cx="200" cy="200"></circle>
      </svg> */}
    </div>
  );
};
