import { convertSecondsToTimerValue } from '../helpers/convertSecondsToTimerValue';

describe('convertSecondsToTimerValue()', () => {
  it('should convert positive numeric seconds to TimerValue', () => {
    expect(convertSecondsToTimerValue(3661)).toEqual({
      hours: '01',
      minutes: '01',
      seconds: '01',
    });
  });

  it('should handle negative numeric seconds', () => {
    expect(convertSecondsToTimerValue(-1)).toEqual({
      hours: '00',
      minutes: '00',
      seconds: '00',
    });
  });
});
