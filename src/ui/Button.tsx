import { PropsWithChildren } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends PropsWithChildren {
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button className={styles.button} type="button" onClick={onClick}>
      {children}
    </button>
  );
};
