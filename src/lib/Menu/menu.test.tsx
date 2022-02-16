import Menu, {MenuProps} from './index';
import {cleanup, render, screen, fireEvent, waitFor} from '@testing-library/react';
import React from 'react';
import MenuItem from './MenuItem';
import SubMenu from "./SubMenu";

const testProps = {
  defaultIndex: '0',
  onSelect: jest.fn(),
  className: 'test',
};

const testVerProps: MenuProps = {
  defaultIndex: '0',
  mode: 'vertical',
};

const generateMenu = (props: MenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem>active</MenuItem>
      <MenuItem disabled>disabled</MenuItem>
      <MenuItem>xyz</MenuItem>
    </Menu>
  );
};

const subMenu = (props: MenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem>active</MenuItem>
      <MenuItem disabled>disabled</MenuItem>
      <SubMenu title="dropdown">
        <MenuItem>
          <h6>首页3-1</h6>
        </MenuItem>
        <MenuItem>
          <h6>首页3-2</h6>
        </MenuItem>
      </SubMenu>
      <MenuItem>xyz</MenuItem>
    </Menu>
  )
}

const subMenuErrorChild = (props: MenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem>active</MenuItem>
      <SubMenu title="dropdown">
        <h6>首页3-1</h6>
      </SubMenu>
    </Menu>
  )
}

let menuElement: HTMLElement, activeElement: HTMLElement, disabledElement: HTMLElement;

describe('Menu test', () => {
  beforeEach(() => {
    render(generateMenu(testProps));
    menuElement = screen.getByTestId('test-menu');
    activeElement = screen.getByText('active');
    disabledElement = screen.getByText('disabled');
  });
  it('should render correctly', () => {
    expect(menuElement).toBeInTheDocument();
    expect(menuElement).toHaveClass('dino-menu test');
    expect(menuElement.querySelectorAll(':scope > li').length).toEqual(3);
    expect(activeElement).toHaveClass('menu-item is-active');
    expect(disabledElement).toHaveClass('menu-item is-disabled');
  });
  it('click items should change active and call the right callback', () => {
    const thirdItem = screen.getByText('xyz');
    thirdItem.click();
    expect(thirdItem).toHaveClass('is-active');
    expect(activeElement).not.toHaveClass('is-active');
    expect(testProps.onSelect).toHaveBeenCalledWith('2');
    disabledElement.click();
    expect(disabledElement).not.toHaveClass('is-active');
    expect(testProps.onSelect).not.toHaveBeenCalledWith('1');
  });
  it('should render vertical mode when mode is set to vertical', () => {
    cleanup();
    render(generateMenu(testVerProps));
    const menuElement = screen.getByTestId('test-menu');
    expect(menuElement).toHaveClass('menu-vertical');
  });
  it('should render subMenu correctly', function () {
    cleanup()
    render(subMenu(testProps))
    const subMenuElement = screen.getByRole('submenu')
    const titleElement = screen.getByText('dropdown')
    screen.debug(titleElement)
    expect(titleElement).toBeInTheDocument()
    expect(subMenuElement).toHaveClass('submenu-item')
  });
});

describe('SubMenu test', () => {
  it('should console error when submenu have err child', function () {
    cleanup()
    render(subMenuErrorChild(testProps))
    const errorChild = screen.queryByText('首页3-1')
    expect(errorChild).toBeNull()
  });
  it('hoverEvent should beCall when mode set to horizontal', async function () {
    cleanup()
    render(subMenu({
      ...testProps,
      mode: 'horizontal',
    }))
    const subMenuElement = screen.getByRole('submenu')
    fireEvent.mouseEnter(subMenuElement)
    await waitFor(() => expect(subMenuElement).toHaveClass('is-opened'), {
      timeout: 1000,
    })
    fireEvent.mouseLeave(subMenuElement)
    await waitFor(() => expect(subMenuElement).not.toHaveClass('is-opened'), {
      timeout: 1000,
    })
  })
  it('isOpened should true when defaultOpenSubMenus props be set', function () {
    cleanup()
    render(subMenu({
      ...testVerProps,
      defaultOpenSubMenus: ['2'],
    }))
    const subMenuElement = screen.getByRole('submenu')
    expect(subMenuElement).toHaveClass('is-opened')
  });
  it('should have class is-open when defaultOpenSubMenus has been set', function () {
    cleanup()
    render(subMenu({
      ...testVerProps,
      defaultOpenSubMenus: ['2'],
      mode: 'vertical'
    }))
    const titleElement = screen.getByRole('submenu-title')
    const subMenuElement = screen.getByRole('submenu')
    expect(subMenuElement).toHaveClass('is-opened')
    fireEvent.click(titleElement)
    expect(subMenuElement).not.toHaveClass('is-opened')
    fireEvent.click(titleElement)
    expect(subMenuElement).toHaveClass('is-opened')
  });
})
