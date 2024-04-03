import { axe } from 'jest-axe';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '..';

describe('<Button />', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should have no violations', async () => {
    const { container } = render(<Button onClick={() => {}}>Test</Button>);

    expect(await axe(container)).toHaveNoViolations();
  });

  it('should be enabled', async () => {
    const mockOnClick = jest.fn();

    render(
      <Button disabled={false} onClick={mockOnClick}>
        Test
      </Button>
    );

    await userEvent.click(screen.getByRole('button'));

    expect(mockOnClick).toHaveBeenCalled();
  });

  it('should be disabled', async () => {
    const mockOnClick = jest.fn();

    render(
      <Button disabled onClick={mockOnClick}>
        Test
      </Button>
    );

    await userEvent.click(screen.getByRole('button'));

    expect(mockOnClick).not.toHaveBeenCalled();
  });
});
