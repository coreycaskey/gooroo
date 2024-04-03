import { convertSecondsToTimerValue } from '../helpers/convertSecondsToTimerValue';

describe('convertSecondsToTimerValue()', () => {
  it('should convert numeric seconds to TimerValue', () => {
    expect(convertSecondsToTimerValue(3661)).toEqual({
      hours: '01',
      minutes: '01',
      seconds: '01',
    });
  });
});
