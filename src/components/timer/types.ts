/*
  started - timer has value and is counting down (also includes timer running out)
  paused - timer has value and is not counting down
  reset - timer has been zeroed by user
*/

export type TimerState = 'started' | 'paused' | 'reset';

export type TimerValueKey = 'hours' | 'minutes' | 'seconds';

export type TimerValue = {
  [key in TimerValueKey]: string;
};
