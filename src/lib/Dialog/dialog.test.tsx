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

const generateProps = {
  visible: true,
};

let dialogElement: HTMLElement;

describe('Dialog', () => {
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
});
