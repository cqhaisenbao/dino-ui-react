---
title: Menu 菜单 
path: /lib/menu
---

# Menu

## 默认样式

```tsx
import React from 'react';
import { Menu, MenuItem } from 'dino-ui-react';

export default () => <Menu mode={'vertical'} defaultIndex={1}>
  <MenuItem index={1}>
    <h6>首页1</h6>
  </MenuItem>
  <MenuItem index={2} disabled>
    <h6>首页2</h6>
  </MenuItem>
  <MenuItem index={3}>
    <h6>首页3</h6>
  </MenuItem>
</Menu>;
```

<API></API>
