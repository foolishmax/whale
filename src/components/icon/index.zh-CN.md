---
title: IconFont
nav:
  path: /components
  title: Components
---

## Examples

### IconFont

<code src="./demo/iconfont.tsx" />

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 设置图标的类名 | string | - |
| component | 控制如何渲染图标，通常是一个渲染根标签为 \<svg\> 的 React 组件 | ReactNode | - |
| rotate | 图标旋转角度 | number | - |
| spin | 是否有旋转动画 | boolean | false |
| style | 设置图标的样式，例如 fontSize 和 color | CSSProperties | - |


## 自定义 iconfont 图标
通过 createFromIconfontCN 方法，让开发者调用iconfont.cn上自行管理的图标。

```js
import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2841973_y2pjf0rngd.js', // 在 iconfont.cn 上生成
});

ReactDOM.render(<IconFont type="icon-example" />, mountedNode);
```

options 的配置项如下：
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| extraCommonProps | 给所有的 `svg` 图标 `<Icon />` 组件设置额外的属性 | { \[key: string]: any } | {} |  |
| scriptUrl | [iconfont.cn](http://iconfont.cn/) 项目在线生成的 js 地址 | string \| string\[] | - |  |

<style>
[id^="components-icon-demo-"] > .whaleicon {
  margin-right: 6px;
  font-size: 24px;
}
</style>


