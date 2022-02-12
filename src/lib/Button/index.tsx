import React from 'react';
import classNames from 'classnames';

type NativeButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
type AnchorButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;
type BaseButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

export interface ButtonProps extends BaseButtonProps {
  /**
   * @description 按钮大小
   */
  size?: 'lg' | 'sm';
  /**
   * @description 按钮类型
   */
  buttonType?: 'primary' | 'default' | 'danger' | 'link';
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
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { size, className, disabled, buttonType, children, href, ...restProps } = props;
  const classess = classNames('btn', className, {
    [`btn-${size}`]: size,
    [`btn-${buttonType}`]: buttonType,
    disabled: buttonType === 'link' && disabled,
  });

  if (buttonType === 'link') {
    return (
      <a className={classess} href={href} {...restProps}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classess} disabled={disabled} {...restProps}>
        {children}
      </button>
    );
  }
};

Button.defaultProps = {
  buttonType: 'default',
  disabled: false,
};

export default Button;
