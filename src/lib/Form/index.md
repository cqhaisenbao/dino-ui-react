---
title: Form 表单
path: /lib/form
---

# Form

## 默认使用

```tsx
import React from 'react';
import { Form, Button } from '@yifui/react';

export default () => {
  const fields = [
    { name: 'nsme', label: '姓名', type: 'input', value: '', placeholder: '请输入姓名' },
    { name: '年龄', label: '年龄', type: 'input', value: '', placeholder: '请输入年龄' },
  ];

  const Buttons = (
    <>
      <Button type="submit">提交</Button>
      <Button type="reset">重置</Button>
    </>
  );

  return (
    <div>
      <Form fields={fields} buttons={Buttons} />
    </div>
  );
};
```

<API></API>
