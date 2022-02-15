import Menu from "./index";
import {render, screen} from "@testing-library/react";
import React from "react";
import MenuItem from "./MenuItem";

let menuElement: HTMLElement | null;
let disabledMenuItem: HTMLElement | null;

describe('Menu test', () => {
  beforeEach(() => {
    render(
      <Menu className={'xx'}>
        <MenuItem index={1} disabled>
          <a href="#">
            <span>disabled</span>
          </a>
        </MenuItem>
        <MenuItem index={2}>
          <a href="#">
            <span>Menu Item</span>
          </a>
        </MenuItem>
      </Menu>
    );
    menuElement = screen.getByRole('menu');
    disabledMenuItem = screen.getByRole('menuitem',{name: 'disabled'});
  });
  it('should render correctly', () => {
    expect(menuElement).toBeInTheDocument();
    expect(menuElement).toHaveClass('dino-menu xx');
  });
  it('should render correctly when props have disabled', () => {
    expect(disabledMenuItem).toHaveClass('is-disabled');
  });
});
