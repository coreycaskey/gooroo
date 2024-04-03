import { axe } from 'jest-axe';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ResetButton } from '../ResetButton';

describe('<ResetButton />', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should have no violations', async () => {
    const { container } = render(<ResetButton onClick={() => {}} />);

    expect(await axe(container)).toHaveNoViolations();
  });

  it('should render <ResetButton />', () => {
    render(<ResetButton onClick={() => {}} />);

    expect(screen.getByRole('button', { name: 'Reset' })).toBeInTheDocument();
  });

  it('should handle click', async () => {
    const mockOnClick = jest.fn();

    render(<ResetButton onClick={mockOnClick} />);

    await userEvent.click(screen.getByRole('button', { name: 'Reset' }));

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
