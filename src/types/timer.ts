export type TimerState = 'playing' | 'paused' | 'stopped';

export type TimerValueKey = 'hours' | 'minutes' | 'seconds';

export type TimerValue = {
  [key in TimerValueKey]: string;
};
