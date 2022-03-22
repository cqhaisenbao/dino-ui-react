import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button, { ButtonProps } from './index';

const defaultProps: ButtonProps = {
  onClick: jest.fn(),
};

const testProps: ButtonProps = {
  buttonType: 'primary',
  size: 'lg',
  className: 'klass',
};

const linkProps: ButtonProps = {
  href: 'http://www.baidu.com',
  buttonType: 'link',
};

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn(),
};

describe('test Button component', () => {
  it('should render correct default button', function () {
    const { getByText } = render(<Button {...defaultProps}>click</Button>);
    const element = getByText('click') as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('BUTTON');
    expect(element).toHaveClass('btn btn-normal btn-default');
    fireEvent.click(element);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
  it('should render correct component based on different props', function () {
    const { getByText } = render(<Button {...testProps}>click</Button>);
    const element = getByText('click') as HTMLButtonElement;
    expect(element).toHaveClass('btn btn-primary btn-lg klass');
  });
  it('should render a link when buttonType equals link and href is provider', function () {
    const { getByText } = render(<Button {...linkProps}>click</Button>);
    const element = getByText('click') as HTMLButtonElement;
    expect(element.tagName).toEqual('A');
    expect(element).toHaveClass('btn btn-link');
  });
  it('should render disabled button when disabled set to true', function () {
    const { getByText } = render(<Button {...disabledProps}>click</Button>);
    const element = getByText('click') as HTMLButtonElement;
    expect(element).toBeDisabled();
    fireEvent.click(element);
    expect(disabledProps.onClick).not.toHaveBeenCalled();
  });
  it('should render loading button when loading set to true', function () {
    const { getByText } = render(
      <Button {...defaultProps} loading={true}>
        click
      </Button>,
    );
    const element = getByText('click') as HTMLButtonElement;
    const loadingIndicator = element.querySelector('.btn-loadingIndicator') as HTMLSpanElement;
    expect(element).toHaveClass('btn-loading');
    expect(loadingIndicator).toBeInTheDocument();
    fireEvent.click(element);
    expect(defaultProps.onClick).not.toHaveBeenCalled();
  });
});
