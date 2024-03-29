import { Button } from '../ui/Button';

interface PlayButtonProps {
  onClick: () => void;
}

export const PlayButton: React.FC<PlayButtonProps> = ({ onClick }) => {
  return <Button onClick={onClick}>Play</Button>;
};
