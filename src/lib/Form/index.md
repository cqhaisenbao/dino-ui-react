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
  const [formData, setFormData] = React.useState({
    name: 'luff',
    age: '18',
  });
  const fields = [
    { name: 'name', label: '姓名', type: 'text', placeholder: '请输入姓名' },
    { name: 'age', label: '年龄', type: 'input', placeholder: '请输入年龄' },
  ];

  const submit = (e) => {
    console.log(e);
  };

  const Buttons = (
    <>
      <Button type="reset">重置</Button>
      <Button type="submit" buttonType={'primary'}>
        提交
      </Button>
    </>
  );

  return (
    <div>
      <Form
        onChange={setFormData}
        value={formData}
        fields={fields}
        buttons={Buttons}
        onSubmit={submit}
      />
    </div>
  );
};
```

<API></API>
