import { axe } from 'jest-axe';
import { render, screen } from '@testing-library/react';
import { Timer } from '../Timer';
import { TimerValue } from '../../types/timer';

const MOCK_TIMER_VALUE: TimerValue = {
  hours: '01',
  minutes: '20',
  seconds: '35',
};

describe('<Timer />', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should have no violations', async () => {
    const { container } = render(
      <Timer timerValue={MOCK_TIMER_VALUE} setTimerValue={() => {}} />
    );

    expect(await axe(container)).toHaveNoViolations();
  });

  it('should render <Timer />', () => {
    render(<Timer timerValue={MOCK_TIMER_VALUE} setTimerValue={() => {}} />);

    expect(screen.getByText('Hours')).toBeInTheDocument();
    expect(screen.getByText('Minutes')).toBeInTheDocument();
    expect(screen.getByText('Seconds')).toBeInTheDocument();
  });
});
