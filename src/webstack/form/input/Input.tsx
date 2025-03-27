import React from 'react';
import './Input.scss';

type Variant = 'default' | 'outlined' | 'ghost';
type InputSize = 'xs' | 'sm' | 'md' | 'lg';
type ElementType = 'input' | 'button';

interface SharedProps {
  variant?: Variant;
  inputSize?: InputSize;
  className?: string;
}

// Input-specific props
interface InputProps extends SharedProps, Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  type?: 'input';
  onHover?: React.MouseEventHandler<HTMLInputElement>;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
}

// Button-specific props
interface ButtonProps extends SharedProps, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  type: 'button';
  onHover?: React.MouseEventHandler<HTMLButtonElement>;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

type Props = InputProps | ButtonProps;

const Input: React.FC<Props> = ({
  type = 'input',
  variant = 'default',
  inputSize = 'md',
  className = '',
  ...props
}) => {
  const classes = `input input--${variant} input--${inputSize} ${className}`.trim();

  if (type === 'button') {
    const {
      onHover,
      onClick,
      ...rest
    } = props as ButtonProps;

    return (
      <button
        {...rest}
        className={classes}
        onClick={onClick}
        onMouseEnter={onHover}
      />
    );
  }

  const {
    onHover,
    onClick,
    ...rest
  } = props as InputProps;

  return (
    <input
      {...rest}
      className={classes}
      onClick={onClick}
      onMouseEnter={onHover}
    />
  );
};

export default Input;