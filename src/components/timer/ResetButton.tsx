import { Button } from '../../ui/Button';

interface ResetButtonProps {
  disabled?: boolean;
  onClick: () => void;
}

export const ResetButton: React.FC<ResetButtonProps> = ({
  disabled = false,
  onClick,
}) => (
  <Button disabled={disabled} onClick={onClick}>
    Reset
  </Button>
);
