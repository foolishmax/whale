---
title: Affix 固钉
nav:
  path: /components
  title: Components
---

## Examples

### 基本

<code src="./demo/basic.tsx" />

### 固定状态改变的回调

<code src="./demo/callback.tsx" />

### 滚动容器

<code src="./demo/target.tsx" />

## API

| 成员         | 说明                                                                   | 类型              | 默认值       |
| ------------ | ---------------------------------------------------------------------- | ----------------- | ------------ |
| offsetBottom | 距离窗口底部达到指定偏移量后触发                                       | number            | -            |
| offsetTop    | 距离窗口顶部达到指定偏移量后触发                                       | number            | -            |
| target       | 设置 `Affix` 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数 | () => HTMLElement | () => window |
| onChange     | 固定状态改变时触发的回调函数                                           | function(affixed) | -            |

**注意：**`Affix` 内的元素不要使用绝对定位，如需要绝对定位的效果，可以直接设置 `Affix` 为绝对定位：

<style>
#components-affix-demo-target .scrollable-container {
  height: 100px;
  overflow-y: scroll;
}

#components-affix-demo-target .background {
  padding-top: 60px;
  height: 300px;
  background-image: url('https://zos.alipayobjects.com/rmsportal/RmjwQiJorKyobvI.jpg');
}
</style>
