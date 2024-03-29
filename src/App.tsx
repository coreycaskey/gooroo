import { useState } from 'react';
import { Timer } from './components/Timer';
import { PlayButton } from './components/PlayButton';
import { PauseButton } from './components/PauseButton';
import { StopButton } from './components/StopButton';
import { TimerState, TimerValue } from './types/timer';

import styles from './App.module.css';

const INITIAL_TIMER_VALUE: TimerValue = {
  hours: '00',
  minutes: '00',
  seconds: '00',
};

export const App = () => {
  const [timerState, setTimerState] = useState<TimerState>('stopped');
  const [timerValue, setTimerValue] = useState<TimerValue>(INITIAL_TIMER_VALUE);

  const handleClickStop = () => {
    setTimerState('stopped');
    setTimerValue(INITIAL_TIMER_VALUE);
  };

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <Timer timerValue={timerValue} setTimerValue={setTimerValue} />
          <PlayButton onClick={() => setTimerState('playing')} />
          <PauseButton onClick={() => setTimerState('paused')} />
          <StopButton onClick={handleClickStop} />
        </div>
      </div>
    </div>
  );
};
