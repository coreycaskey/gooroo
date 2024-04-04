import { addZeroPadding } from './addZeroPadding';
import {
  MAX_TIME_UNIT_LENGTH,
  SECONDS_IN_HOURS,
  SECONDS_IN_MINUTES,
} from '../constants';
import { TimerValue } from '../types';

export const convertSecondsToTimerValue = (
  numericSeconds: number
): TimerValue => {
  // ensure negative values are converted to '00'
  let carriedSeconds = numericSeconds >= 0 ? numericSeconds : 0;

  const stringifiedHours = Math.floor(
    carriedSeconds / SECONDS_IN_HOURS
  ).toString();

  carriedSeconds %= SECONDS_IN_HOURS;

  const stringifiedMinutes = Math.floor(
    carriedSeconds / SECONDS_IN_MINUTES
  ).toString();

  carriedSeconds %= SECONDS_IN_MINUTES;

  const stringifiedSeconds = carriedSeconds.toString();

  const numHoursPadding = MAX_TIME_UNIT_LENGTH - stringifiedHours.length;
  const numMinutesPadding = MAX_TIME_UNIT_LENGTH - stringifiedMinutes.length;
  const numSecondsPadding = MAX_TIME_UNIT_LENGTH - stringifiedSeconds.length;

  return {
    hours: addZeroPadding(stringifiedHours, numHoursPadding),
    minutes: addZeroPadding(stringifiedMinutes, numMinutesPadding),
    seconds: addZeroPadding(stringifiedSeconds, numSecondsPadding),
  };
};
