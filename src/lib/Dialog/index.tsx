import React from 'react';

export interface DialogProps {
  title?: string;
  visible: boolean;
}

const Dialog: React.FC<DialogProps> = (props) => {
  const { visible, children } = props;
  return visible ? <div role={'dino-dialog'}>{children}</div> : null;
};

export default Dialog;
