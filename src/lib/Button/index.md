---
title: Button 按钮
path: /lib/button
---

# Button

## 默认按钮

```tsx
import React from 'react';
import { Button } from 'dino-ui-react';

export default () => <Button disabled size={'lg'}>默认按钮</Button>;
```

## Link按钮

```tsx
import React from 'react';
import { Button } from 'dino-ui-react';

export default () => <Button buttonType={'link'} href={'www.baidu.com'}>Link</Button>;
```

<API></API>
