import { Button } from '../ui/Button';

interface PauseButtonProps {
  onClick: () => void;
}

export const PauseButton: React.FC<PauseButtonProps> = ({ onClick }) => {
  return <Button onClick={onClick}>Pause</Button>;
};
