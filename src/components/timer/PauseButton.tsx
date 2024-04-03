import { Button } from '../../ui/Button';

interface PauseButtonProps {
  disabled?: boolean;
  onClick: () => void;
}

export const PauseButton: React.FC<PauseButtonProps> = ({
  disabled = false,
  onClick,
}) => (
  <Button disabled={disabled} onClick={onClick}>
    Pause
  </Button>
);
