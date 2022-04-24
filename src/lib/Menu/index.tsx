import React, { createContext } from 'react';
import classNames from 'classnames';
import { MenuItemProps } from './MenuItem';

type MenuMode = 'horizontal' | 'vertical';
type SelectCallback = (selectedIndex: string) => void;

interface IMenuContext {
  onSelect?: SelectCallback;
  activeKey?: string;
  mode?: MenuMode;
  defaultOpenSubMenus?: string[];
}

export const MenuContext = createContext<IMenuContext>({});

export interface MenuProps {
  /**
   * 当前默认选中项
   */
  defaultIndex?: string;
  className?: string;
  /**
   * 菜单类型：水平/垂直
   */
  mode?: MenuMode;
  style?: React.CSSProperties;
  /**
   * 选中后的回调
   */
  readonly onSelect?: SelectCallback;
  /**
   * 垂直模式下是否展开子菜单
   */
  defaultOpenSubMenus?: string[];
}

const Menu: React.FC<MenuProps> = (props) => {
  const { defaultIndex, className, mode, style, onSelect, children, defaultOpenSubMenus } = props;
  const [currentActive, setActive] = React.useState(defaultIndex);
  const handleClick = (index: string) => {
    setActive(index);
    if (onSelect) {
      onSelect(index);
    }
  };
  const passedContext: IMenuContext = {
    onSelect: handleClick,
    activeKey: currentActive || '0',
    mode,
    defaultOpenSubMenus,
  };
  const classes = classNames('yif-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical',
  });

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>;
      const { displayName } = childElement.type;
      if (['MenuItem', 'SubMenu'].includes(displayName as string)) {
        return React.cloneElement(childElement, {
          index: index.toString(),
        });
      } else {
        console.error('Warning: Menu has a child which is not a MenuItem component');
      }
    });
  };

  return (
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuContext.Provider value={passedContext}>{renderChildren()}</MenuContext.Provider>
    </ul>
  );
};

Menu.defaultProps = {
  defaultIndex: '0',
  mode: 'horizontal',
  defaultOpenSubMenus: [],
};

export default Menu;
