import React from 'react';
import styles from './Button.module.css'; // Import your CSS module or style file

type ButtonProps = {
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'tertiary';
  isLoading?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  type = 'button',
  size = 'medium',
  variant = 'primary',
  isLoading = false,
  disabled = false,
  children,
  className = '',
  style = {},
}) => {
  const buttonClass = `${styles.btn} ${styles[variant]} ${styles[size]} ${className}`;
  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonClass}
      disabled={isLoading || disabled}
      style={style}
    >
      {isLoading ? <span className={styles.spinner }></span> : children}
    </button>
  );
};

export default Button;
