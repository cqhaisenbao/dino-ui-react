import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'dino-ui-react',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  apiParser: {
    propFilter: {
      // 是否忽略从 node_modules 继承的属性，默认值为 false
      skipNodeModules: true,
      // 需要忽略的属性名列表，默认为空数组
      skipPropsWithName: [''],
      // 是否忽略没有文档说明的属性，默认值为 false
      skipPropsWithoutDoc: true,
    },
  },
  menus: {
    // 需要自定义侧边菜单的路径，没有配置的路径还是会使用自动生成的配置
    '/lib': [
      {
        title: '基础组件',
        path: '/lib/base',
        children: [
          // 菜单子项（可选）
          '/lib/Button/index.md', // 对应的 Markdown 文件，路径是相对于 resolve.includes 目录识别的
          '/lib/Menu/index.md',
          '/lib/Dialog/index.md',
        ],
      },
    ],
  },
  navs: [
    // null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: '组件',
      path: '/lib',
    },
    {
      title: 'GitHub',
      path: 'https://github.com/umijs/dumi',
    },
  ],
});
