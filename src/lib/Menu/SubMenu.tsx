import React, { useContext } from 'react';
import { MenuContext } from './index';
import classNames from 'classnames';

export interface SubMenuProps {
  index?: string;
  title: string;
  className?: string;
}

const SubMenu: React.FC<SubMenuProps> = ({ index, title, children, className }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const subMenuClass = classNames('dino-submenu', {
    'menu-opened': menuOpen,
  });
  const context = useContext(MenuContext);
  const classes = classNames('menu-item submenu-item', className, {
    'is-active': context.activeKey === index,
    'is-opened': menuOpen,
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
  return (
    <li key={index} className={classes} {...hoverEvents}>
      <div className="submenu-title" onClick={handleClick} {...clickEvents}>
        {title}
        <i className={menuOpen ? 'icon-angle-up' : 'icon-angle-down'} />
      </div>
      <ul className={subMenuClass}>{children}</ul>
    </li>
  );
};

SubMenu.displayName = 'SubMenu';

export default SubMenu;
