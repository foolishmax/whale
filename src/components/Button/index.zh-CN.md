---
title: Button 按钮
nav:
  path: /components
  title: 组件
---

## 代码演示

### 按钮类型

<code src="./demo/type.tsx" />

### 按钮形状

<code src="./demo/shape" />

### 按钮大小

<code src="./demo/size.tsx" />

### 危险按钮

<code src="./demo/danger.tsx" />

### 禁用状态

<code src="./demo/disabled.tsx" />

### Block按钮

<code src="./demo/block.tsx" />

### Loading加载中状态

<code src="./demo/loading.tsx" />

### 图标按钮

<code src="./demo/icon.tsx" />

## API

通过设置 Button 的属性来产生不同的按钮样式。
| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| block | 按钮宽度调整为其父级元素宽度 | boolean |  false |
| danger | 设置危险状态 | boolean | false|
| disabled | 设置按钮禁用状态 | boolean | false |
| href | 点击跳转的地址 | string | - |
| htmlType | 设置`button`的原生`type`值,可选值有`submit`、`reset`、`button` | string | button |
| icon | 设置按钮的图标组件 | ReactNode | - |
| loading | 设置按钮载入状态 | boolean | false |
| shape | 设置按钮形状 | `default` \| `circle` \| `round` | 'default' |
| size | 设置按钮大小 | `large`\|`middle`\|`small` | `middle` |
| target | 相当于 a 链接的 target 属性，href 存在时生效 | string | - |
| type | 设置按钮类型 | `default`\|`primary`\|`dashed`\|`link`\|`text` | `default` |
| --- | --- | --- | --- |
| onClick | 点击按钮时的回调 | (event) => void | - |

<style>
[id^=components-button-demo-] .whale-btn {
  margin-right: 8px;
  margin-bottom: 12px;
}
</style>
