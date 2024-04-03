import { Button } from '../../ui/Button';

interface StartButtonProps {
  disabled?: boolean;
  onClick: () => void;
}

export const StartButton: React.FC<StartButtonProps> = ({
  disabled = false,
  onClick,
}) => (
  <Button disabled={disabled} onClick={onClick}>
    Start
  </Button>
);
