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
});
