import { Button } from '../ui/Button';

interface StopButtonProps {
  onClick: () => void;
}

export const StopButton: React.FC<StopButtonProps> = ({ onClick }) => {
  return <Button onClick={onClick}>Stop</Button>;
};
