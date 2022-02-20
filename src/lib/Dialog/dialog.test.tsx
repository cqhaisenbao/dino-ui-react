import React from 'react';
import Dialog, { DialogProps } from './index';
import { render, screen } from '@testing-library/react';

const dialogRender = (props: DialogProps) => {
  return (
    <div>
      <Dialog {...props}>Dialog</Dialog>
    </div>
  );
};

const generateProps: DialogProps = {
  visible: true,
  closeOnClickOverlay: true,
};

let dialogElement: HTMLElement;

describe('Dialog test', () => {
  beforeEach(() => {
    render(dialogRender(generateProps));
    dialogElement = screen.getByRole('dino-dialog');
  });
  it('should render dialog', () => {
    expect(dialogElement).toBeInTheDocument();
  });
  it('should render children', function () {
    expect(dialogElement).toHaveTextContent('Dialog');
  });
  it('should close dialog when click overlay', function () {
    const overlay = screen.getByRole('dino-dialog-overlay');
    overlay.click();
    expect(dialogElement).not.toBeInTheDocument();
  });
});
