import { axe } from 'jest-axe';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { StopButton } from '../StopButton';

describe('<StopButton />', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should have no violations', async () => {
    const { container } = render(<StopButton onClick={() => {}} />);

    expect(await axe(container)).toHaveNoViolations();
  });

  it('should render <StopButton />', () => {
    render(<StopButton onClick={() => {}} />);

    expect(screen.getByRole('button', { name: 'Stop' })).toBeInTheDocument();
  });

  it('should handle click', async () => {
    const mockOnClick = jest.fn();

    render(<StopButton onClick={mockOnClick} />);

    await userEvent.click(screen.getByRole('button', { name: 'Stop' }));

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
