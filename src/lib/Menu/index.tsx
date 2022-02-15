import React, { createContext } from 'react';
import classNames from 'classnames';

type MenuMode = 'horizontal' | 'vertical';
type SelectCallback = (selectedIndex: number) => void;

interface IMenuContext {
  onSelect?: SelectCallback;
  activeKey?: number;
}

export const MenuContext = createContext<IMenuContext>({});

export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  readonly onSelect?: SelectCallback;
}

const Menu: React.FC<MenuProps> = (props) => {
  const { defaultIndex, className, mode, style, onSelect, children } = props;
  const [currentActive, setActive] = React.useState(defaultIndex);
  const handleClick = (index: number) => {
    setActive(index);
    if (onSelect) {
      onSelect(index);
    }
  };
  const passedContext: IMenuContext = {
    onSelect: handleClick,
    activeKey: currentActive || 0,
  };
  const classes = classNames('dino-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode === 'horizontal',
  });
  return (
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuContext.Provider value={passedContext}>{children}</MenuContext.Provider>
    </ul>
  );
};

Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal',
};

export default Menu;
