import { axe } from 'jest-axe';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { StartButton } from '../StartButton';

describe('<StartButton />', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should have no violations', async () => {
    const { container } = render(<StartButton onClick={() => {}} />);

    expect(await axe(container)).toHaveNoViolations();
  });

  it('should render <StartButton />', () => {
    render(<StartButton onClick={() => {}} />);

    expect(screen.getByRole('button', { name: 'Start' })).toBeInTheDocument();
  });

  it('should handle click', async () => {
    const mockOnClick = jest.fn();

    render(<StartButton onClick={mockOnClick} />);

    await userEvent.click(screen.getByRole('button', { name: 'Start' }));

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
