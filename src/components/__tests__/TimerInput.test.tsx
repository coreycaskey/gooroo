import { axe } from 'jest-axe';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TimerInput } from '../TimerInput';
import { TimerValue } from '../../types/timer';

const MOCK_TIMER_VALUE: TimerValue = {
  hours: '01',
  minutes: '20',
  seconds: '35',
};

describe('<TimerInput />', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should have no violations', async () => {
    const { container } = render(
      <TimerInput
        timerValue={MOCK_TIMER_VALUE}
        timerValueKey="hours"
        setTimerValue={() => {}}
      />
    );

    expect(await axe(container)).toHaveNoViolations();
  });

  it('should render <TimerInput />', () => {
    render(
      <TimerInput
        timerValue={MOCK_TIMER_VALUE}
        timerValueKey="hours"
        setTimerValue={() => {}}
      />
    );

    const input = screen.getByRole('textbox');

    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('01');
  });

  it('should reject non-numeric inputs', async () => {
    const mockSetTimerValue = jest.fn();

    render(
      <TimerInput
        timerValue={{ ...MOCK_TIMER_VALUE, hours: '' }}
        timerValueKey="hours"
        setTimerValue={mockSetTimerValue}
      />
    );

    await userEvent.type(screen.getByRole('textbox'), 'a');

    expect(mockSetTimerValue).not.toHaveBeenCalled();
  });

  it('should reject numeric input lengths > MAX_STR_LENGTH', async () => {
    const mockSetTimerValue = jest.fn();

    render(
      <TimerInput
        timerValue={MOCK_TIMER_VALUE}
        timerValueKey="hours"
        setTimerValue={mockSetTimerValue}
      />
    );

    await userEvent.type(screen.getByRole('textbox'), '1');

    expect(mockSetTimerValue).not.toHaveBeenCalled();
  });

  it('should reject numeric inputs for minutes >= MAX_SECONDS_AND_MINUTES', async () => {
    const mockSetTimerValue = jest.fn();

    render(
      <TimerInput
        timerValue={{ ...MOCK_TIMER_VALUE, minutes: '6' }}
        timerValueKey="minutes"
        setTimerValue={mockSetTimerValue}
      />
    );

    await userEvent.type(screen.getByRole('textbox'), '0');

    expect(mockSetTimerValue).not.toHaveBeenCalled();
  });

  it('should reject numeric inputs for seconds >= MAX_SECONDS_AND_MINUTES', async () => {
    const mockSetTimerValue = jest.fn();

    render(
      <TimerInput
        timerValue={{ ...MOCK_TIMER_VALUE, seconds: '6' }}
        timerValueKey="seconds"
        setTimerValue={mockSetTimerValue}
      />
    );

    await userEvent.type(screen.getByRole('textbox'), '0');

    expect(mockSetTimerValue).not.toHaveBeenCalled();
  });

  it('should accept valid numeric inputs', async () => {
    const mockSetTimerValue = jest.fn();

    render(
      <TimerInput
        timerValue={{ ...MOCK_TIMER_VALUE, seconds: '' }}
        timerValueKey="seconds"
        setTimerValue={mockSetTimerValue}
      />
    );

    await userEvent.type(screen.getByRole('textbox'), '5');

    expect(mockSetTimerValue).toHaveBeenCalledWith({
      ...MOCK_TIMER_VALUE,
      seconds: '5',
    });
  });

  it('should add zero padding if input length < MAX_STR_LENGTH', async () => {
    const mockSetTimerValue = jest.fn();

    render(
      <TimerInput
        timerValue={{ ...MOCK_TIMER_VALUE, seconds: '5' }}
        timerValueKey="seconds"
        setTimerValue={mockSetTimerValue}
      />
    );

    await userEvent.tab();

    expect(screen.getByRole('textbox')).toHaveValue('5');

    await userEvent.tab();

    expect(mockSetTimerValue).toHaveBeenCalledWith({
      ...MOCK_TIMER_VALUE,
      seconds: '05',
    });
  });

  it('should not add zero padding if input length = MAX_STR_LENGTH', async () => {
    const mockSetTimerValue = jest.fn();

    render(
      <TimerInput
        timerValue={MOCK_TIMER_VALUE}
        timerValueKey="seconds"
        setTimerValue={mockSetTimerValue}
      />
    );

    await userEvent.tab();

    expect(screen.getByRole('textbox')).toHaveValue('35');

    await userEvent.tab();

    expect(mockSetTimerValue).not.toHaveBeenCalled();
  });
});
