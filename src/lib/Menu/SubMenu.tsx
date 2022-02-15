import React, { useContext } from 'react';
import { MenuContext } from './index';
import classNames from 'classnames';
import { MenuItemProps } from './MenuItem';

export interface SubMenuProps {
  index?: string;
  title: string;
  className?: string;
}

const SubMenu: React.FC<SubMenuProps> = ({ index, title, children, className }) => {
  const context = useContext(MenuContext);
  const isOpened =
    index && context.mode === 'vertical'
      ? (context.defaultOpenSubMenus as string[]).includes(index)
      : false;
  const [menuOpen, setMenuOpen] = React.useState(isOpened);
  const classes = classNames('menu-item submenu-item', className, {
    'is-active': context.activeKey === index,
    'is-opened': menuOpen,
  });
  const subMenuClass = classNames('dino-submenu', {
    'menu-opened': menuOpen,
  });
  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };
  let timer: any;
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer);
    e.preventDefault();
    timer = setTimeout(() => {
      setMenuOpen(toggle);
    }, 100);
  };
  const clickEvents =
    context.mode === 'vertical'
      ? {
          onClick: handleClick,
        }
      : {};
  const hoverEvents =
    context.mode !== 'vertical'
      ? {
          onMouseEnter: (e: React.MouseEvent) => {
            handleMouse(e, true);
          },
          onMouseLeave: (e: React.MouseEvent) => {
            handleMouse(e, false);
          },
        }
      : {};
  const childrenComponent = React.Children.map(children, (child, i) => {
    const childElement = child as React.FunctionComponentElement<MenuItemProps>;
    if (childElement.type.displayName === 'MenuItem') {
      return React.cloneElement(childElement, {
        index: `${index}-${i}`,
      });
    } else {
      console.error('Warning: SubMenu has a child which is not a MenuItem component');
    }
  });
  return (
    <li key={index} className={classes} {...hoverEvents}>
      <div className="submenu-title" onClick={handleClick} {...clickEvents}>
        <h6>{title}</h6>
        <i className={menuOpen ? 'icon-angle-up' : 'icon-angle-down'} />
      </div>
      <ul className={subMenuClass}>{childrenComponent}</ul>
    </li>
  );
};

SubMenu.displayName = 'SubMenu';

export default SubMenu;
