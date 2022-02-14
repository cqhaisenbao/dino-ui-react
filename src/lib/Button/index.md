---
title: Button 按钮
path: /lib/button
---

# Button

## 默认按钮

```tsx
import React from 'react';
import { Button } from 'dino-ui-react';

export default () => <Button disabled>默认按钮</Button>;
```

## 不同尺寸

```tsx
import React from 'react';
import { Button } from 'dino-ui-react';

export default () => (
  <div>
    <Button >默认按钮</Button>
    <Button buttonType={'primary'} >默认按钮</Button>
    <Button size={'lg'}>大按钮</Button>
    <Button size={'sm'}>小按钮</Button>
  </div>
);
```

## 不同类型

```tsx
import React from 'react';
import { Button } from 'dino-ui-react';

export default () => (
  <div>
    <Button >默认按钮</Button>
    <Button buttonType={'primary'} >primary</Button>
    <Button buttonType={'danger'} >danger</Button>
    <Button buttonType={'link'} href={''}>link</Button>
  </div>
);
```

## 禁用

```tsx
import React from 'react';
import { Button } from 'dino-ui-react';

export default () => (
  <div>
    <Button disabled>禁用按钮</Button>
    <Button buttonType={'link'} href={''} disabled>Disabled Link</Button>
  </div>
);
```

<API></API>
