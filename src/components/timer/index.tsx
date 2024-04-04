import { useState } from 'react';
import { capitalize } from 'utils/capitalize';
import { INITIAL_TIMER_VALUE } from './constants';
import { TimerCountdown } from './TimerCountdown';
import { TimerState, TimerValue } from './types';
import { convertTimerValueToSeconds } from './helpers/convertTimerValueToSeconds';
import { PauseButton } from './PauseButton';
import { ResetButton } from './ResetButton';
import { StartButton } from './StartButton';

import styles from './styles/Timer.module.css';

interface TimerProps {}

export const Timer: React.FC<TimerProps> = () => {
  const [timerState, setTimerState] = useState<TimerState>('reset');
  const [timerValue, setTimerValue] = useState<TimerValue>(INITIAL_TIMER_VALUE);

  const isInitialTimerValue = convertTimerValueToSeconds(timerValue) === 0;
  const disableStartButton = timerState === 'started' || isInitialTimerValue;
  const disablePauseButton = timerState !== 'started';
  const disableResetButton = timerState === 'reset';

  const isTimerFinished = timerState === 'started' && isInitialTimerValue;

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          {/* TODO: temp logic */}
          <p style={{ fontSize: '20px' }}>
            Current State: {capitalize(timerState)}
          </p>

          <TimerCountdown
            timerValue={timerValue}
            setTimerValue={setTimerValue}
            timerState={timerState}
          />

          {timerState === 'reset' && isInitialTimerValue && (
            <p style={{ fontSize: '20px' }}>Please enter a time to start</p>
          )}

          {isTimerFinished && (
            <p style={{ fontSize: '20px' }}>
              Please reset the timer and enter a new time
            </p>
          )}

          <div className={styles['button-container']}>
            <StartButton
              disabled={disableStartButton}
              onClick={() => setTimerState('started')}
            />

            <PauseButton
              disabled={disablePauseButton}
              onClick={() => setTimerState('paused')}
            />

            <ResetButton
              disabled={disableResetButton}
              onClick={() => {
                setTimerState('reset');
                setTimerValue(INITIAL_TIMER_VALUE);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
