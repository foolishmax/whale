---
title: Gird 栅格
nav:
  title: React
  path: /react
group:
  title: 布局
  path: /layout
---

## 代码演示

### 基础栅格

<code src="./demo/base.tsx" />

### 区块间隔

<code src="./demo/gutter.tsx" />

### 排版

<code src="./demo/flex-justify.tsx" />

### 对齐

<code src="./demo/flex-align.tsx" />

### 排序

<code src="./demo/flex-order.tsx" />

### Flex 填充

<code src="./demo/flex.tsx" />

### 左右偏移

<code src="./demo/offset.tsx" />

## API

### Row

| 属性    | 说明                                                                                                                                   | 类型                                                              | 默认值  |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | ------- | --- |
| align   | 垂直对齐方式                                                                                                                           | `top` \| `middle` \| `bottom`                                     | `top`   |
| gutter  | 栅格间隔，可以写成像素值或支持响应式的对象写法来设置水平间隔 { xs: 8, sm: 16, md: 24}。或者使用数组形式同时设置 `[水平间距, 垂直间距]` | number \| object \| array                                         | 0       |
| justify | 水平排列方式                                                                                                                           | `start` \| `end` \| `center` \| `space-around` \| `space-between` | `start` |     |
| wrap    | 是否自动换行                                                                                                                           | boolean                                                           | true    |

### Col

| 成员   | 说明                                                           | 类型             | 默认值 |
| ------ | -------------------------------------------------------------- | ---------------- | ------ |
| flex   | flex 布局属性                                                  | string \| number | -      |
| offset | 栅格左侧的间隔格数，间隔内不可以有栅格                         | number           | 0      |
| order  | 栅格顺序                                                       | number           | 0      |
| pull   | 栅格向左移动格数                                               | number           | 0      |
| push   | 栅格向右移动格数                                               | number           | 0      |
| span   | 栅格占位格数，为 0 时相当于 `display: none`                    | number           | -      |
| xs     | `屏幕 < 576px` 响应式栅格，可为栅格数或一个包含其他属性的对象  | number \| object | -      |
| sm     | `屏幕 ≥ 576px` 响应式栅格，可为栅格数或一个包含其他属性的对象  | number \| object | -      |
| md     | `屏幕 ≥ 768px` 响应式栅格，可为栅格数或一个包含其他属性的对象  | number \| object | -      |
| lg     | `屏幕 ≥ 992px` 响应式栅格，可为栅格数或一个包含其他属性的对象  | number \| object | -      |
| xl     | `屏幕 ≥ 1200px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number \| object | -      |
| xxl    | `屏幕 ≥ 1600px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number \| object | -      |

<style>
[id^=components-grid-demo-] .whale-row > .whale-col {
  min-height: 30px;
  margin-top: 8px;
  margin-bottom: 8px;
  color: #fff;
  text-align: center;
  border-radius: 0;
  padding: 16px 0;
  background-color: rgba(0, 146, 255, 0.75);
}

[id^=components-grid-demo-] .whale-row > .whale-col:nth-child(even) {
  background-color: rgba(0, 146, 255);
}

[id^=components-grid-demo-] .whale-row  .gutter-row {
  background-color: #fff;
  padding: 0;
}
</style>
