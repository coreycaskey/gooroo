import { renderHook, waitFor } from '@testing-library/react';
import { useTimerCountdown } from '../hooks/useTimerCountdown';

describe('useTimerCountdown()', () => {
  const mockSetTimerValue = jest.fn();

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should start interval and update timer value', async () => {
    const setIntervalSpy = jest.spyOn(window, 'setInterval');

    renderHook(useTimerCountdown, {
      initialProps: {
        timerValue: { hours: '00', minutes: '00', seconds: '01' },
        setTimerValue: mockSetTimerValue,
        timerState: 'started',
      },
    });

    expect(setIntervalSpy).toHaveBeenCalled();

    await waitFor(
      () => {
        expect(mockSetTimerValue).toHaveBeenCalled();
      },
      { timeout: 1050 }
    );
  });

  it('should not start interval', async () => {
    const setIntervalSpy = jest.spyOn(window, 'setInterval');

    renderHook(useTimerCountdown, {
      initialProps: {
        timerValue: { hours: '00', minutes: '00', seconds: '00' },
        setTimerValue: mockSetTimerValue,
        timerState: 'started',
      },
    });

    expect(setIntervalSpy).not.toHaveBeenCalled();
    expect(mockSetTimerValue).not.toHaveBeenCalled();
  });
});
