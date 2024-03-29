import { axe } from 'jest-axe';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PlayButton } from '../PlayButton';

describe('<PlayButton />', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should have no violations', async () => {
    const { container } = render(<PlayButton onClick={() => {}} />);

    expect(await axe(container)).toHaveNoViolations();
  });

  it('should render <PlayButton />', () => {
    render(<PlayButton onClick={() => {}} />);

    expect(screen.getByRole('button', { name: 'Play' })).toBeInTheDocument();
  });

  it('should handle click', async () => {
    const mockOnClick = jest.fn();

    render(<PlayButton onClick={mockOnClick} />);

    await userEvent.click(screen.getByRole('button', { name: 'Play' }));

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
