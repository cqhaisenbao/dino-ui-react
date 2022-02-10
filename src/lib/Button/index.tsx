import React from 'react';
import classNames from 'classnames';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * @description 按钮大小
   */
  size: 'lg' | 'sm';
  buttonType: 'primary' | 'default' | 'danger' | 'link';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { size, disabled, buttonType, children } = props;
  const classess = classNames('dino-btn', {});
  return <button>{children}</button>;
};

export default Button;
