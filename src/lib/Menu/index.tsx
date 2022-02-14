import React from 'react';
import classNames from 'classnames';

type MenuMode = 'horizontal' | 'vertical';

export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  readonly onSelect?: (selectedIndex: number) => void;
}

const Menu: React.FC<MenuProps> = (props) => {
  const { defaultIndex, className, mode, style, onSelect } = props;
  const classes = classNames('dino-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode === 'horizontal',
  });
  return (
    <ul className={classes} style={style}>
      {props.children}
    </ul>
  );
};

Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal',
};

export default Menu;
