import React, { useEffect, useState } from 'react';
import Button from '../Button';

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
    setMyVisible(false);
  };

  const Title = () => {
    return <header>{title}</header>;
  };

  const Footer = () => {
    return (
      <footer>
        <Button>{cancelText ? cancelText : '取消'}</Button>
        <Button buttonType="primary">{okText ? okText : '确认'}</Button>
      </footer>
    );
  };

  const Dialog = () => {
    return (
      <div role={'dino-dialog'}>
        <div className="dino-dialog-overlay" onClick={onClickOverlay} />
        <div className="dino-dialog-wrapper">
          <div className="dino-dialog">
            {Title()}
            <main>{children}</main>
            {Footer()}
          </div>
        </div>
      </div>
    );
  };
  return <>{myVisible ? Dialog() : ''}</>;
};

Dialog.defaultProps = {
  visible: false,
  closeOnClickOverlay: false,
  cancelText: '取消',
  okText: '确认',
  width: 30,
};

export default Dialog;
