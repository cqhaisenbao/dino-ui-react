import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button, { ButtonProps } from './index';

const defaultProps = {
  onClick: jest.fn(),
};

const testProps: ButtonProps = {
  buttonType: 'primary',
  size: 'lg',
  className: 'klass',
};

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn(),
};

describe('Button component test suite', () => {
  it('should render the correct default button', () => {
    const { getByText } = render(<Button {...defaultProps}>Click Me</Button>);
    const buttonElement = getByText('Click Me');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.tagName).toEqual('BUTTON');
    expect(buttonElement).toHaveClass('btn btn-default');
    fireEvent.click(buttonElement);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
  it('should render the correct component based on different props', () => {
    const { getByText } = render(<Button {...testProps}>Click Me</Button>);
    const buttonElement = getByText('Click Me');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('btn-primary btn-lg klass');
  });
  it('should render a link when buttonType is link and href is provided', () => {
    const { getByText } = render(
      <Button buttonType="link" href="https://www.google.com">
        Click Me
      </Button>,
    );
    const buttonElement = getByText('Click Me');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('btn btn-link');
    expect(buttonElement.getAttribute('href')).toEqual('https://www.google.com');
    expect(buttonElement.tagName).toEqual('A');
  });
  it('should render disabled button when disabled is true', () => {
    const { getByText } = render(<Button {...disabledProps}>Click Me</Button>);
    const buttonElement = getByText('Click Me') as HTMLButtonElement;
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.disabled).toBeTruthy();
    fireEvent.click(buttonElement);
    expect(disabledProps.onClick).not.toHaveBeenCalled();
  });
});
