import { Dispatch, SetStateAction } from 'react';
import { TimerValue, TimerValueKey } from '../types/timer';
import { capitalize } from '../utils/capitalize';

import styles from './Timer.module.css';

export const MAX_STR_LENGTH = 2;
export const MAX_SECONDS_AND_MINUTES = 60;

interface TimerInputProps {
  timerValue: TimerValue;
  timerValueKey: TimerValueKey;
  setTimerValue: Dispatch<SetStateAction<TimerValue>>;
}

export const TimerInput: React.FC<TimerInputProps> = ({
  timerValue,
  timerValueKey,
  setTimerValue,
}) => {
  const handleInputChange = (key: TimerValueKey, value: string) => {
    // prevent non-numeric values
    if (Number.isNaN(+value)) {
      return;
    }

    // cap string length
    if (value.length > MAX_STR_LENGTH) {
      return;
    }

    // prevent carry over calculations on minutes and seconds
    if (key !== 'hours' && +value >= MAX_SECONDS_AND_MINUTES) {
      return;
    }

    setTimerValue({ ...timerValue, [key]: value });
  };

  const handleZeroPadding = (key: TimerValueKey, value: string) => {
    const numPadding = MAX_STR_LENGTH - value.length;

    if (numPadding > 0) {
      setTimerValue({
        ...timerValue,
        [key]: `${'0'.repeat(numPadding)}${value}`,
      });
    }
  };

  return (
    <div>
      <input
        id={timerValueKey}
        type="text"
        inputMode="numeric"
        pattern="[0-9]{2}"
        size={2}
        className={styles['timer-input']}
        placeholder="00"
        value={timerValue[timerValueKey]}
        onChange={(e) => handleInputChange(timerValueKey, e.target.value)}
        onBlur={(e) => handleZeroPadding(timerValueKey, e.target.value)}
      />
      <label htmlFor={timerValueKey}>{capitalize(timerValueKey)}</label>
    </div>
  );
};
