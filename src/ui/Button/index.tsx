import { PropsWithChildren } from 'react';

import styles from './Button.module.css';

interface ButtonProps extends PropsWithChildren {
  className?: string;
  disabled?: boolean;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  className = styles.button,
  disabled = false,
  onClick,
  children,
}) => (
  <button
    className={className}
    type="button"
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);
