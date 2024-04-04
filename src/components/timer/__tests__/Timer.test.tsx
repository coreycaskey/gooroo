/* eslint-disable testing-library/no-unnecessary-act */
import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Timer } from '..';

const initializeStartState = async () => {
  const secondsInput = screen.getByRole('textbox', { name: 'Seconds' });

  await act(async () => {
    await userEvent.clear(secondsInput);
    await userEvent.type(secondsInput, '02');

    expect(screen.getByRole('button', { name: 'Start' })).not.toBeDisabled();
    expect(screen.getByRole('button', { name: 'Pause' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Reset' })).toBeDisabled();

    expect(
      screen.queryByText('Please enter a time to start')
    ).not.toBeInTheDocument();

    expect(
      screen.queryByText('Please reset the timer and enter a new time')
    ).not.toBeInTheDocument();

    await userEvent.click(screen.getByRole('button', { name: 'Start' }), {});
  });
};

describe('<Timer />', () => {
  it('should show started state', async () => {
    render(<Timer />);

    await initializeStartState();

    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'Start' })).toBeDisabled();
    });

    expect(screen.getByRole('button', { name: 'Pause' })).not.toBeDisabled();
    expect(screen.getByRole('button', { name: 'Reset' })).not.toBeDisabled();
  });

  it('should show paused state', async () => {
    render(<Timer />);

    await initializeStartState();

    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'Pause' })).not.toBeDisabled();
    });

    await act(async () => {
      await userEvent.click(screen.getByRole('button', { name: 'Pause' }));
    });

    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'Pause' })).toBeDisabled();
    });

    expect(screen.getByRole('button', { name: 'Start' })).not.toBeDisabled();
  });

  it('should show finished state', async () => {
    render(<Timer />);

    await initializeStartState();

    await waitFor(
      () => {
        expect(
          screen.getByText('Please reset the timer and enter a new time')
        ).toBeInTheDocument();
      },
      { timeout: 2050 }
    );
  });

  it('should show reset state', async () => {
    render(<Timer />);

    await initializeStartState();

    await waitFor(
      () => {
        expect(
          screen.getByText('Please reset the timer and enter a new time')
        ).toBeInTheDocument();
      },
      { timeout: 2050 }
    );

    await act(async () => {
      await userEvent.click(screen.getByRole('button', { name: 'Reset' }));
    });

    await waitFor(() => {
      expect(
        screen.getByText('Please enter a time to start')
      ).toBeInTheDocument();
    });

    expect(screen.getByRole('button', { name: 'Start' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Pause' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Reset' })).toBeDisabled();
  });
});
