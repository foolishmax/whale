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
        title: 'Navigation',
        children: ['components/affix/index.en-US.md'],
      },
      {
        title: 'Data Entry',

        children: [
          'components/input/index.en-US.md',
          'components/switch/index.en-US.md',
          'components/radio/index.en-US.md',
        ],
      },
      {
        title: 'Data Display',
        children: ['components/tooltip/index.en-US.md'],
      },
      {
        title: 'Feedback',
        children: ['components/skeleton/index.en-US.md'],
      },
      {
        title: 'Other',
        children: ['components/back-top/index.en-US.md'],
      },
    ],
    '/zh-CN/components': [
      {
        title: '通用',
        children: [
          'components/button/index.zh-CN.md',
          'components/icon/index.zh-CN.md',
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
        title: '导航',
        children: ['components/affix/index.zh-CN.md'],
      },
      {
        title: '数据录入',
        children: [
          'components/input/index.zh-CN.md',
          'components/switch/index.zh-CN.md',
          'components/radio/index.zh-CN.md',
        ],
      },
      {
        title: '数据展示',
        children: ['components/tooltip/index.zh-CN.md'],
      },
      {
        title: '反馈',
        children: ['components/skeleton/index.zh-CN.md'],
      },
      {
        title: '其他',
        children: ['components/back-top/index.zh-CN.md'],
      },
    ],
  },
});
