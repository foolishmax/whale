import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'whale',
  base: '/whale',
  publicPath: '/whale/',
  exportStatic: {},
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'data:image/png;base64,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',
  outputPath: 'docs-dist',
  mode: 'site',
  // more config: https://d.umijs.org/config
  menus: {
    // 需要自定义侧边菜单的路径，没有配置的路径还是会使用自动生成的配置
    '/components': [
      {
        title: '基础通用',
        children: [
          // 菜单子项（可选）
          'components/Button/index.md',
          'components/Input/index.md',
        ],
      },
    ],
  },
});
