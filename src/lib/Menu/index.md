---
title: Menu 菜单
path: /lib/menu
---

# Menu

## 默认样式

```tsx
import React from 'react';
import { Menu, MenuItem } from '@yifui/react';

export default () => (
  <Menu defaultIndex={'1'}>
    <MenuItem>
      <h6>首页1</h6>
    </MenuItem>
    <MenuItem disabled>
      <h6>首页2</h6>
    </MenuItem>
    <MenuItem>
      <h6>首页3</h6>
    </MenuItem>
  </Menu>
);
```

## 下拉菜单

```tsx
import React from 'react';
import { Menu, MenuItem, SubMenu } from '@yifui/react';

export default () => (
  <Menu
    mode="vertical"
    defaultIndex={'1'}
    onSelect={(index) => alert(index)}
    defaultOpenSubMenus={['2']}
  >
    <MenuItem>
      <h6>首页1</h6>
    </MenuItem>
    <MenuItem disabled>
      <h6>首页2</h6>
    </MenuItem>
    <SubMenu title="dropdown">
      <MenuItem>
        <h6>首页3-1</h6>
      </MenuItem>
      <MenuItem>
        <h6>首页3-2</h6>
      </MenuItem>
    </SubMenu>
    <MenuItem>
      <h6>首页4</h6>
    </MenuItem>
  </Menu>
);
```

<API></API>
