---
title: Dialog 弹窗 
path: /lib/dialog
---

# Dialog

## 默认样式

```tsx
import React from 'react';
import { Dialog, Button } from 'dino-ui-react';

export default () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <>
      <Button onClick={() => setVisible(!visible)}>open</Button>
      <Dialog title="提示" visible={visible}><p>这是一个提示</p></Dialog>
    </>
  );
};
```

## 自定义footer

```tsx
import React from 'react';
import { Dialog, Button } from 'dino-ui-react';

export default () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <>
      <Button onClick={() => setVisible(!visible)}>open</Button>
      <Dialog title="提示" visible={visible} footer={<Button href={'www.baidu.com'} buttonType={'link'}>自定义footer</Button>}><p>这是一个提示</p></Dialog>
    </>
  );
};
```

<API></API>
