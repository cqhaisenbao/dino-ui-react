import React, { useEffect, useState } from 'react';
import Button from '../Button';
import classNames from 'classnames';
import ReactDOM from 'react-dom';

export interface DialogProps {
  /**
   * @description       弹窗标题
   */
  title?: string;
  /**
   * @description       弹窗是否可见
   */
  visible?: boolean;
  /**
   * @description       自定义footer
   */
  footer?: React.ReactNode;
  /**
   * @description       点击遮罩是否可关闭
   */
  closeOnClickOverlay?: boolean;
  /**
   * @description       点击确定回调
   */
  onOk?: () => void;
  /**
   * @description       关闭弹窗回调
   */
  onCancel?: () => void;
  /**
   * @description       取消按钮文字
   */
  cancelText?: string;
  /**
   * @description       确定按钮文字
   */
  okText?: string;
  /**
   * @description       弹窗宽度
   */
  width?: number;
}

const Dialog: React.FC<DialogProps> = (props) => {
  const {
    title,
    visible,
    onCancel,
    onOk,
    footer,
    okText,
    cancelText,
    width,
    closeOnClickOverlay,
    children,
  } = props;

  const [myVisible, setMyVisible] = useState(visible);

  useEffect(() => {
    setMyVisible(visible);
  }, [visible]);

  const onClickOverlay = () => {
    if (closeOnClickOverlay) {
      setMyVisible(false);
    }
  };

  const [hoverClose, setHoverClose] = useState(false);
  const classes = classNames('dino-dialog-close', {
    'dino-dialog-close-hover': hoverClose,
  });

  const Title = () => {
    return (
      <header>
        {title}
        <div
          onMouseEnter={() => setHoverClose(true)}
          onMouseLeave={() => setHoverClose(false)}
          onClick={() => setMyVisible(false)}
          className={classes}
        />
      </header>
    );
  };

  const Footer = () => {
    return (
      <footer>
        {footer ? (
          footer
        ) : (
          <>
            <Button>{cancelText ? cancelText : '取消'}</Button>
            <Button buttonType="primary">{okText ? okText : '确认'}</Button>
          </>
        )}
      </footer>
    );
  };

  const Dialog = () => {
    return (
      <div role={'dino-dialog'}>
        <div role="dino-dialog-overlay" className="dino-dialog-overlay" onClick={onClickOverlay} />
        <div className="dino-dialog-wrapper">
          <div className="dino-dialog">
            <Title />
            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </div>
    );
  };
  return <>{myVisible ? ReactDOM.createPortal(<Dialog />, document.body) : ''}</>;
};

Dialog.defaultProps = {
  visible: false,
  closeOnClickOverlay: false,
  cancelText: '取消',
  okText: '确认',
  width: 30,
};

export default Dialog;
