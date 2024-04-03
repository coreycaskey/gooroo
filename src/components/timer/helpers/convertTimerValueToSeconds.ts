import { SECONDS_IN_HOURS, SECONDS_IN_MINUTES } from '../constants';
import { TimerValue } from '../types';

export const convertTimerValueToSeconds = (timerValue: TimerValue) =>
  Number(timerValue.hours) * SECONDS_IN_HOURS +
  Number(timerValue.minutes) * SECONDS_IN_MINUTES +
  Number(timerValue.seconds);
