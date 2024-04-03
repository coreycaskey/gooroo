/*
  playing - timer has value and is counting down
  paused - timer has value and is not counting down
  reset - timer is reset
  finished - timer has run out
*/

export type TimerState = 'playing' | 'paused' | 'reset' | 'finished';

export type TimerValueKey = 'hours' | 'minutes' | 'seconds';

export type TimerValue = {
  [key in TimerValueKey]: string;
};
