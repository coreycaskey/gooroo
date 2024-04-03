import { axe } from 'jest-axe';
import { render, screen } from '@testing-library/react';
import { TimerValue } from 'components/Timer/types';
import { TimerCountdown } from '../TimerCountdown';

const MOCK_TIMER_VALUE: TimerValue = {
  hours: '01',
  minutes: '20',
  seconds: '35',
};

// TODO: add more tests

describe('<TimerCountdown />', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should have no violations', async () => {
    const { container } = render(
      <TimerCountdown
        timerValue={MOCK_TIMER_VALUE}
        setTimerValue={() => {}}
        timerState="reset"
        setTimerState={() => {}}
      />
    );

    expect(await axe(container)).toHaveNoViolations();
  });

  it('should render <TimerCountdown />', () => {
    render(
      <TimerCountdown
        timerValue={MOCK_TIMER_VALUE}
        setTimerValue={() => {}}
        timerState="reset"
        setTimerState={() => {}}
      />
    );

    expect(screen.getByText('Hours')).toBeInTheDocument();
    expect(screen.getByText('Minutes')).toBeInTheDocument();
    expect(screen.getByText('Seconds')).toBeInTheDocument();
  });
});
