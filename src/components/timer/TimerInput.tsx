import { Dispatch, SetStateAction } from 'react';
import { MAX_SECONDS_AND_MINUTES, MAX_TIME_UNIT_LENGTH } from './constants';
import { TimerState, TimerValue, TimerValueKey } from './types';
import { addZeroPadding } from './helpers/addZeroPadding';
import { capitalize } from '../../utils/capitalize';

import styles from './styles/TimerInput.module.css';

interface TimerInputProps {
  timerValue: TimerValue;
  setTimerValue: Dispatch<SetStateAction<TimerValue>>;
  timerValueKey: TimerValueKey;
  timerState: TimerState;
}

export const TimerInput: React.FC<TimerInputProps> = ({
  timerValue,
  timerValueKey,
  setTimerValue,
  timerState,
}) => {
  const handleInputChange = (key: TimerValueKey, value: string) => {
    // prevent non-numeric values
    if (Number.isNaN(+value)) {
      return;
    }

    // cap string length
    if (value.length > MAX_TIME_UNIT_LENGTH) {
      return;
    }

    // prevent carry over calculations on minutes and seconds
    if (key !== 'hours' && +value >= MAX_SECONDS_AND_MINUTES) {
      return;
    }

    setTimerValue({ ...timerValue, [key]: value });
  };

  const handleZeroPadding = (key: TimerValueKey, value: string) => {
    const numPadding = MAX_TIME_UNIT_LENGTH - value.length;

    if (numPadding > 0) {
      setTimerValue({
        ...timerValue,
        [key]: addZeroPadding(value, numPadding),
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
        disabled={timerState !== 'reset'}
      />
      <label htmlFor={timerValueKey}>{capitalize(timerValueKey)}</label>
    </div>
  );
};
