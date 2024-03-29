import { axe } from 'jest-axe';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PauseButton } from '../PauseButton';

describe('<PauseButton />', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should have no violations', async () => {
    const { container } = render(<PauseButton onClick={() => {}} />);

    expect(await axe(container)).toHaveNoViolations();
  });

  it('should render <PauseButton />', () => {
    render(<PauseButton onClick={() => {}} />);

    expect(screen.getByRole('button', { name: 'Pause' })).toBeInTheDocument();
  });

  it('should handle click', async () => {
    const mockOnClick = jest.fn();

    render(<PauseButton onClick={mockOnClick} />);

    await userEvent.click(screen.getByRole('button', { name: 'Pause' }));

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
