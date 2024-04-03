import { convertTimerValueToSeconds } from '../helpers/convertTimerValueToSeconds';

describe('convertTimerValueToSeconds()', () => {
  it('should convert TimerValue to numeric seconds', () => {
    expect(
      convertTimerValueToSeconds({
        hours: '01',
        minutes: '01',
        seconds: '01',
      })
    ).toBe(3661);
  });
});
