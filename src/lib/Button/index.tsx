import React from 'react';
import classNames from 'classnames';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * @description 按钮大小
   */
  size: 'lg' | 'sm';
  /**
   * @description 按钮类型
   */
  buttonType: 'primary' | 'default' | 'danger' | 'link';
  /**
   * @description 自定义className
   */
  className?: string;
  /**
   * @description 是否禁用
   */
  disabled?: boolean;
  children?: React.ReactNode;
  /**
   * @description 链接按钮href
   */
  href?: string;
  /**
   * @description 按钮点击事件
   */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { size, disabled, buttonType, children, href } = props;
  const classess = classNames('btn', {
    [`btn-${size}`]: size,
    [`btn-${buttonType}`]: buttonType,
    disabled: buttonType === 'link' && disabled,
  });

  if (buttonType === 'link') {
    return (
      <a className={classess} href={href}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classess} disabled={disabled}>
        {children}
      </button>
    );
  }
};

Button.defaultProps = {
  size: 'sm',
  buttonType: 'default',
  disabled: false,
};

export default Button;
