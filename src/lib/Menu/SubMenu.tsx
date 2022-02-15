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
  const context = useContext(MenuContext);
  const classes = classNames('menu-item submenu-item', className, {
    'is-active': context.activeKey === index,
    // 'is-opened': menuOpen,
  });
  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <li key={index} className={classes}>
      <div className="submenu-title" onClick={handleClick}>
        {title}
        <i className={menuOpen ? 'icon-angle-up' : 'icon-angle-down'} />
      </div>
      <ul className="dino-submenu">{children}</ul>
    </li>
  );
};

SubMenu.displayName = 'SubMenu';

export default SubMenu;
