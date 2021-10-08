import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'whale',
  base: '/whale',
  publicPath: '/whale/',
  exportStatic: {},
  favicon: '/whale/logo.svg',
  logo: '/whale/logo.svg',
  outputPath: 'docs-dist',
  mode: 'site',
  links: [{ rel: 'stylesheet', href: '/whale/style.css' }],
  navs: {
    'zh-CN': [
      null,
      { title: 'GitHub', path: 'https://github.com/foolishmax/whale' },
    ],
    'en-US': [
      null,
      { title: 'GitHub', path: 'https://github.com/foolishmax/whale' },
    ],
  },
  menus: {
    '/components': [
      {
        title: 'General',
        children: [
          'components/button/index.en-US.md',
          'components/icon/index.en-US.md',
          'components/input/index.en-US.md',
        ],
      },
      {
        title: 'Layout',
        children: [
          'components/divider/index.en-US.md',
          'components/grid/index.en-US.md',
        ],
      },
      {
        title: 'Data Entry',
        children: ['components/switch/index.en-US.md'],
      },
    ],
    '/zh-CN/components': [
      {
        title: '通用',
        children: [
          'components/button/index.zh-CN.md',
          'components/icon/index.zh-CN.md',
          'components/input/index.zh-CN.md',
        ],
      },
      {
        title: '布局',
        children: [
          'components/divider/index.zh-CN.md',
          'components/grid/index.zh-CN.md',
        ],
      },
      {
        title: '数据录入',
        children: ['components/switch/index.zh-CN.md'],
      },
    ],
  },
});
